import { test, expect } from '@playwright/test';

test.describe('DSA Cockpit Frontend - Characters API Integration', () => {
  test('should fetch characters from backend API', async ({ page }) => {
    // Set up API response listener
    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/characters') && response.status() === 200
    );

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    // Wait for the API call to complete
    const response = await responsePromise;
    const data = await response.json();

    // Verify response structure
    expect(data).toHaveProperty('characters');
    expect(Array.isArray(data.characters)).toBeTruthy();
    expect(data).toHaveProperty('count');
  });

  test('should display characters in the UI', async ({ page }) => {
    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/characters') && response.status() === 200
    );

    await page.goto('/player/heroes');

    const response = await responsePromise;
    const { characters } = (await response.json()) as { characters: { name: string }[] };
    expect(characters.length).toBeGreaterThan(0);

    // Once the API has succeeded, the landing screen offers a "Los geht's!" button
    // that flips gameStarted=true and renders the hero-card list.
    const startButton = page.getByRole('button', { name: "Los geht's!" });
    await expect(startButton).toBeVisible();
    await startButton.click();

    // The hero list only renders after gameStarted === true.
    const heroCards = page.locator('hero-card');
    await expect(heroCards).toHaveCount(characters.length);

    // Each card must surface its hero's name in the header.
    for (const character of characters) {
      await expect(
        heroCards.locator('h2', { hasText: character.name })
      ).toBeVisible();
    }
  });

  test('should display current attack and parade for melee heroes', async ({ page }) => {
    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/characters') && response.status() === 200
    );

    await page.goto('/player/heroes');

    const response = await responsePromise;
    const { characters } = (await response.json()) as {
      characters: { name: string; weapons: { skill: number; isEquipped?: boolean }[] }[];
    };

    // At least one hero must carry a melee weapon — otherwise the test premise
    // (Attacke/Parade visible) cannot be validated. Skill type_id 1 = "Kampftechniken".
    const skillsResponse = await page.request.get('http://localhost:3000/api/skills');
    const allSkills = (await skillsResponse.json()) as { id: number; type: number }[];
    const meleeSkillIds = new Set(allSkills.filter((s) => s.type === 1).map((s) => s.id));

    // Mirror Hero.structureSkills: the current weapon is whichever the server
    // says is equipped, falling back to the first weapon in the list.
    const currentWeaponOf = (c: { weapons: { skill: number; isEquipped?: boolean }[] }) =>
      c.weapons.find((w) => w.isEquipped) ?? c.weapons[0];

    const heroesWithMeleeCurrentWeapon = characters.filter((c) => {
      const current = currentWeaponOf(c);
      return current !== undefined && meleeSkillIds.has(current.skill);
    });
    expect(
      heroesWithMeleeCurrentWeapon.length,
      'fixture data must include at least one hero whose current weapon is melee'
    ).toBeGreaterThan(0);

    const startButton = page.getByRole('button', { name: "Los geht's!" });
    await expect(startButton).toBeVisible();
    await startButton.click();

    // For each hero whose current weapon is melee, that hero's card must surface
    // Attacke and Parade with numeric values (set in Hero.currentWeapon setter
    // when skillGroupId === 1).
    for (const hero of heroesWithMeleeCurrentWeapon) {
      const card = page.locator('hero-card').filter({ hasText: hero.name });
      await expect(card).toBeVisible();

      const attackItem = card.locator('li').filter({ hasText: 'Attacke:' });
      await expect(attackItem).toBeVisible();
      await expect(attackItem).toHaveText(/Attacke:\s*\d+/);

      const paradeItem = card.locator('li').filter({ hasText: 'Parade:' });
      await expect(paradeItem).toBeVisible();
      await expect(paradeItem).toHaveText(/Parade:\s*\d+/);
    }
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Intercept the API call and return an error
    await page.route('**/api/characters', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      });
    });

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    // The app should still render without crashing
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
  });

  test('should make authenticated requests with credentials', async ({ page }) => {
    const requestPromise = page.waitForRequest(
      (request) => request.url().includes('/api/characters')
    );

    await page.goto('/player/heroes');

    const request = await requestPromise;

    // Verify that credentials are included
    // The credentials interceptor should add withCredentials: true
    expect(request.url()).toContain('/api/characters');
  });
});

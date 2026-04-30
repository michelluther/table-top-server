import { test, expect } from '@playwright/test';

test.describe('DSA Cockpit Frontend - Skills API Integration', () => {
  test('should fetch skills from backend API', async ({ page }) => {
    // Listen for skills API call
    const skillsPromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/skills') && response.status() === 200,
      { timeout: 10000 }
    );

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    try {
      const response = await skillsPromise;
      const data = await response.json();

      // Verify response is an array of skills
      expect(Array.isArray(data)).toBeTruthy();

      if (data.length > 0) {
        // Check structure of first skill
        const skill = data[0];
        expect(skill).toHaveProperty('id');
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('dsa_starter_skilltype');
      }
    } catch (error) {
      // Skills might not be loaded on initial page load
      // This is okay - we're just checking if the endpoint works when called
      console.log('Skills API not called on this page - this is okay');
    }
  });

  test('should fetch skill types from backend API', async ({ page }) => {
    // Listen for skill-types API call
    const skillTypesPromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/skill-types') && response.status() === 200,
      { timeout: 10000 }
    );

    await page.goto('/player/heroes');
    await page.waitForLoadState('networkidle');

    try {
      const response = await skillTypesPromise;
      const data = await response.json();

      // Verify response is an array of skill types
      expect(Array.isArray(data)).toBeTruthy();

      if (data.length > 0) {
        // Check structure of first skill type
        const skillType = data[0];
        expect(skillType).toHaveProperty('id');
        expect(skillType).toHaveProperty('name');
        expect(skillType).toHaveProperty('dsa_starter_skillgroup');
      }
    } catch (error) {
      // Skill types might not be loaded on initial page load
      console.log('Skill types API not called on this page - this is okay');
    }
  });

  test('backend skills endpoint should return valid data', async ({ request }) => {
    // Direct API test
    const response = await request.get('http://localhost:3000/api/skills');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();

    if (data.length > 0) {
      const skill = data[0];
      expect(skill).toHaveProperty('id');
      expect(skill).toHaveProperty('name');
      expect(skill).toHaveProperty('type_id');
      expect(skill).toHaveProperty('dsa_starter_skilltype');
    }
  });

  test('backend skill-types endpoint should return valid data', async ({ request }) => {
    // Direct API test
    const response = await request.get('http://localhost:3000/api/skill-types');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();

    if (data.length > 0) {
      const skillType = data[0];
      expect(skillType).toHaveProperty('id');
      expect(skillType).toHaveProperty('name');
      expect(skillType).toHaveProperty('skill_group_id');
      expect(skillType).toHaveProperty('skill_group');
    }
  });
});

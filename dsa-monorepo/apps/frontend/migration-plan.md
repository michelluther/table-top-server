# Angular 6 to Angular 20 LTS Migration Plan

## Overview
This document outlines the step-by-step migration path from Angular 6.1.0 to Angular 20 LTS for the table-top-client application. This is a major version jump that requires careful planning and execution.

## Current State Analysis

### Current Dependencies
- Angular: 6.1.0
- Angular Material: 6.1.0
- TypeScript: 2.9.2
- RxJS: 6.2.0 (with rxjs-compat)
- Angular CLI: 6.2.7
- Node.js: ~8.9.4 (based on package.json types)

### Breaking Changes Identified
1. **HttpModule → HttpClientModule**: Using deprecated `@angular/http`
2. **RxJS Legacy Imports**: Using `rxjs/Observable` and operator imports
3. **ViewChild**: Missing required static flag (Angular 8+)
4. **Angular Material**: Major API changes across versions
5. **TypeScript**: Needs upgrade to support modern Angular
6. **TSLint**: Deprecated in favor of ESLint
7. **Protractor**: Deprecated for e2e testing
8. **Service Worker**: API changes

## Migration Strategy

### Phase 1: Environment Preparation
**Estimated Time: 2-3 days**

1. **Prerequisites Check**
   - Ensure Node.js 18+ is installed (Angular 20 requirement)
   - Backup current codebase
   - Create feature branch for migration
   - Document current functionality for testing

2. **Dependencies Analysis**
   - Audit all third-party packages for Angular 20 compatibility
   - Plan replacement for incompatible packages:
     - `angular-scroll` → Native Angular CDK scrolling
     - `ngx-modal-dialog` → Angular Material Dialog
     - `hammerjs` → Optional in newer versions

### Phase 2: Incremental Version Updates
**Estimated Time: 1-2 weeks**

Angular doesn't support jumping from v6 to v20 directly. Use Angular Update Guide for incremental updates:

#### 2.1 Angular 6 → 7
- Update Angular CLI: `ng update @angular/cli@7`
- Update Angular core: `ng update @angular/core@7`
- Update Angular Material: `ng update @angular/material@7`
- Bundle budgets configuration updates

#### 2.2 Angular 7 → 8
- **Critical**: Angular Elements and Dynamic Imports support
- CLI Workspaces support
- Update commands:
  ```bash
  ng update @angular/cli@8 @angular/core@8
  ng update @angular/material@8
  ```

#### 2.3 Angular 8 → 9
- **Major**: Ivy rendering engine (opt-in)
- Dynamic imports for lazy routes
- Tree-shakable providers
- Update commands:
  ```bash
  ng update @angular/cli@9 @angular/core@9
  ng update @angular/material@9
  ```

#### 2.4 Angular 9 → 10
- **Major**: Ivy renderer becomes default
- New Date Range Picker in Material
- Angular DevKit Architect API changes

#### 2.5 Angular 10 → 11
- Hot Module Replacement (HMR) support
- Component harnesses for testing
- Router performance improvements

#### 2.6 Angular 11 → 12
- **Major**: Ivy everywhere, View Engine deprecated
- Sass support improvements
- Webpack 5 support

#### 2.7 Angular 12 → 13
- **Major**: View Engine removed completely
- Angular Package Format changes
- Dynamic component creation changes

#### 2.8 Angular 13 → 14
- **Major**: Standalone components
- Angular CLI auto-completion
- Optional injectors in embedded views

#### 2.9 Angular 14 → 15
- **Major**: Standalone APIs stable
- MDC-based Angular Material
- Image optimization directive

#### 2.10 Angular 15 → 16
- **Major**: Standalone ng new schematic
- Angular Material redesign
- Non-destructive hydration

#### 2.11 Angular 16 → 17
- **Major**: New control flow syntax (@if, @for, @switch)
- View Transitions API
- Server-side rendering improvements

#### 2.12 Angular 17 → 18
- Built-in event replay for SSR
- Material 3 design tokens
- Control flow stable

#### 2.13 Angular 18 → 19
- **Major**: Material-based control flow
- Incremental hydration improvements
- Zone.js optional in many cases

#### 2.14 Angular 19 → 20
- **Major**: Standalone components as default
- Enhanced SSR capabilities
- Performance improvements

### Phase 3: Code Modernization (Parallel to Version Updates)
**Estimated Time: 1-2 weeks**

#### 3.1 HTTP Services Migration
**Files to Update:**
- `src/app/app.module.ts`
- All service files in `src/app/domain/`
- `src/app/remote-control*/`

**Changes Required:**
```typescript
// OLD (Angular 6)
import { HttpModule, Http, Response } from '@angular/http';

// NEW (Angular 20)
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
```

**Action Items:**
1. Replace `HttpModule` with `HttpClientModule` in app.module.ts
2. Replace `Http` with `HttpClient` in all services
3. Update API calls from `.json()` to direct parsing
4. Update error handling patterns

#### 3.2 RxJS Modernization
**Files to Update:**
- All service files using RxJS
- Components with Observable subscriptions

**Changes Required:**
```typescript
// OLD (RxJS 6 with compat)
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// NEW (Modern RxJS)
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
```

**Action Items:**
1. Remove `rxjs-compat` dependency
2. Update all Observable imports
3. Convert operator imports to pipeable operators
4. Update Subject imports from 'rxjs/Rx'

#### 3.3 ViewChild Updates
**Files to Update:**
- `src/app/hero-controls/hero-controls.component.ts`
- `src/app/magic-display/magic-display.component.ts`
- `src/app/life-display/life-display.component.ts`

**Changes Required:**
```typescript
// OLD (Angular 6-7)
@ViewChild(LifeDisplayComponent) lifeDisplay: LifeDisplayComponent;

// NEW (Angular 8+)
@ViewChild(LifeDisplayComponent, { static: false }) lifeDisplay: LifeDisplayComponent;
```

#### 3.4 Angular Material Migration
**Major Changes:**
- Import paths restructured
- Component APIs updated
- Theme system updated to Material Design 3

**Action Items:**
1. Update Material imports in app.module.ts
2. Replace deprecated Material components
3. Update theme configuration
4. Test all Material-dependent components

#### 3.5 TypeScript Configuration Updates
**Files to Update:**
- `tsconfig.json`
- `src/tsconfig.app.json`
- `src/tsconfig.spec.json`

**Key Changes:**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "dom"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Phase 4: Testing and Build System Updates
**Estimated Time: 3-5 days**

#### 4.1 Replace TSLint with ESLint
**Action Items:**
1. Remove TSLint dependencies and configuration
2. Install Angular ESLint schematics
3. Configure ESLint rules
4. Fix linting issues

#### 4.2 Replace Protractor with Cypress/Playwright
**Current State:**
- Using Protractor for e2e testing (deprecated)

**Action Items:**
1. Choose replacement (Cypress recommended)
2. Rewrite existing e2e tests
3. Update CI/CD configuration
4. Remove Protractor dependencies

#### 4.3 Update Karma Configuration
**Files to Update:**
- `karma.conf.js`

**Changes:**
- Update to latest Karma version
- Update browser configuration
- Update coverage reporting

### Phase 5: Modern Angular Features Adoption
**Estimated Time: 1 week**

#### 5.1 Standalone Components (Optional but Recommended)
**Benefits:**
- Simplified module structure
- Better tree-shaking
- Easier testing

**Action Items:**
1. Convert components to standalone
2. Simplify routing configuration
3. Remove unnecessary module declarations

#### 5.2 Control Flow Syntax (Angular 17+)
**Replace:**
- `*ngIf` → `@if`
- `*ngFor` → `@for`
- `*ngSwitch` → `@switch`

#### 5.3 Modern Build Features
- Enable source maps optimization
- Configure build budgets
- Set up differential loading

### Phase 6: Performance and Optimization
**Estimated Time: 2-3 days**

#### 6.1 Bundle Analysis
- Analyze bundle size
- Implement lazy loading where appropriate
- Remove unused dependencies

#### 6.2 Service Worker Updates
- Update service worker configuration
- Test PWA functionality
- Verify offline capabilities

## Detailed Migration Steps

### Step 1: Prepare Development Environment

1. **Update Node.js**
   ```bash
   # Install Node.js 18+ (required for Angular 20)
   nvm install 18
   nvm use 18
   ```

2. **Create Migration Branch**
   ```bash
   git checkout -b feature/angular-20-migration
   git commit -m "Starting Angular 20 migration"
   ```

3. **Install Latest Angular CLI Globally**
   ```bash
   npm uninstall -g @angular/cli
   npm install -g @angular/cli@20
   ```

### Step 2: Incremental Updates

For each version update (6→7, 7→8, etc.):

1. **Update CLI and Core**
   ```bash
   ng update @angular/cli@[version] @angular/core@[version]
   ```

2. **Update Material**
   ```bash
   ng update @angular/material@[version]
   ```

3. **Run Tests**
   ```bash
   npm test
   npm run e2e
   ```

4. **Fix Breaking Changes**
   - Address compilation errors
   - Update deprecated APIs
   - Fix failing tests

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Upgrade to Angular [version]"
   ```

### Step 3: HTTP Service Migration

1. **Update app.module.ts**
   ```typescript
   // Remove
   import { HttpModule } from '@angular/http';

   // Add
   import { HttpClientModule } from '@angular/common/http';

   // In imports array
   imports: [
     // Remove HttpModule
     // Add HttpClientModule
     HttpClientModule
   ]
   ```

2. **Update Services**
   ```bash
   # Update each service file
   # Example: src/app/domain/hero.service.ts
   ```

   Replace:
   ```typescript
   import { Http, Response } from '@angular/http';

   constructor(private http: Http) {}

   getHeroes(): Observable<Hero[]> {
     return this.http.get('/api/heroes')
       .map((res: Response) => res.json());
   }
   ```

   With:
   ```typescript
   import { HttpClient } from '@angular/common/http';

   constructor(private http: HttpClient) {}

   getHeroes(): Observable<Hero[]> {
     return this.http.get<Hero[]>('/api/heroes');
   }
   ```

### Step 4: RxJS Migration

1. **Remove rxjs-compat**
   ```bash
   npm uninstall rxjs-compat
   ```

2. **Update Imports**
   Replace all instances of:
   ```typescript
   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/operator/map';
   ```

   With:
   ```typescript
   import { Observable } from 'rxjs';
   import { map } from 'rxjs/operators';
   ```

3. **Update Operator Usage**
   ```typescript
   // OLD
   return this.http.get('/api/data')
     .map(data => data.json())
     .catch(error => Observable.of([]));

   // NEW
   return this.http.get('/api/data').pipe(
     map(data => data),
     catchError(error => of([]))
   );
   ```

### Step 5: ViewChild Updates

Update all ViewChild decorators:
```typescript
// Before Angular 8
@ViewChild(SomeComponent) component: SomeComponent;

// Angular 8+
@ViewChild(SomeComponent, { static: false }) component: SomeComponent;
// or { static: true } if accessed in ngOnInit
```

### Step 6: Angular Material Migration

1. **Update Imports**
   ```typescript
   // OLD
   import { MatButtonModule } from '@angular/material/button';

   // NEW (still valid, but check for breaking changes)
   import { MatButtonModule } from '@angular/material/button';
   ```

2. **Update Themes**
   - Check for breaking theme changes
   - Update custom theme files
   - Test visual components

### Step 7: Testing Updates

1. **Replace TSLint with ESLint**
   ```bash
   ng add @angular-eslint/schematics
   ng g @angular-eslint/schematics:convert-tslint-to-eslint
   ```

2. **Update Karma Configuration**
   - Update karma.conf.js
   - Update test configurations
   - Fix test failures

3. **Replace Protractor**
   ```bash
   npm install --save-dev cypress
   # or
   npm install --save-dev @playwright/test
   ```

### Step 8: Final Modernization

1. **Enable Strict Mode**
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "strict": true,
       "noImplicitReturns": true,
       "noFallthroughCasesInSwitch": true
     }
   }
   ```

2. **Update to Standalone Components** (Optional)
   ```typescript
   // Convert components to standalone
   @Component({
     selector: 'app-hero',
     standalone: true,
     imports: [CommonModule, MatButtonModule],
     template: '...'
   })
   export class HeroComponent {}
   ```

3. **Use Modern Control Flow** (Angular 17+)
   ```html
   <!-- OLD -->
   <div *ngIf="hero">{{ hero.name }}</div>
   <div *ngFor="let item of items">{{ item.name }}</div>

   <!-- NEW -->
   @if (hero) {
     <div>{{ hero.name }}</div>
   }
   @for (item of items; track item.id) {
     <div>{{ item.name }}</div>
   }
   ```

## Risk Assessment and Mitigation

### High Risk Areas

1. **Angular Material Components**
   - **Risk**: Significant API changes across versions
   - **Mitigation**: Test each component individually, maintain visual regression tests

2. **Custom Pipes and Directives**
   - **Risk**: Breaking changes in pipe/directive APIs
   - **Mitigation**: Review all custom implementations, update to latest patterns

3. **Service Worker Configuration**
   - **Risk**: PWA functionality may break
   - **Mitigation**: Test offline functionality thoroughly, update configuration

4. **Third-party Dependencies**
   - **Risk**: Some packages may not support Angular 20
   - **Mitigation**: Find alternatives or update to compatible versions

### Medium Risk Areas

1. **Routing Configuration**
   - **Risk**: Route guard API changes
   - **Mitigation**: Update guards to functional guards (Angular 14+)

2. **Form Handling**
   - **Risk**: Reactive forms API changes
   - **Mitigation**: Test form validation and submission thoroughly

### Low Risk Areas

1. **Component Templates**
   - **Risk**: Template syntax mostly backward compatible
   - **Mitigation**: Visual testing

2. **Services and Business Logic**
   - **Risk**: Core TypeScript logic should work with minimal changes
   - **Mitigation**: Unit test coverage

## Testing Strategy

### 1. Automated Testing
- **Unit Tests**: Ensure all existing tests pass after each version bump
- **Integration Tests**: Test component interactions
- **E2E Tests**: Verify core user workflows

### 2. Manual Testing Checklist
- [ ] Application starts successfully
- [ ] All routes are accessible
- [ ] Forms submit correctly
- [ ] Material components render properly
- [ ] Service worker functions (PWA features)
- [ ] Responsive design works
- [ ] Cross-browser compatibility

### 3. Performance Testing
- [ ] Bundle size comparison (before/after)
- [ ] Load time measurements
- [ ] Memory usage monitoring
- [ ] Lighthouse score comparison

## Timeline and Dependencies

### Estimated Total Timeline: 4-6 weeks

**Week 1:**
- Environment preparation
- Angular 6-10 upgrades
- HTTP service migration

**Week 2:**
- Angular 11-15 upgrades
- RxJS modernization
- ViewChild updates

**Week 3:**
- Angular 16-20 upgrades
- Angular Material migration
- TypeScript configuration

**Week 4:**
- Testing system updates
- ESLint migration
- E2E framework replacement

**Week 5-6:**
- Modern features adoption
- Performance optimization
- Comprehensive testing

## Success Criteria

1. **Functional Requirements**
   - [ ] All existing features work as before
   - [ ] No regression in user experience
   - [ ] PWA features maintained

2. **Technical Requirements**
   - [ ] Application builds successfully with Angular 20
   - [ ] All tests pass
   - [ ] No console errors or warnings
   - [ ] Bundle size optimization achieved

3. **Code Quality Requirements**
   - [ ] ESLint compliance
   - [ ] TypeScript strict mode enabled
   - [ ] Modern Angular patterns adopted
   - [ ] Documentation updated

## Post-Migration Cleanup

1. **Remove Deprecated Code**
   - Remove unused imports
   - Clean up temporary workarounds
   - Update documentation

2. **Performance Optimization**
   - Analyze bundle size
   - Implement lazy loading
   - Optimize images and assets

3. **Developer Experience**
   - Update development scripts
   - Configure IDE support
   - Update README and setup instructions

## Rollback Plan

1. **Version Control Strategy**
   - Keep original branch as backup
   - Tag releases before major changes
   - Maintain detailed commit history

2. **Deployment Strategy**
   - Deploy to staging environment first
   - Gradual rollout to production
   - Monitor performance and error rates

3. **Rollback Triggers**
   - Significant performance degradation (>25%)
   - Critical functionality failures
   - Unresolvable compatibility issues

## Conclusion

This migration from Angular 6 to Angular 20 is a significant undertaking that will modernize the codebase and unlock new Angular features. The incremental approach minimizes risk while ensuring compatibility at each step. Success depends on thorough testing, careful attention to breaking changes, and maintaining feature parity throughout the process.

The modernized application will benefit from:
- Improved performance and bundle size
- Better developer experience
- Access to latest Angular features
- Long-term maintainability
- Enhanced security and stability

Regular communication with stakeholders and thorough testing at each phase will ensure a successful migration.
import { test, expect, selectors } from '@playwright/test';

import { AngularEngine } from '../index';

test('basic test', async ({ page }) => {
  test.slow();
  await selectors.register('angular', AngularEngine);
  await page.goto('http://localhost:4200');
  const info = page.locator('angular=app-root[title*="ang"]');
  const innerText = await info.innerText();
  console.log('inner text', innerText);
});
# Angular selector engine for Playwright

**!Note**: Selectors engine works only with angular non production mode.

** NOTE: ** router-outlet is not supported, since in angular it is a virtual component.

## Intallation

```bash
npm i playwright-angular-selectors
```

## Usage

```ts
import { selectors } from "playwright";
import AngularEngine from "playwright-angular-selectors";

// register
selectors.register("angular", AngularEngine);

// usage in code

const element = page.locator('angular=app-root[title="ang"]');
element.innerText(); // "Angular"
```

The usage are the same as for [React selectors](https://playwright.dev/docs/selectors#react-selectors)

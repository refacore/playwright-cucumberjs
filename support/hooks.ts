import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { ICustomWorld } from './custom-world';

let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function (this: ICustomWorld, scenario) {
  this.testName = scenario.pickle.name;
  const context = await browser.newContext();
  this.context = context;
  this.page = await context.newPage();
});

After(async function (this: ICustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const buffer = await this.page?.screenshot({
      path: `./screenshots/${scenario.pickle.name.replace(/\s+/g, '-')}.png`,
      type: 'png'
    });
  }
  await this.page?.close();
  await this.context?.close();
});
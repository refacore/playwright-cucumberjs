import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import HomePage from '../pages/homePage';

let homePage: HomePage;

Given('I am on the Playwright website', async function (this: ICustomWorld) {
    await this.page?.goto('https://playwright.dev/', { timeout: 15000 });

    homePage = new HomePage(this.page!);
});

When('I look at the page title', async function () {
    // The page title will be captured in the next step
});

Then('I should see {string} in the title', async function (this: ICustomWorld, expectedText: string) {
    const title = await homePage.getTitle();

    expect(title).toBe(expectedText);
});

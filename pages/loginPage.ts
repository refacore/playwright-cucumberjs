import { Page } from "@playwright/test";

export default class LoginPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async enterUsername(username: string) {
        await this.page.locator('input[placeholder="Username"]').fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator('input[placeholder="Password"]').fill(password);
    }

    async clickLoginButton() {
        await this.page.locator('button[type="submit"]').click();
    }

    async getErrorMessage() {
        return await this.page.locator('div[role="alert"]').textContent();
    }

    async getTitle() {
        return await this.page.title();
    }
}

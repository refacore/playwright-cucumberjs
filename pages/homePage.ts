import { Page } from "@playwright/test";

export default class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }
}

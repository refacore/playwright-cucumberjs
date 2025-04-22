import { Given, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import { ICustomWorld } from "support/custom-world";


let loginPage: LoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
    loginPage = new LoginPage(this.page!);
    await this.page?.goto('https://loginpage.com');
});

When('I enter {string} in the username field', async function (username) {
    await loginPage.enterUsername(username);
});

# playwright-cucumberjs
Demonstrate BDD with playwirght and cucumberjs

- Writing tests is not responsibility of the Automation Engineers only.
- Writing tests is responsibility of the Business Analysts, Testers, Developers, and Automation Engineers.

3 roles:
- Business Analyst/ Tester: write test cases. (Gherkin syntax)
- Developer: implement tests.
- Automation Engineer: create and maitain test resources.

steps:
- init playwright
  - Initialize project with `npm init -y`
  - Install Playwright with TypeScript: `npm install -D @playwright/test typescript`
  - Configure TypeScript (tsconfig.json)
  - Configure Playwright (playwright.config.ts)
  - Create test directory structure
- install cucumberjs
  - Install Cucumber.js: `npm install -D @cucumber/cucumber @types/cucumber`
  - Create cucumber.js configuration
  - Create features directory with example feature
  - Create step definitions
  - Add test scripts to package.json

## Running Tests
- Run all tests: `npm test`
- Run tests in parallel: `npm run test:parallel`

# Demonstrate BDD with playwirght and cucumberjs
### Automation testing and Obstacles
- Require a huge resource to write tests.
- Few Automation Engineers cannot cover all scenarios.
- It's difficult to recruit quality Automation Engineers.

### But
- We have good developers.
- Writing tests should not be responsibility of the Automation Engineers only.
- Writing tests should be responsibility of the Business Analysts, Testers, Developers, and Automation Engineers - whole team.
- Technologies and frameworks are not a barrier anymore with AI.
- Page Object Model (POM) is a good practice.

### 3 roles
#### Business Analyst/ Tester
- Write test cases (by Gherkin syntax, it's not coding then it's easy to start).
#### Developer
- Implement test cases after finishing development.
#### Automation Engineer
- Create and maintain test resources.
- Separate test framework stuff from test steps to help developers in implementing test steps (POM).

### Steps to initialize a new project
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

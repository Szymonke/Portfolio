import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com",
    }
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1400
});

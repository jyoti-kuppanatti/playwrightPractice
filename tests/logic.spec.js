const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pagefixtures');


test('login', async ({ page, loginpageFicture }) => {

    
  await page.goto('https://the-internet.herokuapp.com/login');

 //const loginpage = new LoginPage(page);
 await loginpageFicture.login("tomsmith", "SuperSecretPassword!");


});
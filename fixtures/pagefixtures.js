const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

/** @typedef {import('../pages/loginPage').LoginPage} LoginPage */

/** @type {import('@playwright/test').TestType<{}, { loginpageFicture: LoginPage }>} */
exports.test = test.extend({
    loginpageFicture : async ({page}, use)=>{
        const loginfixture = new LoginPage(page);
        await use(loginfixture);
    }
});


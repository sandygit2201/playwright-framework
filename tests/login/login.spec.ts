import { test } from '@playwright/test';
import LoginPage from 'support/pages/login/loginPage';


test('has title', async ({page}) => {
 
    const loginPage = new LoginPage(page);
    await loginPage.invokeApplication()
    await loginPage.navigateToLoginPage()

    await loginPage.loginAs()
    await page.pause()
  
});
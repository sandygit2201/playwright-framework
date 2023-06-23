import { test } from '@playwright/test';
import LoginPage from 'support/pages/login/loginPage';
import uuidUtils from 'support/utils/uuidUtils';


test('has title', async ({page}) => {

    let name:string ="sandy"
    let email:string= uuidUtils.getRandomEmail()
 
    const loginPage = new LoginPage(page);
    await loginPage.invokeApplication()
    await loginPage.navigateToLoginPage()
    await loginPage.signUpAs(name,email)
    await page.pause()
  
});
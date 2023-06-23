import { test } from "@playwright/test";
import BasePage from "support/pages/basePage";
import ContactUsPage from "support/pages/contactUs/contactUsPage";

test.beforeEach(async({page})=>{
    const basePage = new BasePage(page)
    await basePage.invokeApplication()
    await basePage.navigateToContactUsPage()

})

test('verify contact us', async ({ page }) => {

    let formInfo = {
        name: "sandy",
        email: "ab@cd.com",
        subject: "test form",
        message: "blah blah blah",
        // file: './test-data/contactUs/abc.txt'
    }
    const contactUsPage = new ContactUsPage(page)
    await contactUsPage.submitContactUsFrom(formInfo)

    await page.pause()
})

test('test 2',async({page})=>{
    const contactUsPage = new ContactUsPage(page)
    await contactUsPage.navigateToContactUsPage()
    await contactUsPage.submitForm2()


})

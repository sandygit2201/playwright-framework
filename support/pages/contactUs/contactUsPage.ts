import { Page, expect } from "@playwright/test";
import BasePage from "../basePage";


export default class ContactUsPage extends BasePage {

    contactUsPage: Page
    constructor(page: Page) {
        super(page)
        this.contactUsPage = page
    }

    async submitContactUsFrom(formInfo: any) {

        await expect(this.contactUsPage.locator("//h2[contains(text(),'Get In Touch')]")).toBeVisible()
        await this.fillContactUsForm(formInfo)
        await this.clickOnSubmit()
        // handle ok on alert 
        await expect(this.contactUsPage.locator("//div[text()='Success! Your details have been submitted successfully.']"))
            .toBeVisible()

    }

    async submitForm2(){

    }

    async fillContactUsForm(formInfo: any) {

        if (formInfo.hasOwnProperty('name')) {
            await this.contactUsPage.locator('input[name="name"]').fill(formInfo.name)
        }

        if (formInfo.hasOwnProperty('email')) {
            await this.contactUsPage.locator('input[name="email"]').fill(formInfo.email)
        }

        if (formInfo.hasOwnProperty('subject')) {
            await this.contactUsPage.locator('input[name="subject"]').fill(formInfo.subject)
        }

        if (formInfo.hasOwnProperty('message')) {
            await this.contactUsPage.locator('#message').fill(formInfo.message)
        }

        if (formInfo.hasOwnProperty('phone')) {
            await this.contactUsPage.locator('#phone').fill(formInfo.phone)
        }

        if (formInfo.hasOwnProperty('file')) {
            //method to upload file
        }


    }

}
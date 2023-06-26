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
        this.contactUsPage.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('Press OK to proceed!')
            await dialog.accept()
          })
        await this.contactUsPage.pause()
        await this.clickOnSubmit()
        await expect(this.contactUsPage.locator("text=Success! Your details have been submitted successfully.").first())
            .toBeVisible()
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
            await this.contactUsPage.locator('[name="upload_file"]').setInputFiles(formInfo.file)
        }
    }
}
import { Page } from "@playwright/test";

export default class AlertWindow {

    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async acceptSimpleAlert() {
         this.page.on('dialog',async (dialog)=>{
            await dialog.accept()
        })

    }

}
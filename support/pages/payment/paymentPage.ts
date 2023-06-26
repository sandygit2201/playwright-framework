

import { Page,expect } from "@playwright/test";
import BasePage from "../basePage";


export default class PaymentPage extends BasePage{

    paymentPage:Page
    constructor(page:Page){
        super(page)
        this.paymentPage = page
    }

 async fillCardDetailsAndCompleteOrder(cardInfo:any){

    await this.paymentPage.locator('[name="name_on_card"]').fill(cardInfo.nameOnCard)
    await this.paymentPage.locator('[name="card_number"]').fill(cardInfo.cardNumber)
    await this.paymentPage.locator('[name="cvc"]').fill(cardInfo.cvc)
    await this.paymentPage.locator('[name="expiry_month"]').fill(cardInfo.expiryMonth)
    await this.paymentPage.locator('[name="expiry_year"]').fill(cardInfo.expiryYear)

    await this.paymentPage.locator('#submit').click()

    expect(this.paymentPage.url()).toContain('payment_done')

    await expect(this.paymentPage.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();

 }

}
import { Page, expect } from "@playwright/test";
import BasePage from "../basePage";
import {deliveryAddress} from "../../../test-data/address.json";



export default class CartPage extends BasePage{

    cartPage:Page
    constructor(page:Page){
        super(page)
        this.cartPage = page
    }

    // implement cart verification
    async verifyProductsInCart(productDetails:any){

    }

     // implement cart verification
     async verifyDeliveryAddress(){

        const fistName_lastName = await this.cartPage.locator("[class='address_firstname address_lastname']").first().textContent()
        expect(fistName_lastName).toBe(deliveryAddress.firstName_lastName)

        const phone = await this.cartPage.locator("[class='address_phone']").first().textContent()
        expect(phone).toBe(deliveryAddress.phone)


     }

    async proceedToCheckout(){
        await this.cartPage.locator("a[class='btn btn-default check_out']").click()
        expect( this.cartPage.url()).toContain('checkout')
       expect(this.cartPage.locator("//h2[text()='Address Details']")).toBeVisible()
    }

}
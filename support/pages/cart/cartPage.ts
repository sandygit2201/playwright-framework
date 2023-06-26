import { Page, expect } from "@playwright/test";
import BasePage from "../basePage";


export default class CartPage extends BasePage{

    cartPage:Page
    constructor(page:Page){
        super(page)
        this.cartPage = page
    }

    // implement cart verification
    async verifyProductsInCart(productDetails:any){

    }

    async proceedToCheckout(){
        await this.cartPage.locator("a[class='btn btn-default check_out']").click()
        expect( this.cartPage.url()).toContain('checkout')
       expect(this.cartPage.locator("//h2[text()='Address Details']")).toBeVisible()
    }

}
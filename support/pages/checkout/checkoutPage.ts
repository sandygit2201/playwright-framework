import { Page } from "@playwright/test";
import BasePage from "../basePage";


export default class CheckOutPage extends BasePage{

    checkoutPage:Page
    constructor(page:Page){
        super(page)
        this.checkoutPage = page
    }

    // write a method to verify address

    //write a method to verify products total 

    async placeOrder(){

        await this.checkoutPage.locator("a[href='/payment']").click()
        

    }

}
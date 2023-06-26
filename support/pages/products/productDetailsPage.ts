import { Page,expect } from "@playwright/test"
import BasePage from "../basePage"

export default class ProductDetailsPage extends BasePage{

    productDetailsPage:Page
    constructor(page:Page){
        super(page)
        this.productDetailsPage = page
    }

    async addProductToCart(productInfo:any){

        if(productInfo.hasOwnProperty('qty')){
            await this.productDetailsPage.locator('#quantity').clear()
            await this.productDetailsPage.locator('#quantity').fill(productInfo.qty)
        }

        this.productDetailsPage.on('dialog',async (dialog)=>{
            console.log("Message::" + dialog.message())
        })

        await this.productDetailsPage.locator("button[class='btn btn-default cart']").click()
        await this.productDetailsPage.getByRole('button', { name: 'Continue Shopping' }).click();
    
    }


    async verifyProductDetails(productInof:any){
     
    }

    async verifyProductTitle(productTitle:string){
    expect(this.productDetailsPage.locator("//h2[text()='Frozen Tops For Kids']")).toBeVisible
    }


}
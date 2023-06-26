import BasePage from "../basePage";
import { Page } from "@playwright/test";


export default class ProductsPage extends BasePage{

    private productsPage:Page
    constructor(page:Page){
        super(page)
        this.productsPage = page;
    }

    async searchAndSelectProduct(productDetails:any){

        await this.searchProduct(productDetails.productName)
        await this.productsPage.locator("//a[text()='View Product']").first().click()

    }

    async searchProduct(productName:string){
        await this.productsPage.locator('#search_product').fill(productName)
        await this.productsPage.locator('#submit_search').click()

    }


}
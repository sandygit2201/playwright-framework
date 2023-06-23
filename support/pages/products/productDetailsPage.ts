import productBasePage from "./productsBasepage";
import { Page } from "@playwright/test";


class ProductDetailsPage extends productBasePage{

    private productDetailsPage:Page
    constructor(page:Page){
        super(page)
        this.productDetailsPage = page;
    }

    async submitReview(reviewDetails:any){

        this.fillReviewForm(reviewDetails)

    }

   async fillReviewForm(reviewDetails:any){

        if(reviewDetails.hasOwnProperty('name')){
            await page.locacator('#name').clear()
            await page.locacator('#name').fill(reviewDetails.name)
            
        }
        if(reviewDetails.haskey('email')){
            await page.locacator('#email').clear()
            await page.locacator('#email').fill(reviewDetails.name)
        }

        if(reviewDetails.haskey('review')){
            await page.locacator('#review').clear()
            await page.locacator('#review').fill(reviewDetails.name)
        }




    }

}

export default new ProductDetailsPage()
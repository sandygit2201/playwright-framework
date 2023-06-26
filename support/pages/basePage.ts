import { Page, expect } from "@playwright/test"

export default class BasePage {

    private basePage:Page
     constructor(page:Page){
        this.basePage = page
     }
   async clickOnSubmit(){

      await this.basePage.locator('input[data-qa="submit-button"]').click()
    }

    async clickOnAddToCart(){
     await this.basePage.locator('//button[contains(text(),"Add to cart")]').click()
    }

    async navigateToHome(){
        await this.basePage.locator("//a[text()=' Home']").click()
    }

    async invokeApplication(){
     await this.basePage.goto('/')   
    }

    async navigateToProducts(){
        await this.basePage.locator("a[href='/products']").click()
        expect( this.basePage.url()).toContain('products')
    }

    async navigateToLoginPage(){
        await this.basePage.locator("//a[text()=' Signup / Login']").click()
        expect( this.basePage.url()).toContain('login')
        
    }

    // async navigateToPage(page:string){
    //     await this.basePage.locator(`//a[text()='${page}']`).click()
    //     expect( this.basePage.url()).toContain(page)
        
    // }

    async navigateToContactUsPage(){
        await this.basePage.locator("a[href='/contact_us']").click()
        expect( this.basePage.url()).toContain('contact_us')
    }

    async navigateToCart(){
        await this.basePage.locator('a[href="/view_cart"]').first().click()
        expect(this.basePage.url()).toContain('view_cart')
    }

    

}
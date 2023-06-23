import BasePage from "../basePage";
import { Page } from "@playwright/test";
import * as dotenv from 'dotenv'
import path from 'path'
const ENV = process.env.NODE_ENV || 'test'
dotenv.config({ path: path.join(__dirname, `./.env.${ENV}`)});

// dotenv.config()


export default class LoginPage extends BasePage{

    private loginPage:Page
    
    constructor(page:Page){
        super(page)
        this.loginPage = page;
    }

    async loginAs(userName:string=process.env.USERNAME ,password:string=process.env.PASSWORD){

        await this.loginPage.locator("[data-qa='login-email']").fill(userName)
        await this.loginPage.locator("[data-qa='login-password']").fill(password)
        await this.loginPage.locator('button[data-qa="login-button"]').click()

        //asert something user home on success 
    }

    async signUpAs(userName:string ,email:string){

        await this.loginPage.locator("[data-qa='signup-name']").fill(userName)
        await this.loginPage.locator("[data-qa='signup-email']").fill(email)

        // await this.loginPage.locator('[data-qa="signup-button"]').click()

        //asert something user home on success 
    }

}
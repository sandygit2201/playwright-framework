import BasePage from "../basePage"
import { Page } from "@playwright/test"

export default class UserInfoPage extends BasePage{

    private userInfoPage:Page
    
    constructor(page:Page){
        super(page)
        this.userInfoPage = page;
    }

    async fillUserInfo(userDetails:any){

        if(userDetails.hasOwnProperty('password')){
            await this.userInfoPage.locator('data-qa="password"').fill(userDetails.password)
        }

    }

}
import homeBasePage from "./homeBasePage";
import { Page } from "@playwright/test";

export default class userHomePage extends homeBasePage{

    
    constructor(page:Page) {
        super(page);
    }

}
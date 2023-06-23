import { Page } from "@playwright/test";
import homeBasePage from "./homeBasePage";

export default class anonymousHomepage extends homeBasePage{

    constructor(page:Page) {
        super(page)
        this.page = page
    }

}


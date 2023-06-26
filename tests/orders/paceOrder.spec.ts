import { test } from "@playwright/test";
import BasePage from "support/pages/basePage";
import CartPage from "support/pages/cart/cartPage";
import CheckOutPage from "support/pages/checkout/checkoutPage";
import LoginPage from "support/pages/login/loginPage";
import PaymentPage from "support/pages/payment/paymentPage";
import ProductDetailsPage from "support/pages/products/productDetailsPage";
import ProductsPage from "support/pages/products/productsPage";


test('End to End order @smoke @regression @order ', async ({ page }) => {

    const basePage = new BasePage(page)
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckOutPage(page)
    const paymentPage = new PaymentPage(page)

    let productInfo = {
        productName: "Frozen Tops For Kids",
        availability: "In Stock",
        condition: "new",
        qty: "3",
        productCost: 278
    }
    let cardInfo = {

        nameOnCard: "abcdlfjadslfa",
        cardNumber: "12345666666",
        cvc: "123",
        expiryMonth: "12",
        expiryYear: "1991"

    }

    await basePage.invokeApplication()
    await basePage.navigateToLoginPage()
    await loginPage.loginAs()
    await basePage.navigateToProducts()
    await productsPage.searchAndSelectProduct(productInfo)
    await productDetailsPage.addProductToCart(productInfo)
    await basePage.navigateToCart()
    await cartPage.proceedToCheckout()
    
    await checkoutPage.placeOrder()
    await paymentPage.fillCardDetailsAndCompleteOrder(cardInfo)


})
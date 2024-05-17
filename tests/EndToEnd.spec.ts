import { expect, test, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
});

test.describe("Swag Labs Tests ", () => {
  test("End to End scenario", async ({}) => {
    // **Challenge Time!**  This test is a marathon, not a sprint!
    // Can you break it down into smaller, more focused tests?
    // Think "separation of concerns" and keeping things nice and tidy and make any extra methods/verifications
    //you think it will be helpfull

    await loginPage.navigateToWebsite();
    await loginPage.login();

    await inventoryPage.addBackPack();
    await inventoryPage.gotoShoppingCart();
    
    await cartPage.verifyItemInCart("Sauce Labs Backpack");// You got it right ? :)

    await cartPage.gotoCheckout();
    await checkoutPage.fillCheckoutInformation();

    await checkoutPage.verifyTotalPrice();
    await checkoutPage.submitOrder();
    await checkoutPage.verifyOrderConfirmation();
  });
});

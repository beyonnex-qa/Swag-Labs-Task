import { Locator, Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator("#checkout");
  }

  async verifyItemInCart(itemName) {
    // **Challenge! Now since you've become a master shopper and you added those 3 items, can you write some code to verify they're safely nestled in the cart? 
  //  Remember your detective skills: assertions and selectors are your best friends!**
  }

  async gotoCheckout() {
    await this.checkoutButton.click();
  }
}

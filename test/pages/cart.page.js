import Page from './page';
import CheckoutPage from './checkout.page';

class CartPage extends Page {
  get checkoutButton() { return browser.element('[name="proceedToCheckout"]'); }

  proceedToCheckout() {
    this.open();
    // this.checkoutButton.waitForVisible(3000);
    this.checkoutButton.click();
    return new CheckoutPage();
  }

  open() {
    super.open('gp/cart/view.html/ref=nav_cart');
  }
}

export default new CartPage();

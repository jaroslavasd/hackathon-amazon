import Page from './page';
import CartPage from './cart.page';

class ProductPage extends Page {
  get addToCartButton() { return browser.element('#add-to-cart-button'); }
  get availabilityLabel() { return browser.element('#availability'); }
  get cartCountLabel() { return browser.element('#nav-cart-count'); }

  addToCart() {
    this.previousCartCount = this.getCartCount();
    this.addToCartButton.click();
    return new CartPage();
  }

  getAvailability() {
    return this.availabilityLabel.getText();
  }

  getCartCount() {
    return parseInt(this.cartCountLabel.getText(), 10);
  }

  open() {
    super.open('TNP-PS4-Controller-Charge-Station/dp/B0177Q0T8C/ref=sr_1_6' +
      '?s=videogames&ie=UTF8&qid=1508489476&sr=1-6&keywords=playstation+4' +
      '&refinements=p_n_shipping_option-bin%3A3242350011');
  }
}

export default ProductPage;

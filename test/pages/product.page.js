import Page from './page';

class ProductPage extends Page {
  get addToCartButton() { return browser.element('add-to-cart-button') }

  addToCart() {
    this.addToCartButton().click();
  }
}

module.exports = ProductPage;

import Page from './page';

class CheckoutPage extends Page {
  get shipToAddressButton() { return browser.element('.ship-to-this-address.a-button'); }

  shipToAddress() {
    this.shipToAddressButton.click();
  }
}

export default CheckoutPage;

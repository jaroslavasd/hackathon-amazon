import Page from './page';

class SearchPage extends Page {
  // Elements..
  get searchInput() { return browser.element('#twotabsearchtextbox'); }
  get searchButton() { return browser.element('.nav-search-submit.nav-sprite'); }
  get searchSortForm() { return browser.element('#searchSortForm'); }
  get sortOption() { return browser.element('#sort'); }
  get starInput() { return browser.element('.a-icon.a-icon-star-medium'); }
  get leftNavPane() { return browser.element('#leftNav'); }
  get resultsContainer() { return browser.element('#resultsCol'); }
  get resultLink() { return browser.element('[class="a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal"]'); }

  // Methods..
  searchForProduct(productName) {
    this.searchInput.setValue(productName);
    this.searchButton.click();
  }

  selectShipTo(country) {
    browser.element(`//span[text()="Ship to ${country}"]/../../input`).click();
  }

  sortByPriceAsc() {
    browser.waitForVisible(this.searchSortForm.selector, 5000);
    this.sortOption.selectByValue('price-asc-rank');
  }

  selectMostReliable() {
    browser.waitForVisible(this.searchSortForm.selector, 5000);
    this.starInput.click();
  }

  selectSearchCategory(category) {
    browser.waitForVisible(this.leftNavPane.selector, 5000);
    browser.element(`span=${category}`).click();
  }

  selectProductByIndex(index) {
    browser.waitForVisible(this.resultsContainer.selector, 5000);
    browser.waitForVisible(this.resultLink.selector, 5000);
    browser.elements(this.resultLink.selector).value[index].click();
  }
}

export default new SearchPage();

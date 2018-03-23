import SearchPage from '../pages/search.page';
import SignInPage from '../pages/signin.page';
import ProductPage from '../pages/product.page';
import CartPage from '../pages/cart.page';
import { products } from '../config';

describe('amazon page', () => {
  it('do shopping for ', () => {
    SignInPage.open();
    SignInPage.login();

    products.forEach((item) => {
      SearchPage.searchForProduct(item.name);
      SearchPage.selectShipTo(item.properties.shipsTo);
      SearchPage.selectMostReliable();
      SearchPage.selectSearchCategory(item.properties.category);
      SearchPage.sortByPriceAsc();
      let index = 0;
      while (index < 10) {
        SearchPage.selectProductByIndex(index);
        if (ProductPage.getAvailability() === 'In Stock.') {
          break;
        }
        // ProductPage.back();
        index += 1;
      }

      ProductPage.addToCart();
    });
    CartPage.open();
    // CartPage.getCardText().should.contain('playstation', 'no playstation found');
    // CartPage.getCardText().should.contain('camera', 'no camera found');
    // CartPage.getCardText().should.contain('just dance', 'no just dance found');
  });
});

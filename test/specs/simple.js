import SearchPage from '../pages/search.page';
import SignInPage from '../pages/signin.page';
import ProductPage from '../pages/product.page';
import { products } from '../config';

describe('amazon page', () => {
  it('do shoopping for ', () => {
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
        index += 1;
      }

      ProductPage.addToCart();
    });
  });
});

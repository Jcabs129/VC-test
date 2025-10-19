import { test } from '../fixtures/pageObjectFixture';
import { RestaurantVoucherPage } from '../pages/restaurantVoucher.page';

test.describe('Performs Search and negative test', () => {
  test.beforeEach('Land on page and run assertions', async ({ landingPage }) => {
    await landingPage.navigateToPage('https://www.vouchercodes.co.uk/');
    await landingPage.handleCookiePopups();
  });

  /*
  One test that successfully performs a search for offers in local restaurants in London, on any given day, for an given number of people.
  */ 
  test('User can perform a search', async ({ landingPage, restaurantVoucherPage }) => {
    await landingPage.performSearch();
    await restaurantVoucherPage.formSelection();
  });

  test('Negative test - email test containing unicode', async ({ landingPage, restaurantVoucherPage }) => {
    // await landingPage.navigateToPage('https://www.vouchercodes.co.uk/restaurant-vouchers.html?rc=9063376');
    await landingPage.performSearch();
    await restaurantVoucherPage.registerUnicodeEmail();


  })
});
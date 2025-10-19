import { test } from '../fixtures/pageObjectFixture';

test.describe('Performs Search', () => {
  test.beforeEach('Land on page and run assertions', async ({ landingPage }) => {
    await landingPage.navigateToPage('https://www.vouchercodes.co.uk/');
    await landingPage.handleCookiePopups();
  });

  /*
  **One test that successfully performs a search for offers in local restaurants in London, on any given day, for an given number of people.
  */ 
  test('User can perform a search', async ({ landingPage, restaurantVoucherPage }) => {
    await landingPage.performSearch();
    await restaurantVoucherPage.formSelection();
  });
});
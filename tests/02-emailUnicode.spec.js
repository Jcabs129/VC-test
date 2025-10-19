import { test } from '../fixtures/pageObjectFixture';

test.describe('Negative test', () => {
  test.beforeEach('Land on page and run assertions', async ({ landingPage }) => {
    await landingPage.navigateToPage('https://www.vouchercodes.co.uk/');
    await landingPage.handleCookiePopups();
  });

  test('Negative test - email test containing unicode', async ({ landingPage, restaurantVoucherPage }) => {
    await landingPage.performSearch();
    await restaurantVoucherPage.registerUnicodeEmail();
  })
});
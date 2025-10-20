import { expect } from "@playwright/test";
import { landingPage } from "../tests/test-data/uiText";

export class LandingPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToPage(url)  {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/vouchercodes/);
  }

  async handleCookiePopups()  {
    const formLocator = this.page.locator('form');
    await formLocator
      .filter({ has: this.page.getByPlaceholder(landingPage.placeHolderText)});
    await this.page.getByRole('button', { name: landingPage.cookiesText }).click();
  }

  async performSearch() {
    await this.page.getByTestId('el:searchInput').fill('restaurants');
    await this.page.getByTestId('el:searchInput').press('Enter');
    await expect(this.page.getByRole('heading', { name: landingPage.headingText })).toBeVisible();
  }
}

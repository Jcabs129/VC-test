import { Page, expect } from "@playwright/test";
import { selectSearchWords } from "../utils/randomSelectionHelpers";
import { landingPage } from "../tests/test-data/uiText";

export class LandingPage {
  constructor(private page: Page) {}

  public async navigateToPage(url: string): Promise<void> {
    this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/vouchercodes/);
  }

  public async handleCookiePopups(): Promise<void>  {
    const formLocator = this.page.locator('form');
    await formLocator
      .filter({ has: this.page.getByPlaceholder(landingPage.placeHolderText)});
    await this.page.getByRole('button', { name: landingPage.cookiesText }).click();
  }

  public async performSearch(): Promise<void> {
    await this.page.getByTestId('el:searchInput').fill(selectSearchWords);
    await this.page.getByTestId('el:searchInput').press('Enter');
    await expect(this.page.getByRole('heading', { name: landingPage.headingText })).toBeVisible();
  }
}

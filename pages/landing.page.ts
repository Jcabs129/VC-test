import { Page, expect } from "@playwright/test";
import { selectSearchWords } from "../utils/randomSelectionHelpers";

export class LandingPage {
  constructor(private page: Page) {}

  // make this function flexible
  public async navigateToPage(url: string): Promise<void> {
    this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/vouchercodes/);
    
  }

  public async handleCookiePopups(): Promise<void>  {
    const formLocator = this.page.locator('form');
    await formLocator
      .filter({ has: this.page.getByPlaceholder('Start searching')});
    await this.page.getByRole('button', { name: 'Only Required' }).click();
  }

  public async performSearch(): Promise<void> {
    await this.page.getByTestId('el:searchInput').fill(selectSearchWords);
    await this.page.getByTestId('el:searchInput').press('Enter');
    // Update
    await expect(this.page.getByRole('heading', { name: 'Find restaurant vouchers & offers near you' })).toBeVisible();
  }
}

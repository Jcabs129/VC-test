import { Page, expect } from "@playwright/test";

export class RestaurantVoucherPage {
  constructor(private page: Page) {};

  public async formSelection(): Promise<void> {
    // UPDATE an array of strings/ postcode to select from
    await this.page.getByTestId('el:locationDropdown enabled:true').fill('N52ES');
    await this.page.getByRole('button', { name: 'Find restaurants vouchers' }).click();
    await expect(this.page).toHaveURL(/\/restaurant-vouchers\/search(?:$|[?#])/);    
    await this.page.getByRole('button', { name: 'Find restaurants vouchers' }).isVisible();
  }

  public async registerUnicodeEmail(): Promise<void> {
    await this.page.getByRole('button', { name: ' Send Me New Codes ' }).click();
    await this.page.getByPlaceholder('Enter your email address').fill('user+test@domain.com');
    // await this.page.
  }
}

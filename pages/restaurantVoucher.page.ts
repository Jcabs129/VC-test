import { Page, expect } from "@playwright/test";
import { voucherPage } from '../tests/test-data/uiText';


export class RestaurantVoucherPage {
  constructor(private page: Page) {};

  public async formSelection(): Promise<void> {
    // TODO:: update an array of strings/ postcode to select from
    await this.page.getByTestId('el:locationDropdown enabled:true').fill('N52ES');
    await this.page.getByRole('button', { name: voucherPage.searchTitle }).click();
    await expect(this.page).toHaveURL(/\/restaurant-vouchers\/search(?:$|[?#])/);    
    await this.page.getByRole('button', { name: voucherPage.searchTitle }).isVisible();
  }

  public async registerUnicodeEmail(): Promise<void> {
    await this.page.getByRole('button', { name: voucherPage.sendNewCodeBtnTxt }).click();
    await this.page.getByPlaceholder(voucherPage.placeHolderEmailTxt).fill('user+test@domain.com');
    await this.page.getByRole('button', { name: voucherPage.sendNewCodeBtnTxt }).click();
    await expect(this.page.getByTestId('el:infoBannerSubText').getByText(voucherPage.emailSuccessMsg)).toBeVisible()
  }
}

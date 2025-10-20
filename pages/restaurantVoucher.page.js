import { expect } from "@playwright/test";
import { voucherPage } from '../tests/test-data/uiText';
import { selectPostcode } from '../utils/randomSelectionHelpers'


export class RestaurantVoucherPage {
  constructor(page) {
    this.page = page;
  }

   async formSelection() {
    await this.page.getByTestId('el:locationDropdown enabled:true').fill(selectPostcode);
    await this.page.getByRole('button', { name: voucherPage.searchTitle }).click();
    await expect(this.page).toHaveURL(/\/restaurant-vouchers\/search(?:$|[?#])/);    
    await this.page.getByRole('button', { name: voucherPage.searchTitle }).isVisible();
  }

   async registerUnicodeEmail() {
    await this.page.getByRole('button', { name: voucherPage.sendNewCodeBtnTxt }).click();
    await expect(this.page.getByPlaceholder(voucherPage.placeHolderEmailTxt)).toBeVisible();
    await this.page.getByPlaceholder(voucherPage.placeHolderEmailTxt).fill('user+test@domain.com');
    await this.page.getByRole('button', { name: voucherPage.sendNewCodeBtnTxt }).click();
    
    // error logging
    try {
      await expect(this.page.getByTestId('el:infoBannerSubText').getByText(voucherPage.emailSuccessMsg)).toBeVisible();
    } catch (error) {
      console.error('Error: Email success message not visible');
      console.error('Expected text:', voucherPage.emailSuccessMsg);
      throw error;
    }
  }
}

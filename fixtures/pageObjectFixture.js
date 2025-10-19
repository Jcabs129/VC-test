import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { RestaurantVoucherPage } from '../pages/restaurantVoucher.page'



export const FrameworkFixtures = {
    landingPage: LandingPage,
    restaurantVoucherPage: RestaurantVoucherPage
}

export const test = base.extend({

  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },

  restaurantVoucherPage: async ({ page }, use) => {
    await use(new RestaurantVoucherPage(page));
  },
})

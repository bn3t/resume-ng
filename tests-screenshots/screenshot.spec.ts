import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Screenshot", () => {
  test("Screenshot", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page).toHaveScreenshot({ fullPage: true, mask: [page.locator("#version")] });
  });
});

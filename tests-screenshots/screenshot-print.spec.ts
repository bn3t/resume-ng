import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Screenshot", () => {
  test("Screenshot in print mode", async ({ page }) => {
    await page.emulateMedia({ media: "print" });
    await page.goto("http://localhost:5173");

    await expect(page).toHaveScreenshot({ fullPage: true, mask: [page.locator("#version")] });
  });
});

import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Screenshot Dark", () => {
  test.use({
    colorScheme: "dark",
  });

  test("Screenshot dark mode", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

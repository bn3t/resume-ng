import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Resume Navigation", () => {
  test("Navigation Content", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page.getByLabel("Navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: "View this project on github" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Download as PDF" })).toBeVisible();
  });
});

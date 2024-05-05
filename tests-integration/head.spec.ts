import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Resume Head", () => {
  test("has title", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page).toHaveTitle(/Bernard Niset - Senior Fullstack Developer \(Freelance\)/);
  });

  test("has open graph", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Bernard Niset - Senior Fullstack Developer (Freelance)",
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      "content",
      /As a Senior Fullstack Engineer, I utilize a strong background in Java-based/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "/og-image.png");
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "profile");
  });

  test("has meta info", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page.locator('meta[name="author"]')).toHaveAttribute("content", "Bernard Niset");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      "Senior Fullstack Developer (Freelance)",
    );
  });
});

import puppeteer, { Browser, Page } from "puppeteer";

describe("Fibonacci UI", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("Get the right fibonacci number", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("input[id=number]");

    await page.click("input[id=number]");
    await page.type("input[id=number]", "6");

    await page.click("button[type=submit]");

    await page.waitForSelector(".fibonacci__result_value");

    const text = await page.$eval(
      ".fibonacci__result_value",
      (e) => e.textContent
    );
    expect(text).toBe("8");
  });

  afterAll(() => browser.close());
});
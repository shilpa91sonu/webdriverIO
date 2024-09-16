import login from "../pageobjects/login.js";

describe("s1",()=>{
    it("script to login to the applicatioin",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/");
        let urll =await browser.getUrl()
        console.log(urll)
        let s=await browser.getTitle()
        await login.userNameText.isDisplayed();
        await login.passwordtext.isDisplayed()
        await expect(browser).toHaveUrl(urll)
        await expect (browser).toHaveTitle(s)
        await login.loginToApp("s2tudent", "Password123")
        await browser.pause(2000)
        let ttl=await browser.getTitle()
        //await expect("Logged In Successfully").toBe("Logged In Successfully")
        await expect(browser).toHaveTitle(ttl)
        await login.logoutbtn.click()

    })
})
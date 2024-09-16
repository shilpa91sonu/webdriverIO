import {Key} from 'webdriverio'
import loginToApp from "../pageobjects/loginPage.js"
import HomePage from   "../pageobjects/homepage.js"
describe("s1",async()=>{
it("t1",async()=>{
    await browser.url('https://www.flipkart.com/')
    await browser.maximizeWindow()
    // await loginToApp.loginbtn.click()
    // await loginToApp.emailText.setValue("shilpa.y91@gmail.com")
    // await loginToApp.enteroptbtn.click()
    // await loginToApp.numberText.setValue('9535245813')
    // await browser.$('//button[@class="QqFHMw twnTnD _7Pd1Fp"]').click()
    await HomePage.searchText.setValue("iphones mobiles")
    await browser.keys(Key.Enter)
    let w=await browser.getWindowHandle()
    await browser.switchToWindow(w)
    await browser.$('//div[text()="Apple iPhone 15 (Yellow, 128 GB)"]').click()
    browser.scroll(0,300)
    await browser.$('//button[@class="QqFHMw vslbG+ _3Yl67G _7Pd1Fp"]').click()
   })
})
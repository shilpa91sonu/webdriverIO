//import {Key} from 'webdriverio'

import {Key} from 'webdriverio'
describe("first script",()=>{
    it("launching the url and workinf on methods of url",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.pause(2000)
        await browser.maximizeWindow();
        await browser.$('//input[@class="Pke_EE"]').addValue("iphones 18")
        await browser.keys(Key.Enter)
        let w1=await browser.getWindowHandle()
        await browser.switchToWindow(w1)
      await browser.pause(2000)
       await browser.$('(//div[@class="KzDlHZ"])[1]').click();
     let w=await browser.getWindowHandle()
        await browser.switchToWindow(w)
       let e1= await browser.$('//input[@class="AFOXgu"]')
         browser.scroll(0,500);
     })
})
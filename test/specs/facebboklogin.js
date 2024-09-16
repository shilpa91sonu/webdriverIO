import {Key} from 'webdriverio'
import fs from "fs"
let data= fs.readFileSync("./testData/facebookCredencials.json")
let cred = JSON.parse(data)
console.log(cred.email)
describe("",()=>{
    it("login to facebook with valid credencials",async()=>{
        await browser.url("https://www.facebook.com/index.php/")
        await browser.$('//input[@class="inputtext _55r1 _6luy"]').setValue(cred.email)
        await browser.$('//input[@name="pass"]').setValue(cred.pswd)
       // await browser.keys(Key.Enter)
       let ele1=browser.$('//button[@class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]')
       await expect(browser).toBeDisplayed( ele1)
       await browser.$('//button[@class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]').click()
        let ttl=await browser.getTitle()
        await expect(browser).toHaveTitle(ttl)
        await browser.pause(4000)

    })
})
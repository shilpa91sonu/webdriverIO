describe("second script",()=>{
    it("launching application and exploring on Element methods",async()=>{
        //await browser.url("https://demowebshop.tricentis.com/")
        await browser.url("https://demoapps.qspiders.com/")
        
      //  // await browser.getTitle()
      //   //await browser.getElementValue()
      //   let a=browser.$('//input[@id="small-searchterms"]').getElement()
      // const e = await browser.$$('//a[@href="/computers"]').getElements()
      //   console.log( "shil", e.length)
      //   console.log( "shil", e.selector)
      //   console.log( a.selector)
      //   await browser.pause(3000)
      //   // console.log(a)
      //   //  await browser.getElementCSSValue(a)
      //   // a.click();
      //   // await browser.pause(3000)
      // handilng text feilds
      await browser.$('//button[contains(text(),"Quick")]').click()
      await browser.$('//input[@id="name"]').setValue("shilpa")
      await browser.$('//input[@id="email"]').addValue("shilpa.y91@gmail.com")
      await browser.$('//input[@name="password"]').addValue("sony@msrit91")
      await browser.$('//button[text()="Register"]').click()
      await browser.pause(2000)


    })

})
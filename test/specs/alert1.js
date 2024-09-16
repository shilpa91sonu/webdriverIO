describe("suit1",()=>{
    it("script2",async()=>{
        let a=await browser.$('//button[text()="Click for JS Alert"]').click();
        await browser.acceptAlert();
       await browser.pause(2000)
    })
})
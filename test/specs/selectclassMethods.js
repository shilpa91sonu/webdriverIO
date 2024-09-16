describe("selectClassScript",async()=>{
it("explore the select class methods",async()=>{
await browser.url("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
let aa= await browser.$('//input[@name="ph"]').setValue("1234567891")
let a1=await browser.$('//select[@id="select2"]').selectByIndex('2')
let a=await browser.$('//select[@id="select3"]').selectByVisibleText("India")
let bb=await browser.$('//select[@id="select4"]').addValue("karnataka")
await browser.$('//select[@id="select3"]').selectByAttribute("id","countryOpt0")
await browser.$(selectByAttribute('id',"select6")).addValue("bangalore")
let  s = bb.getValue();
const s1 = a.getText()
console.log(s)
console.log(s1)
 await browser.pause(2000)
})

})
import excel from "exceljs"
describe("",()=>{
    it("fetch the data from excel",async()=>{
    let book=new excel.Workbook()
     await book.xlsx.readFile('./testData/testdata1.xlsx')
    let sheet=book.getWorksheet('s1')
    let data=sheet.getRow(1).getCell(1).toString()
    console.log("heloooooooo"+data)
   sheet.getRow(4).getCell(4).value="shwetha"
    //console.log(data)
    await book.xlsx.writeFile('./testData/testdata1.xlsx')


    
    })
})
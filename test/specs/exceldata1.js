//import readandwritedata  from "../genericUtility/excelUtility.js"
import excel from "exceljs"
describe("",()=>{
    // it("read the data from excel using genaral utility class",async()=>{
    // //    let data = await readandwritedata.read('./test/testData/testdata1.xlsx','s1',1,2)
    // //    //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+ data);
       
    // //     await readandwritedata.write("./test/testData/testdata1.xlsx","s1",5,5,'shilapyadhunandhan')
    // })
    it("",async()=>{
    let book = new excel.Workbook()
       await book.xlsx.readFile("./test/testData/testdata1.xlsx")
       let sheet = book.getWorksheet('s1')
       for(let i=1; i<=sheet.columnCount;i++){
        for(let j=1;j<=sheet.rowCount;j++){
            let data=sheet.getRow(j).getCell(i).toString()
            console.log(data)
        }
       }

    })
})
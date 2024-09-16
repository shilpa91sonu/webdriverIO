import excel from "exceljs"
class readandwritedata{
    async read(filepath,sheetname,rownum,cellnum){
         let book=new excel.Workbook()
         await book.xlsx.readFile(filepath)
          let sheet=book.getWorksheet(sheetname)
         let data=sheet.getRow(rownum).getCell(cellnum).toString()
         return data
         
        }

    async write(filepath,sheetname,rownum,cellnum,v){
        let book1= new excel.Workbook()
        await book1.xlsx.readFile(filepath)
        let sheet=book1.getWorksheet(sheetname)
        sheet.getRow(rownum).getCell(cellnum).value=v
        book1.xlsx.writeFile(filepath)
    }
}
export default new readandwritedata()
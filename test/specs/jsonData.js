import login from "../pageobjects/login.js"
import fs from "fs";

let data = fs.readFileSync("./testData/credentials.json");
let cred = JSON.parse(data);

describe('Login Tests', () => {
   cred.forEach((element) => {
      it(" should log in with credentials", async () => {
         let usn = element.usn;
         let pwd = element.pwd;

        // console.log('Username:', usn);
        // console.log('Password:', pwd);

         // Uncomment the following lines for actual testing
         await browser.url(element.url1);
          await login.loginToApp(usn, pwd);
      });
   });
});

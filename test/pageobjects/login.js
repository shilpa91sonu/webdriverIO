class login{
    get userNameText(){
        return $('//input[@name="username"]')
    }
    get passwordtext(){
        return $('//input[@name="password"]')
    }
    get submittbtn(){
        return $('//button[@id="submit"]')
    }
    async loginToApp(a,b){
        await this.userNameText.setValue(a)
        await this.passwordtext.addValue(b)
        await this.submittbtn.click()
    }
    get logoutbtn(){
        return $('//a[text()="Log out"]')
    }
    }
export default new login()

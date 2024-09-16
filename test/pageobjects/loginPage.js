class loginToApp{
    get loginbtn(){
        return $("//span[text()='Login']")
    }
    get emailText(){
        return $('//input[@class="r4vIwl BV+Dqf"]')
    }
    get enteroptbtn(){
        return $('//button[@class="QqFHMw twnTnD _7Pd1Fp"]')
    }
    get numberText(){
        return $('//input[@class="r4vIwl BV+Dqf"]')
    }
    async LoginToApp(a){
        await this.loginbtn()
        await this.emailText.setValue(a)
        await this.enteroptbtn
    }


}
export default new loginToApp()
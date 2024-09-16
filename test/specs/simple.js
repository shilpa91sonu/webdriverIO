describe("my third script",()=>{
        it('should allow me to inspect WebdriverIO.Element properties', async () => {
            const elem = await $('#elem').getElement();
            console.log(elem.selector); // outputs: '#elem'
        });


})
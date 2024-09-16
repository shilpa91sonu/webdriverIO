import {key} from 'webdriverio'
describe('Alert handling', () => {
    it('should handle a simple alert', async () => {
        await browser.url('https://example.com');

        // Trigger an alert on the page
        await browser.execute(() => {
            alert('This is a simple alert!');
            let a=alert.getAlertText()
            console.log(a)

        });

        // Accept the alert
        await browser.acceptAlert();

        console.log('Alert was accepted');
    });
    //browser.keys(key.enter)
});


import LoginPage from "../../../pages/login_page";

const loginPage = new LoginPage();



describe('Check login with Mobile number and OTP', () => {
    beforeEach(() => {

        cy.UncaughtException();
        cy.viewport('macbook-13');
        cy.visit('/');

    });

    it('Verify Login with Mobile Number Page', () => {

        loginPage.verifyLoginPage();


    });

    it('Validate Login with Mobile Number Page', () => {

        loginPage.enterMobileNumber();

    });

    it('Verify Register Now Page', () => {

        loginPage.clickOnRegisterNowButton();
    });

});
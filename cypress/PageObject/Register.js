import { locators, values } from "./Locators";

class NotRegisteredUser {

    OpenPage () {
        cy.visit(locators.url);
    }

    CheckHomePageVisible () {
        cy.get(locators.home_page_logo).should('be.visible');
    }

    OpenSignUpForm () {
        cy.get(locators.login_button).click();
    }

    CheckSignUpFormVisible () {
        cy.get(locators.sign_up_form).should('be.visible');
    }

    SignUP (name, email) {
        cy.get(locators.sign_up_name).type(name);
        cy.get(locators.sign_up_email).type(email);
        cy.get(locators.sign_up_button).click();
    }

    CheckLoginFormVisible () {
        cy.get(locators.login_form).should('be.visible');

    }

    CreateAccount () {
        cy.get(locators.login_title).click();
        cy.get(locators.login_password).type(values.login_password);
        cy.get(locators.login_day).select(values.login_day);
        cy.get(locators.login_month).select(values.login_month);
        cy.get(locators.login_year).select(values.login_year);
        cy.get(locators.login_checkbox_1).click();
        cy.get(locators.login_checkbox_2).click();
        cy.get(locators.firstname).type(values.firstname);
        cy.get(locators.lastname).type(values.lastname);
        cy.get(locators.company).type(values.company);
        cy.get(locators.address).type(values.address);
        cy.get(locators.address2).type(values.address2);
        cy.get(locators.country).select("Canada");
        cy.get(locators.state).type(values.state);
        cy.get(locators.city).type(values.city);
        cy.get(locators.zipcode).type(values.zipcode);
        cy.get(locators.mobile_number).type(values.mobile_number);
        cy.get(locators.create_account).click();
    }

    CheckAccountCreated () {
        cy.get(locators.account_created).should("be.visible");
        cy.get(locators.continue).click();
        cy.get(locators.loged_user).should("be.visible").and("have.text", values.sign_up_name);
    }

    DeleteAccount () {
        cy.get(locators.delete_account).click();
    }

    CheckAccountDeleted () {
        cy.get(locators.account_deleted).should("be.visible").and("have.text", "Account Deleted!")
    }

    CheckSignUpErrorMessage () {
        cy.get(locators.sign_up_error_message).should("be.visible");
    }
    
}

export default NotRegisteredUser;

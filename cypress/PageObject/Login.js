import { locators } from "./Locators";
import { values } from "./Locators";

class RegisteredUser {
    OpenPage () {
        cy.visit(locators.url);
    }

    CheckHomePageVisible () {
        cy.get(locators.home_page_logo).should('be.visible');
    }

    OpenLoginForm () {
        cy.get(locators.login_button).click();
    }

    CheckLoginFormVisible () {
        cy.get(locators.login_form).should('be.visible');
    }

    Login (email, password) {
        cy.get(locators.log_email).type(email);
        cy.get(locators.log_password).type(password);
        cy.get(locators.log_button).click();
    }

    CheckLogedIn () {
        cy.get(locators.loged_user).should("be.visible");
    }

    DeleteAccount () {
        cy.get(locators.delete_account).click();
    }

    CheckAccountDeleted () {
        cy.get(locators.account_deleted).should("be.visible").and("have.text", "Account Deleted!");
    }

    CheckErrorMessage () {
        cy.get(locators.log_error_message).should("be.visible").and("have.text", "Your email or password is incorrect!");
    }

    Logout () {
        cy.get(locators.logout).click();
    }
}

export default RegisteredUser;
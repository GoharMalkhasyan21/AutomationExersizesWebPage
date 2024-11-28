import { locators } from "./Locators";
import { values } from "./Locators";

class User {

    OpenPage () {
        cy.visit(locators.url);
    }

    CheckHomePageVisible () {
        cy.get(locators.home_page_logo).should('be.visible');
    }

    ClickOnContactUsButton () {
        cy.get(locators.contact_us).click();
    }

    CheckContactFormVisible () {
        cy.get(locators.contacy_form).should("be.visible");
    }

    FillFieldsAndSubmit () {
        cy.get(locators.contact_name).type(values.sign_up_name);
        cy.get(locators.contact_email).type(values.log_email);
        cy.get(locators.contact_subject).type("Texttt");
        cy.get(locators.contact_message).type("message");
        cy.get(locators.contact_file).selectFile('cypress/fixtures/example.json');
        cy.get(locators.contact_submit).click();
    }

    ClickAlertButton() {
        cy.get('button').click();
    }

    CheckSuccsesMessageAndBackHome () {
        cy.get(locators.contacts_succses_mesage).should("be.visible");
        cy.get(locators.contacts_hom_button).click();
    }

    OpenTestCasesPage () {
        cy.get(locators.test_cases_button).click();
        cy.get(locators.test_cases).should("be.visible");
    }
}

export default User;

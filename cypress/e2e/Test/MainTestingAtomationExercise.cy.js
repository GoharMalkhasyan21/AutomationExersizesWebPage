import RegisteredUser from "../../PageObject/Login";
import NotRegisteredUser from "../../PageObject/Register";
import User from "../../PageObject/ContactUs";
import { values } from "../../PageObject/Locators";

describe('Automation Exercise', () => {

    const notRegisteredUser = new NotRegisteredUser();
    const registeredUser = new RegisteredUser();
    const user = new User();

    it('Register User', () => {
        notRegisteredUser.OpenPage();
        notRegisteredUser.CheckHomePageVisible();
        notRegisteredUser.OpenSignUpForm();
        notRegisteredUser.CheckSignUpFormVisible();
        notRegisteredUser.SignUP(values.sign_up_name, values.sign_up_email);
        notRegisteredUser.CheckLoginFormVisible();
        notRegisteredUser.CreateAccount();
        notRegisteredUser.CheckAccountCreated();
        notRegisteredUser.DeleteAccount();
        notRegisteredUser.CheckAccountDeleted();
    });

    it("User login with corect credentials", () => {
        registeredUser.OpenPage();
        registeredUser.CheckHomePageVisible();
        registeredUser.OpenLoginForm();
        registeredUser.CheckLoginFormVisible();
        registeredUser.Login(values.log_email, values.log_password);
        registeredUser.CheckLogedIn();
        registeredUser.DeleteAccount();
        registeredUser.CheckAccountDeleted();
    });

    it("User login with inorrect credentials", () => {
        registeredUser.OpenPage();
        registeredUser.CheckHomePageVisible();
        registeredUser.OpenLoginForm();
        registeredUser.CheckLoginFormVisible();
        registeredUser.Login(values.log_incorect_email, values.log_incorrect_password);
        registeredUser.CheckErrorMessage();
    });

    it("Registered User Login and LogOut", () => {
        registeredUser.OpenPage();
        registeredUser.CheckHomePageVisible();
        registeredUser.OpenLoginForm();
        registeredUser.CheckLoginFormVisible();
        registeredUser.Login(values.log_email, values.log_password);
        registeredUser.CheckLogedIn();
        registeredUser.Logout();
        registeredUser.CheckLoginFormVisible();
    });

    it("Register user by existing email", () => {
        notRegisteredUser.OpenPage();
        notRegisteredUser.CheckHomePageVisible();
        notRegisteredUser.OpenSignUpForm();
        notRegisteredUser.CheckSignUpFormVisible();
        notRegisteredUser.SignUP(values.sign_up_name, values.log_email);
        notRegisteredUser.CheckSignUpErrorMessage()
    });

    it("User open Contact Us page", () => {
        user.OpenPage();
        user.CheckHomePageVisible();
        user.ClickOnContactUsButton();
        user.CheckContactFormVisible();
        user.FillFieldsAndSubmit();
        user.ClickAlertButton();
        user.CheckSuccsesMessageAndBackHome();
        user.CheckHomePageVisible();
    });

    it("User open Test Cases Page", () => {
        user.OpenPage();
        user.CheckHomePageVisible();
        user.ClickOnContactUsButton();
        user.OpenTestCasesPage();
    });
});

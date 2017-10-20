import Page from './page';
import { credentials } from '../config';

class SignIn extends Page {
  get emailInput() { return browser.element('#ap_email'); }
  get passwordInput() { return browser.element('#ap_password'); }
  get submitButton() { return browser.element('#signInSubmit'); }

  setEmail(value) {
    this.emailInput.setValue(value);
  }

  setPassword(value) {
    this.passwordInput.setValue(value);
  }

  clickSubmit() {
    this.submitButton.click();
  }

  login() {
    this.setEmail(credentials.email);
    this.setPassword(credentials.password);
    return this.clickSubmit();
  }

  open() {
    super.open('ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&switch_account=');
  }
}

module.exports = SignIn;

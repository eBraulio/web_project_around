export default class UserInfo {
  constructor({ user, job }) {
    this._userName = document.querySelector(user);
    this._userAboutme = document.querySelector(job);
    this.userValues = { name: "", aboutme: "" };
  }

  getUserInfo() {
    this.userValues.name = this._userName.textContent;
    this.userValues.aboutme = this._userAboutme.textContent;

    return this.userValues;
  }

  setUserInfo({ name, aboutme }) {
    this._userName.textContent = name;
    this._userAboutme.textContent = aboutme;
  }
}

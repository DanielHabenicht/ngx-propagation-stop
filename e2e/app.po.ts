import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public clickInner() {
    return element(by.className('inner')).click();
  }

  public clickOuter() {
    return element(by.className('outer')).click();
  }

  public clickResetButton() {
    return element(by.name('button')).click();
  }

  public getElementColor(elementid: string) {
    return element(by.id(elementid)).getCssValue('background-color');
  }
}

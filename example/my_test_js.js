var AndroidDriver = require('appium-android-driver').AndroidDriver;
var chai   = require('chai');
var should = require('should');
var expect = chai.expect;

let defaultCaps = {
  app: '/appium-workshop/playground/app-debug.apk',
  deviceName: 'Android',
  platformName: 'Android'
};
let driver = new AndroidDriver(); 
let button_menu;

describe("some descriptions", function(){
  it('should has some thing', function(){
    driver.createSession(defaultCaps).then(function(){
      button_menu = driver.findElementByAccessibilityId('ReferenceApp');
      button_menu.click();
    });
    expect(1).to.include(1);
  });

  it('should has method loadAgreementKindOfSumList', function(){
    let methodName = 'loadAgreementKindOfSumList';

    expect(1).to.include(1);
  });
});

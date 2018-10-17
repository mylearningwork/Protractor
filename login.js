describe('this will open url',function(){


//beforeEach('this will run before each function', function() {
    
//});

it('this will open url',function(){
    
browser.waitForAngularEnabled(false);
browser.get('http://google.com');
  
element(by.xpath('//*[@id="lst-ib"]')).sendKeys('Alok');

});
    
it('this will clickon search button', function() {

element(by.xpath('//*[@id="lst-ib"]')).sendKeys(protractor.Key.TAB);


});

it('this will click on the search button', function() {

element(by.xpath('(//input[@value="Google Search"])[position()=2]')).click();

});


});
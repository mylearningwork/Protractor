
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'login.js' ],
	/*multiCapabilities : [ {
		browserName : 'firefox'
	}, {
		browserName : 'chrome'
	} ]*/
	
	
	onPrepare: function() {
	      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
	      jasmine.getEnv().addReporter(new HtmlReporter({
	         baseDirectory: 'reports', screenshotsSubfolder: 'images', jsonsSubfolder: 'jsons'
	      }).getJasmine2Reporter());
	   }
}


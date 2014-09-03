define([
	'src/financial'
], function (Financial) {
	'use strict';

	describe('Financial Data Manager.', function() {
		describe('Do some test.', function() {

			console.log(Financial);
			console.log(Financial.getChartOfAccounts());

			it('Should do something data.', function() {
				expect(true).toEqual(true);
			});
		});
	});
});

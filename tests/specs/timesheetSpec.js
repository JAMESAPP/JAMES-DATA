define([
	'src/timesheet'
], function (Timesheet) {
	'use strict';

	describe('Financial Data Manager.', function() {
		describe('Do some test.', function() {

			console.log(Timesheet);
			console.log(Timesheet.getMachines());

			it('Should do something...', function() {
				expect('PACO_FLOOR-00_LEFT-01').toEqual(Timesheet.getMachines()[0].value);
			});
		});
	});
});

define([
	'src/food'
], function (Food) {
	'use strict';

	describe('Food Data Manager.', function() {
		describe('Do some test.', function() {

			console.log(Food);
			console.log(Food.getMealTypes());
			console.log(Food.getFoodGroups());

			it('Should do something data.', function() {
				expect(true).toEqual(true);
			});
		});
	});
});

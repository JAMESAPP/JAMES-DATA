define([
	'../../../james-data'
	, 'text!package.json'
], function (JAMES_DATA, PackageJSON) {
	'use strict';

	describe('JAMES-DATA.', function() {
		it('Should show the version.', function() {
			expect(JSON.parse(PackageJSON).version).toEqual(JAMES_DATA.VERSION);
		});
	});
});

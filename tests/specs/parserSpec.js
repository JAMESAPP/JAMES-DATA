define([
	'src/parser'
], function (Parser) {
	'use strict';

	describe('Parser.', function() {
		it ('Should return all months', function() {
			expect(Parser.getMonths()[0].label).toEqual('January');
			expect(Parser.getMonths()[1].label).toEqual('February');
			expect(Parser.getMonths()[2].label).toEqual('March');
			expect(Parser.getMonths()[3].label).toEqual('April');
			expect(Parser.getMonths()[4].label).toEqual('May');
			expect(Parser.getMonths()[5].label).toEqual('June');
			expect(Parser.getMonths()[6].label).toEqual('July');
			expect(Parser.getMonths()[7].label).toEqual('August');
			expect(Parser.getMonths()[8].label).toEqual('September');
			expect(Parser.getMonths()[9].label).toEqual('October');
			expect(Parser.getMonths()[10].label).toEqual('November');
			expect(Parser.getMonths()[11].label).toEqual('December');
		});
	});
});

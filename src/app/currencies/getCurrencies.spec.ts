import { getCurrencies } from './getCurrencies';

describe('getCurrencies',()=>{
	it('Should return the supported currencies', ()=>{
		const result = getCurrencies();
		expect(result).toContain('USD');
		expect(result).toCOntain('AUD');
		expect(result).toContain('EUR');

	});
});

import{greet} from './greet';

describe('greet',() => {
    it('should include the name in the massage',()=>{
        expect(greet('mosh')).toContain('mosh');
    })
})

export { greet };
import {{PageName}} from '../../pages/actions/{{PageName}}.page.js';


describe('{{PageName}} test', () => {
    let {{PageName}}Instance;

    before(() => {
      {{PageName}}Instance = new {{PageName}}();
    });

    it('should validate {{PageName}} page', ()=>{
        {{PageName}}Instance.visit()
      }
    );

});

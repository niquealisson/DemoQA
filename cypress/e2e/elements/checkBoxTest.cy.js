import CheckBoxPage from '../../support/PageObjects/elementspages/checkBoxPage';

describe('CheckBox Tests', () => {
    const checkBoxPage = new CheckBoxPage();

    beforeEach(() => {
        checkBoxPage.visit();
    });

    it('should click the uncheck SVG icon and verify selections', () => {
        checkBoxPage.expandTree();  
        checkBoxPage.checkHomeBox(); 

        checkBoxPage.verifySelections(); 
    });
});

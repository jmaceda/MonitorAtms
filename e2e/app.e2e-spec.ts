import { CodeandoAngularPage } from './app.po';

describe('codeando-angular App', function() {
  let page: CodeandoAngularPage;

  beforeEach(() => {
    page = new CodeandoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

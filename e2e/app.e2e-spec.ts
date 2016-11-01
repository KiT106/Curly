import { CurlyPage } from './app.po';

describe('curly App', function() {
  let page: CurlyPage;

  beforeEach(() => {
    page = new CurlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

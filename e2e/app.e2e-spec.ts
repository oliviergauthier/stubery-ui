import { StuberyUiPage } from './app.po';

describe('stubery-ui App', () => {
  let page: StuberyUiPage;

  beforeEach(() => {
    page = new StuberyUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

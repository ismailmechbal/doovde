import { doovdePage } from './app.po';

describe('doovde App', function() {
  let page: doovdePage;

  beforeEach(() => {
    page = new doovdePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

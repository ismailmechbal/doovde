import { StoryLineTrackerPage } from './app.po';

describe('story-line-tracker App', function() {
  let page: StoryLineTrackerPage;

  beforeEach(() => {
    page = new StoryLineTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

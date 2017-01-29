import { Assignment151Page } from './app.po';

describe('assignment15-1 App', function() {
  let page: Assignment151Page;

  beforeEach(() => {
    page = new Assignment151Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

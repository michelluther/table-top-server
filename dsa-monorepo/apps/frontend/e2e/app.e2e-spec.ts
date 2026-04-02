import { TableTopClientPage } from './app.po';

describe('table-top-client App', () => {
  let page: TableTopClientPage;

  beforeEach(() => {
    page = new TableTopClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

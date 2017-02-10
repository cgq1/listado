import { ListadoPage } from './app.po';

describe('listado App', function() {
  let page: ListadoPage;

  beforeEach(() => {
    page = new ListadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

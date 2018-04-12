import { TercerIntentoPage } from './app.po';

describe('tercer-intento App', () => {
  let page: TercerIntentoPage;

  beforeEach(() => {
    page = new TercerIntentoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

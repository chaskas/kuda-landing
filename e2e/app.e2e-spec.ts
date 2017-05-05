import { KudaLandingPage } from './app.po';

describe('kuda-landing App', () => {
  let page: KudaLandingPage;

  beforeEach(() => {
    page = new KudaLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

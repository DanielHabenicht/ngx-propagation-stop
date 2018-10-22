import { AppPage } from './app.po';

describe('click-stop-propagation App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should stop Propagation', () => {
    page.navigateTo();
    page.clickInner();
    expect(page.getElementColor('inner')).toEqual('rgba(0, 128, 0, 1)');
    expect(page.getElementColor('outer')).not.toEqual('rgba(0, 128, 0, 1)');
  });
});

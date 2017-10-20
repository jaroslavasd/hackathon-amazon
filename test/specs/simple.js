describe('amazon page', () => {
  it('should have the right title', () => {
    browser.url('https://amazon.com');
    browser.getTitle().should.include('Amazon.com');
  });
});

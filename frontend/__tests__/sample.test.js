// Groups together related tests - test suite
describe('sample test 101', () => {
  it('works as expected', () => {
    var age = 100
    expect(1).toEqual(1)
    expect(age).toEqual(100)
  })

  it("handles ranges just fine", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });
  // it.only(), fit() runs just one, it.skip(), xit() skips test
  it("makes a list of dog names", () => {
    const dogs = ['snickers', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers')
  });
})

describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  afterEach(function() {
    window.swap.calls.reset();
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles a single element', function() {
    expect(bubbleSort(['a'])).toEqual(['a']);
  });
  it('handles multiple string elements', function() {
    expect(bubbleSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
    expect(window.swap.calls.count()).toEqual(3);
  });
  it('handles multiple numbers', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(window.swap.calls.count()).toEqual(3);
  });
});

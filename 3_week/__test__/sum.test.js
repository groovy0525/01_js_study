function sum(a, b) {
  return a + b
}

describe('<Sum>', () => {
  it('10 + 5 = 15', () => {
    expect(sum(10, 5)).toBe(15)
  })
})

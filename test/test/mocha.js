const { add, mul } = require('../src/math')
const { expect } = require('chai')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3), 5) // BDD
    })
    // 不执行
    // it.skip('should return -2 when 2 - 4', () => {
    //   expect(add(2, -4), -2) // BDD
    // })

    // 仅执行下条语句
    // it.only('should return 3 when 0 + 3', () => {
    //   expect(add(2, -3), -1) // BDD
    // })
  })

  describe('mul', () => {
    it('should return 5 when 2 * 3', () => {
      expect(mul(2, 3), 1) // BDD
    })
  })
})

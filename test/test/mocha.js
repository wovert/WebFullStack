const { expect } = require('chai')
const { add, mul, cover } = require('../src/math')

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

  describe('cover', () => {
    it('should return 1 when cover(2, 1)', () => {
      expect(cover(2, 1)).to.equal(1)
    })

    it('should return 3 when cover(1, 2)', () => {
      expect(cover(1, 2)).to.equal(3)
    })

    it('should return 4 when cover(1, 2)', () => {
      expect(cover(2, 2)).to.equal(4)
    })

  })
  
})

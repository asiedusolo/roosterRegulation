const assert = require('assert')
const Rooster = require('../index.js')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // setup
      const expected = 'cock-a-doodle-doo!'

      // exercise
      const rooster = Rooster.announceDawn()

      // verify
      assert.equal(rooster, expected)
    })
  })
})

describe('Rooster', () => {
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // setup
      let number = 18

      // exercise
      const expected = Rooster.timeAtDawn(number)

      // verfiy
      assert.strictEqual(expected, number.toString())
    })
    it('throws an error if passed a number less  than 0', () => {
      assert.throws(
          () => {
            Rooster.timeAtDawn(-1);
          },
          RangeError
        );
    })
    it('throws an error if passed a number greater than 23', () => {
      assert.throws(
          () => {
            Rooster.timeAtDawn(31);
          },
          RangeError
        );
    })
  })
})

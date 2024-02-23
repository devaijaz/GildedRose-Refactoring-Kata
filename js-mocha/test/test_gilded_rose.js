var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
var testData = require("./data.json");
describe("Gilded Rose", function() {
  for(const [name, sellIn, quality, expectedSellin, expectedQuality] of testData) {
    it(`${name}:${sellIn}:${quality}`, function() {
      const gildedRose = new Shop([ new Item(name, sellIn, quality) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal(name);
      expect(items[0].sellIn).to.equal(expectedSellin);
      expect(items[0].quality).to.equal(expectedQuality);
    });
  }
});

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const AGED_BRIE = "Aged Brie";
const GENERAL = "general";
const CONJURED = "Conjured Mana Cake";

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  updateBackstage(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;

      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }
  updateSulfuras(item) { }

  updateGeneral(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case AGED_BRIE:
          this.updateAgedBrie(item);
          continue;
        case BACKSTAGE:
          this.updateBackstage(item);
          continue;
        case SULFURAS:
          this.updateSulfuras(item);
          continue;
        default:
          this.updateGeneral(item);
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}


const { Shop, Item } = require("./src/gilded_rose");

const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const AGED_BRIE = "Aged Brie";
const GENERAL = "general";
const CONJURED = "Conjured Mana Cake";
const items = [
  new Item(GENERAL, 10, 20),
  new Item(AGED_BRIE, 2, 0),
  new Item(GENERAL, 5, 7),
  new Item(SULFURAS, 0, 80),
  new Item(SULFURAS, -1, 80),
  new Item(BACKSTAGE, 15, 20),
  new Item(BACKSTAGE, 10, 49),
  new Item(BACKSTAGE, 5, 49),

  // This Conjured item does not work properly yet
  new Item(CONJURED, 3, 6)
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
const testData = [];
for (const name of [BACKSTAGE, SULFURAS, AGED_BRIE, GENERAL]) {
  for (let i = -1; i < 12; i++) {
    for (let j = -1; j < 52; j++) {
      const items = [new Item(name, i, j)];
        new Shop(items).updateQuality();
        testData.push([name, i, j, items[0].sellIn, items[0].quality]);
    }
  }
}
//testData.sort((a, b) => Math.random() - Math.random());
//console.log(JSON.stringify(testData));
for (let day = 0; day < days + 1; day++) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
  console.log("")
}

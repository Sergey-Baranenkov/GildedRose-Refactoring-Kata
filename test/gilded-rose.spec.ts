import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import Item from "../app/item";

describe('Gilded Rose', function () {

    it('Default case', function() {
        const gildedRose = new GildedRose([ new Item('default', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item('default', 9, 9));
    });

    it('Default case low boundary', function() {
        const gildedRose = new GildedRose([ new Item('default', 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item('default', 9, 0));
    });

    it('Aged Brie', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item('Aged Brie', 9, 11));
    });

    it('Aged Brie top boundary', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item('Aged Brie', 9, 50));
    });

    it('Backstage passes to a TAFKAL80ETC concert sellIn > 10', function() {
        const name = 'Backstage passes to a TAFKAL80ETC concert';
        const gildedRose = new GildedRose([ new Item(name, 11, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, 10, 11));
    });

    it('Backstage passes to a TAFKAL80ETC concert sellIn = 10', function() {
        const name = 'Backstage passes to a TAFKAL80ETC concert';
        const gildedRose = new GildedRose([ new Item(name, 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, 9, 12));
    });

    it('Backstage passes to a TAFKAL80ETC concert sellIn = 5', function() {
        const name = 'Backstage passes to a TAFKAL80ETC concert';
        const gildedRose = new GildedRose([ new Item(name, 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, 4, 13));
    });

    it('Backstage passes to a TAFKAL80ETC concert sellIn = 0', function() {
        const name = 'Backstage passes to a TAFKAL80ETC concert';
        const gildedRose = new GildedRose([ new Item(name, 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, -1, 0));
    });

    it('Sulfuras, Hand of Ragnaros', function() {
        const name = 'Sulfuras, Hand of Ragnaros';
        const gildedRose = new GildedRose([ new Item(name, 10, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, 10, 80));
    });

    it('Conjured sellIn > 0', function() {
        const name = 'Conjured';
        const gildedRose = new GildedRose([ new Item(name, 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, 9, 8));
    });

    it('Conjured sellIn <= 0', function() {
        const name = 'Conjured';
        const gildedRose = new GildedRose([ new Item(name, 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).to.deep.equal(new Item(name, -1, 6));
    });
});

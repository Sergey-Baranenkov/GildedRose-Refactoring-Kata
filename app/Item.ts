export const enum SpecialItemNamesEnum {
    agedBrie = 'Aged Brie',
    backstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras = 'Sulfuras, Hand of Ragnaros',
    conjured = 'Conjured',
}

export default class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

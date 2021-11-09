import Item from './item';
import Coordinator from "./Coordinator";

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        this.items = this.items.map((item) => {
            switch (item.name) {
                case 'Aged Brie':
                    return Coordinator.updateQualityForAgedBrie(item);

                case 'Backstage passes to a TAFKAL80ETC concert':
                    return Coordinator.updateQualityForBackstagePasses(item);

                case 'Sulfuras, Hand of Ragnaros':
                    return Coordinator.updateQualityForSulfuras(item);

                case 'Conjured':
                    return Coordinator.updateQualityForConjured(item);

                default:
                    return Coordinator.updateQualityForDefaultItem(item);
            }
        });

        return this.items;
    }
}

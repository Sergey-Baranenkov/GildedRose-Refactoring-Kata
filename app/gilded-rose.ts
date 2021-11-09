import Item, {SpecialItemNamesEnum} from './Item';
import Coordinator from "./Coordinator";



export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        this.items = this.items.map((item) => {
            switch (item.name) {
                case SpecialItemNamesEnum.agedBrie:
                    return Coordinator.updateQualityForAgedBrie(item);

                case SpecialItemNamesEnum.backstagePasses:
                    return Coordinator.updateQualityForBackstagePasses(item);

                case SpecialItemNamesEnum.sulfuras:
                    return Coordinator.updateQualityForSulfuras(item);

                case SpecialItemNamesEnum.conjured:
                    return Coordinator.updateQualityForConjured(item);

                default:
                    return Coordinator.updateQualityForDefaultItem(item);
            }
        });

        return this.items;
    }
}

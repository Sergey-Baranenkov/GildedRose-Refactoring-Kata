import Item from './Item'

class Transformer {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    public handleQualityBoundaries(minQuality: number = 0, maxQuality: number = 50): this {
        let quality = this.item.quality;
        quality = Math.min(Math.max(minQuality, quality), maxQuality);
        this.item.quality = quality;
        return this;
    }

    public decreaseQualityBy(by: number = 1): this {
        this.item.quality -= by;
        return this
    }

    public increaseQualityBy(by: number = 1): this {
        this.item.quality += by;
        return this
    }

    public decreaseSellIn(): this {
        this.item.sellIn--;
        return this;
    }

    public decreaseQualityBySellIn(): this {
        this.decreaseQualityBy(this.item.sellIn > 0 ? 1 : 2);
        return this;
    }

}

export default class Coordinator {
    private static createTransformer(item: Item): Transformer {
        return new Transformer(item)
    }

    public static updateQualityForDefaultItem(item: Item): Item {
        return Coordinator
            .createTransformer(item)
            .decreaseQualityBySellIn()
            .handleQualityBoundaries()
            .decreaseSellIn()
            .item;
    }

    public static updateQualityForAgedBrie(item: Item): Item {
        return Coordinator
            .createTransformer(item)
            .increaseQualityBy(1)
            .handleQualityBoundaries()
            .decreaseSellIn()
            .item;
    }

    public static updateQualityForBackstagePasses(item: Item): Item {
        let transformer = Coordinator
            .createTransformer(item)

        if (transformer.item.sellIn <= 0) {
            transformer = transformer.decreaseQualityBy(transformer.item.quality);
        } else if (transformer.item.sellIn <= 5) {
            transformer = transformer.increaseQualityBy(3);
        } else if (transformer.item.sellIn <= 10) {
            transformer = transformer.increaseQualityBy(2);
        } else {
            transformer = transformer.increaseQualityBy(1);
        }

        return transformer
            .handleQualityBoundaries()
            .decreaseSellIn()
            .item;
    }

    public static updateQualityForSulfuras(item: Item): Item {
        return item;
    }

    public static updateQualityForConjured(item: Item): Item {
        return Coordinator
            .createTransformer(item)
            .decreaseQualityBySellIn()
            .decreaseQualityBySellIn()
            .handleQualityBoundaries()
            .decreaseSellIn()
            .item;
    }
}

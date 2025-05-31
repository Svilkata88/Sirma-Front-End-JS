class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    applyDiscount(discountPercent) {
        this.price -= this.price * (discountPercent / 100);
    }
}

class Electronics extends Product {
    constructor(id, name, price, warrantyPeriod, brand) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
        this.brand = brand;
    }
}

class Clothing extends Product {
    constructor(id, name, price, size, material) {
        super(id, name, price);
        this.size = size;
        this.material = material;
    }
}
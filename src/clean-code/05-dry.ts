type Size = '' | 'S' | 'M' | 'L';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      console.log(key, typeof this[key]);

      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof key} is not defined`);
      }
    }

    return true;
  }

  toString() {
    // No Dry (Dont Repeat Yourself)
    // if (this.name.length <= 0) throw new Error('Product name is empty');
    // if (this.price <= 0) throw new Error('Price is empty');
    // if (this.size.length <= 0) throw new Error('Size is empty');

    if (!this.isProductReady()) return;

    return `--> ${this.name} (${this.price}), ${this.size} <--`;
  }
}

(() => {
  const bluePants = new Product('blue pants', 100, 'M');

  console.log(bluePants.toString());
})();

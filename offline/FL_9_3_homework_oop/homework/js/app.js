function ShoppingCart(name, owner, maxCount) {
    if (typeof name !== 'string') {
        console.log('Cart name should be string');
    } else {
        this.name = name;
    }
    if (typeof owner !== 'string') {
        console.log('Owner name should be string')
    } else {
        this.owner = owner;
    }
    if (typeof maxCount !== 'number' || maxCount < 0) {
        console.log('MaxCount should be number and be greater than zero')
    } else {
        this.maxCount = maxCount;
    }
    let _logs = [];
    let dateOfAddingToCart = [];
    let listProducts = [];
    _logs.push(`${this.name} was created in ${new Date()}`);

    this.addNewProduct = function (product) {
        if (typeof product !== 'object' || !(product instanceof Product)) {
            console.log('Please try to add Product instance');
        } else {
            if (listProducts.length < this.maxCount) {
                listProducts.push(product);
            } else {
                const p = listProducts.map((el, index) => {
                    return { price: el.getPrice(), index: index }
                }).sort((prev, curr) => {
                    return prev.price - curr.price;
                });
                listProducts.splice(p[0].index, 1);
                listProducts.push(product);
            }
            product.add(this.name);
            dateOfAddingToCart.push(new Date());
            _logs.push(`${product.name} was added to ${this.name} on ${new Date()} `);
        }
    }

    this.removeProduct = function (id) {
        listProducts.splice(id - 1, 1);
        dateOfAddingToCart.splice(id - 1, 1);
        listProducts[id - 1].removeProduct(this.name);
        _logs.push(`${listProducts[id - 1].name} was removed from ${this.name} on ${new Date()}`);
    }

    this.getAvaragePrice = function () {
        return (this.getTotalPrice() / listProducts.length).toFixed(2);
    }

    this.getProducts = function () {
        return listProducts;
    }

    this.getFormattedListOfProducts = function () {
        return listProducts.forEach(el =>
            console.log(`${el.name} - is on ${this.name} from ${dateOfAddingToCart[listProducts.indexOf(el)]}
                        . Detailed product description: ${JSON.stringify(el.description)}`));
    }
    this.getTotalPrice = function () {
        const totalPrice = listProducts.map(el => {
            return el.getPrice()
        }).reduce((a, b) => a + b);
        return totalPrice;
    }
    this.getHistory = function () {
        return _logs;
    }
}


function Product(name, description, price) {
    if (typeof name !== 'string') {
        console.log('Product name should be string')
    } else {
        this.name = name;
    }
    if (typeof description !== 'object') {
        console.log('Product description should be object')
    } else {
        this.description = description;
    }
    if (typeof price !== 'number' || price < 0) {
        console.log('Product price should be number and be greater than zero')
    } else {
        this.price = price;
    }
    let cartForProduct;
    let _historyLog = [];

    this.getPrice = function () {
        return this.price;
    }
    this.setPrice = function (newPrice) {
        if (newPrice > this.price) {
            _historyLog.push(`change price from ${this.price} to ${newPrice}`)
            this.price = newPrice;
        } else {
            console.log(`Cannot set smaller price than product has now`);
            _historyLog.push(`try to change price from ${this.price} to ${newPrice}`);
        }
    }
    this.add = function (nameCart) {
        cartForProduct = nameCart.name;
        _historyLog.push(`${this.name} is added to ${cartForProduct} on ${new Date()}`);
        return this;
    }
    this.removeProduct = function (nameCart) {
        cartForProduct = null;
        _historyLog.push(`${this.name} is removed from ${nameCart} on ${new Date()}`);
        return this;
    }
    this.getHistory = function () {
        return _historyLog;
    }

}
const stevesShopCart = new ShoppingCart('stevesCart', 'Steve', 5);
const apple = new Product('apple', { color: 'red', size: 'small' }, 30);
const banana = new Product('banana', { color: 'yellow', size: 'medium' }, 45);
const avocado = new Product('avocado', { color: 'green', size: 'small' }, 50);

stevesShopCart.addNewProduct(apple);
stevesShopCart.addNewProduct(banana);
stevesShopCart.addNewProduct(avocado);
stevesShopCart.addNewProduct(banana);
stevesShopCart.addNewProduct(banana);
stevesShopCart.removeProduct(4);

console.log(stevesShopCart.getHistory());
console.log(banana.getHistory());

console.log('avarage price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());

stevesShopCart.addNewProduct('apple string');

avocado.setPrice(20);
avocado.setPrice(100);
console.log(avocado.getHistory());

console.table(stevesShopCart.getFormattedListOfProducts());
















let API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class GoodsItem {
    constructor (product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="buy-btn" type="button">Купить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this._fetchGoods();
    }
    
    _getLink = (link) => {
        return `${API}${link}`;
    }

    _fetchGoods() {
        this.goods = [
            { product_name: 'Notebook', price: 2000},
            { product_name: 'Mouse', price: 20},
            { product_name: 'Keyboard', price: 35},
            { product_name: 'Gamepad', price: 48},
            { product_name: 'Chair', price: 100},
            { product_name: 'Shoes', price: 250},
        ];

        fetch(this._getLink('catalogData.json'))
            .then(result => result.json())
            .then(data => this.goods.push(...data))
            .then(products => this.render());
        
        console.log(this.goods);
    }
    
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    
    getTotalGoodsPrice() {
        let totalPrice = 0;
        for (let good in this.goods) {
            totalPrice += this.goods[good].price;
        }
        console.log(totalPrice);
    }
}

// Класс корзины, содержит конструктор, который объявляет список товаров внутри
// Метод makeOrder - привязан к кнопке - оформить заказ. Делает заказ.
class Cart {
    constructor() {
        this.productsList = [];
    }
    
    _getTotalProductsList = () => {
        return this.productsList;
    }

//    makeOrder () {
//    }
}

// Класс элемента товара корзины
// similarProducts - показывает сопутствующие товары к данному товару. Допустим, коврик для мышки.
// Метод delElement - удаляет объект из корзины.
// Метод changeQuantity - меняет количество элементов в заказе (потребуется для подсчета общей суммы)
class CartElement {
    similarProducts() {  
    }
    delElement() {  
    }
    changeQuantity() {  
    }
}

const list = new GoodsList();
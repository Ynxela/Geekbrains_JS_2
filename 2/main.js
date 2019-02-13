//const products = [
//    {title: 'Notebook', price: 2000},
//    {title: 'Mouse', price: 20},
//    {title: 'Keyboard', price: 35},
//    {title: 'Gamepad', price: 48},
//    {title: 'Chair', price: 100},
//	{title: 'Table', price: 200},
//];
//
//const renderProduct = (title="Без названия", price="Бесплатно") => `<div class="product-item"><h3>${title}</h3><p>${price}</p></div>`
//
//const renderPage = list => {
//    const productList = list.map(item => renderProduct(item.title, item.price));
////	На этом уровне получил массив. Его нужно распаковать без запятых.
////	console.log(productList);
//    document.querySelector('.products').innerHTML = productList.join('');
//};


class GoodsItem {
    constructor (title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    
    fetchGoods() {
        this.goods = [
            { title: 'Notebook', price: 2000},
            { title: 'Mouse', price: 20},
            { title: 'Keyboard', price: 35},
            { title: 'Gamepad', price: 48},
            { title: 'Chair', price: 100},
            { title: 'Shoes', price: 250},
        ];
    }
    
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    
    getTotalGoodsPrice() {
        const totalPrice = 0;
        for (let good in this.goods) {
            totalPrice += good.price;
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
    makeOrder () {
    }
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
list.fetchGoods();
list.render();
list.getTotalGoodsPrice();
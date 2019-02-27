let API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

const app = new Vue({
    el: '#main-container',
    data: {
        catalogUrl: `/catalogData.json`,
        cartUrl: `/getBasket.json`,
        imgCart: 'https://placehold.it/50x100',
        imgCatalog: 'https://placehold.it/200x150',
        cartItems: [],
        filtered: [],
        products: [],
        showCart: false,
        userSearch: ''
    },
    methods: {
      getJson: function(url){
          return fetch(url)
            .then(result => result.json())
            .catch(error => console.log(error));
      },
       addProduct: function(item){
           this.getJson(`${API}/addToBasket.json`)
            .then(data => {
               if(data.result === 1){
                   let find = this.cartItems.find(el => el.id_product === item.id_product);
                   if(find){
                       find.quantity++;
                   } else {
                       let prod = Object.assign({quantity:1}, item);
                       this.cartItems.push(prod)
                   }
               }
            })
       },
        remove(item){
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        if(item.quantity>1){
                            item.quantity--;
                        } else{
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter(){
          let regexp = new RegExp(this.userSearch, 'i');
          this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item)
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item)
                }
            });

    }
});



//class GoodsItem {
//    constructor (product_name, price) {
//        this.product_name = product_name;
//        this.price = price;
//    }
//    render() {
//        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="buy-btn" type="button">Купить</button></div>`;
//    }
//}
//
//class GoodsList {
//    constructor() {
//        this.goods = [];
//        this._fetchGoods();
//    }
//    
//    _getLink = (link) => {
//        return `${API}${link}`;
//    }
//
//    _fetchGoods() {
//        this.goods = [
//            { product_name: 'Notebook', price: 2000},
//            { product_name: 'Mouse', price: 20},
//            { product_name: 'Keyboard', price: 35},
//            { product_name: 'Gamepad', price: 48},
//            { product_name: 'Chair', price: 100},
//            { product_name: 'Shoes', price: 250},
//        ];
//
//        fetch(this._getLink('catalogData.json'))
//            .then(result => result.json())
//            .then(data => this.goods.push(...data))
//            .then(products => this.render());
//        
//        console.log(this.goods);
//    }
//    
//    render() {
//        let listHtml = '';
//        this.goods.forEach(good => {
//            const goodItem = new GoodsItem(good.product_name, good.price);
//            listHtml += goodItem.render();
//        });
//        document.querySelector('.goods-list').innerHTML = listHtml;
//    }
//    
//    getTotalGoodsPrice() {
//        let totalPrice = 0;
//        for (let good in this.goods) {
//            totalPrice += this.goods[good].price;
//        }
//        console.log(totalPrice);
//    }
//}
//
//// Класс корзины, содержит конструктор, который объявляет список товаров внутри
//// Метод makeOrder - привязан к кнопке - оформить заказ. Делает заказ.
//class Cart {
//    constructor() {
//        this.productsList = [];
//    }
//    
//    _getTotalProductsList = () => {
//        return this.productsList;
//    }
//
////    makeOrder () {
////    }
//}
//
//// Класс элемента товара корзины
//// similarProducts - показывает сопутствующие товары к данному товару. Допустим, коврик для мышки.
//// Метод delElement - удаляет объект из корзины.
//// Метод changeQuantity - меняет количество элементов в заказе (потребуется для подсчета общей суммы)
//class CartElement {
//    similarProducts() {  
//    }
//    delElement() {  
//    }
//    changeQuantity() {  
//    }
//}
//
//const list = new GoodsList();
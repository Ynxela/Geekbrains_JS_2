Vue.component('products', {
    data: function () {
        return {
            filtered: [],
            products: [],
            imgCatalog: 'https://placehold.it/200x150'
        }
    },
    created() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item)
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
    <div class="products">
            <product v-for="item of filtered" 
            :product="item" :img="imgCatalog" :key="item.product_name"
            @add-product="$parent.$refs.cart.addProduct">
           </product>
        </div>
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="goods-item">
                <img :src="img" alt="Some img">
                    <h3 class="item-text">{{ product.product_name }}</h3>
                    <p class="item-text">$ {{ product.price }}</p>
                    <button class="buy-btn"
                    @click="$emit('add-product', product)">Купить</button>
            </div>
    `
})



// Vue.component('products', {
//     props: ['products', 'img'],
//     template: `
//     <div class="products">
//             <product v-for="item of products"
//             :product="item" :img="img" :key="item.product_name">
//            </product>
//         </div>
//     `
// });
//
// Vue.component('product', {
//     props: ['product', 'img'],
//     template: `
//     <div class="product-item">
//                 <img :src="img" alt="Some img">
//                 <div class="desc">
//                     <h3>{{ product.product_name }}</h3>
//                     <p>$ {{ product.price }}</p>
//                     <button class="buy-btn"
//                     @click="$parent.$emit('add-product', product)">Купить</button>
//                 </div>
//             </div>
//     `
// })
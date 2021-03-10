import VueRouter from 'vue-router';
import Vue from 'vue';
import Product from '../views/Product.vue';
import ProductList from '../views/ProductList.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : ProductList,
        },
        {
            path : '/product/:id',
            name : 'product',
            component : Product,
        },
        {
            path : '/shopping-cart',
            name : 'shoppingCart',
            component : ShoppingCart,
        }
    ]
});


export default router;
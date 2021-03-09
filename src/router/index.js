import  { createRouter } from 'vue-router';
import Product from '../views/Product.vue';
import ProductList from '../views/ProductList.vue';

const routes = [
    {
        path : '/',
        name : 'ProductList',
        component : ProductList,
    },
    {
        path : '/product',
        name : 'Product',
        component : Product,
    }
]

const router = createRouter({
    routes,
})

export default router;
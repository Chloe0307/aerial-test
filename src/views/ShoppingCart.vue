<template>
    <div class="shoppingCart" >
        <h1>Mon panier</h1>
        <div class="shopping-cart">
            <h3>Tableau récapitulatif de mes achats</h3>
            <table>
                <thead>
                    <tr>
                        <th>Mes achats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ $route.params.id }}</td>
                        <td>{{data.title}}</td>
                        <td>{{data.price}}</td>
                    </tr>
                    <tr>Total : </tr>
                </tbody>
            </table>
            <button>
                Payer
            </button>
        </div>
    </div>
</template>

<script>

// import datas from '../datas/datas.json';

export default {
    name : 'shoppingCart',
    // created(){
    //     this.data = datas.find((e) => e.id === parseInt(this.$route.params.id))
    // },
    data(){
        return {
            cart : [],
            data : {}
        }
    },
}
</script>
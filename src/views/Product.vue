<template>
  <div class="product">
    <h1>Page produit : {{ $route.params.id }}</h1>
      <div class="product" >
        <h3>{{data.title}}</h3>
        <p><strong>Description du produit :</strong> 
          {{data.long_description}}
        </p>
        <img alt="image du produit" class="" :src="data.image1"/>
        <img alt="image du produit" class="" :src="data.image2" />
        <img alt="image du produit" class="" :src="data.image3" />
        <p>Prix : {{data.price}}</p>
        <button v-if="!cart.includes(data.id)" @click="addToCart(data)">
          Ajouter au panier
        </button>
        <div v-else>
          Ajouté au panier !
        </div>
  </div>
  </div>
</template>

<script>
import datas from '../datas/datas.json';

export default {
  name: 'Product',
  created(){
    // console.log(this.$route.params.id);
    this.data = datas.find((e) => e.id === parseInt(this.$route.params.id))
  },
  data(){
    return{
      cart: [],
      data: {},
    }
  },
  methods: {
    addToCart(product){
      this.cart.push(product.id)
      this.$router.push({name: 'shoppingCart'})
    }
  },
  props : [  ],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

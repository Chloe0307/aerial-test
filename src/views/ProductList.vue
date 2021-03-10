<template>
  <div class="product-list">
    <h2>Liste des produits</h2>
    <ul>
      <div class="product" v-for="data in datas" v-bind:key="data" >
        <h3>{{data.title}}</h3>
        <p><strong>Description du produit :</strong> {{data.description}}</p>
        <img alt="image du produit" class="" :src="data.image1"/>
        <p>Prix : {{data.price}}</p>
          <router-link :to="{ name: 'product', params: { id: data.id }}">En savoir + </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
import data from '../datas/datas.json';

// import Product from '../views/Product';
// {{ $route.params.id }}

export default {
  name : 'ProductDetail',
  data(){
    return{
      datas : data,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product {
    width : 700px;
    border: 1px solid black;
    border-radius : 10px;
    padding: 4px;
    padding-bottom: 40px;
    margin: auto;
    margin-bottom : 2rem;
  }
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

<template>
  <div class="product">
    <h1>Page produit</h1>
      <div class="product" v-for="data in datas" v-bind:key="data" >
        <h3>{{data.title}}</h3>
        <p><strong>Description du produit :</strong> {{data.long_description}}</p>
        <img alt="image du produit" class=""/>
        <img alt="image du produit" class=""/>
        <img alt="image du produit" class=""/>
        <p>Prix : {{data.price}}</p>
        <button>Ajouter au panier</button>
      </div>
  </div>
</template>

<script>
import data from '../datas/datas.json';

export default {
  name: 'Product',
  data(){
    return{
      datas : data,
    }
  },
  // props: {
  //   title: String
  // }
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

<template>
  <div>
    <router-link :to="{ name: 'KreirajUpitNovo' }" v-if="!user"><button class="add">Novi upit</button></router-link>
  </div>
    <div class="main">
    <div class="card" v-for="vozilo in vozilo" :key="vozilo.ID_vozila">
      <img :src="vozilo.Slika" alt="Auto1" style="width:200px">
        <h1>{{ vozilo.Marka_model_vozila }}</h1>
        <p>{{ vozilo.Vrsta_motora }}</p>
        <p>{{ vozilo.Snaga_motora }}</p>
        <p>{{ vozilo.Radni_obujam }}</p>
        <p>{{ vozilo.Godina_proizvodnje }}</p>
        <p>{{ vozilo.Broj_prijedenih_kilometara }}</p>
        <p class="price">{{ vozilo.Cijena_vozila }}</p>
        <div class="buttoni">
          <router-link v-if="!user" :to="{ name: 'KreirajUpit', params: { id: vozilo.ID_vozila, naziv: vozilo.Marka_model_vozila } }"
              class="edit">POŠALJI UPIT</router-link>
            <router-link v-if="user" :to="{ name: 'IzmjeniVozilo', params: { id: vozilo.ID_vozila } }" class="button is-info is-small">IZMJENI</router-link>
            <a class="edit" @click="deleteVozilo(vozilo.ID_vozila)" v-if="user">OBRIŠI</a>
        </div>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import firebase from 'firebase'
 
export default {
  name: "CardVozila",
  data() {
    return {
      vozilo: [],
    };
  },
 
  created() {
    this.getVozilo();
    var vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user
      } else {
        vm.user = null
      }
    })
}, 
  methods: {
    // Get All Products
    async getVozilo() {
      try {
        const response = await axios.get("http://localhost:8081/vozilo");
        this.vozilo = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteVozilo(id) {
      try {
        await axios.delete(`http://localhost:8081/vozilo/${id}`);
        this.getVozilo();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
    .main{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: arial;
  justify-content: stretch;
}

.price {
  color: grey;
  font-size: 22px;
  font-style: bold;
}

.card button {
  cursor: pointer;
  padding: 5px 5px 5px 5px;
  margin-bottom: 5px;
  font-weight: bold;
}

.card button:hover {
  opacity: 0.7;
}
</style>
<template>
  <div class="naslov-button">
    <router-link :to="{ name: 'KreirajUpitNovo' }" v-if="!user"><button class="add">POŠALJI UPIT ZA NOVO VOZILO</button></router-link>
  </div>
    <div class="main">
    <div class="cards" v-for="vozilo in vozilo" :key="vozilo.ID_vozila">
      <img :src="vozilo.Slika" alt="Auto1" style="width:350px">
        <h1>{{ vozilo.Marka_model_vozila }}</h1>
        <p>{{ vozilo.Vrsta_motora }}</p>
        <p>{{ vozilo.Snaga_motora }}</p>
        <p>{{ vozilo.Radni_obujam }}</p>
        <p>{{ vozilo.Godina_proizvodnje }}</p>
        <p>{{ vozilo.Broj_prijedenih_kilometara }}</p>
        <p class="price">{{ vozilo.Cijena_vozila }}</p>
        <div class="buttoni">
          <router-link v-if="!user" :to="{ name: 'KreirajUpit', params: { id: vozilo.ID_vozila, naziv: vozilo.Marka_model_vozila } }"
              class="upitvozilo">POŠALJI UPIT</router-link>
            <router-link v-if="user" :to="{ name: 'IzmjeniVozilo', params: { id: vozilo.ID_vozila } }" class="upitvozilo">IZMJENI</router-link>
            <a class="upitvozilo" @click="deleteVozilo(vozilo.ID_vozila)" v-if="user">OBRIŠI</a>
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
  flex-wrap:wrap;
  }
  .cards {
  background-color: rgba(226, 226, 226, 0.274);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 600px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
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

.upitvozilo{
  background-color: #012855;
  color: white;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
}
</style>
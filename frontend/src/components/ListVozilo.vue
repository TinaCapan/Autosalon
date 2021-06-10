<template>
  <div>
    <router-link :to="{ name: 'KreirajVozilo' }">
    <button class="add">Novo vozilo</button>
    </router-link
    >
    <table class="tablica">
      <thead>
        <tr>
          <th>Model i marka vozila</th>
          <th>Vrsta motora</th>
          <th>Snaga motora</th>
          <th>Radni obujam</th>
          <th>Godina proizvodnje</th>
          <th>Broj prijedenih kilometara</th>
          <th>Cijena vozila</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vozilo in vozilo" :key="vozilo.ID_vozila">
          <td>{{ vozilo.Marka_model_vozila }}</td>
          <td>{{ vozilo.Vrsta_motora }}</td>
          <td>{{ vozilo.Snaga_motora }}</td>
          <td>{{ vozilo.Radni_obujam }}</td>
          <td>{{ vozilo.Godina_proizvodnje }}</td>
          <td>{{ vozilo.Broj_prijedenih_kilometara }}</td>
          <td>{{ vozilo.Cijena_vozila }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'KreirajProbnuVoznju', params: { id: vozilo.ID_vozila, naziv: vozilo.Marka_model_vozila } }"
              class="button is-info is-small"
              >Probna vožnja</router-link
            >
            <router-link
              :to="{ name: 'IzmjeniVozilo', params: { id: vozilo.ID_vozila } }"
              class="button is-info is-small"
              >Izmjeni</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteVozilo(vozilo.ID_vozila)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ListVozilo",
  data() {
    return {
      vozilo: [],
    };
  },
 
  created() {
    this.getVozilo();
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
  .tablica {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #99d1d32c;
  color: rgb(0, 0, 0);
}

.tablica td, .tablica th {
  border: 1px solid rgb(0, 0, 0);
  padding: 8px;
}

.tablica tr:nth-child(even){background-color: rgb(255, 255, 255);}

.tablica tr:hover {background-color: #eca4a93a;}

.tablica th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #183031;
  color: white;
}

.add {
  transition-duration: 0.4s;
  font-size: 8px;
  padding: 14px 40px;
  border-radius: 4px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  margin-top: 10px;
  }
</style>
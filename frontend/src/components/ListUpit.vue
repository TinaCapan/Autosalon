<template>
  <div class="postojece">
    <router-link :to="{ name: 'KreirajUpit' }">
    <button class="add">Novi upit</button>
  </router-link
    >
    <div>Upiti za postojeća vozila</div>
    <table class="tablica">
      <thead>
        <tr>
          <th>ID_upita</th>
          <th>Marka model vozila</th>
          <th>Ime i prezime</th>
          <th>Kontakt</th>
          <th>OIB</th>
          <th class="has-text-centered">Mogućnosti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="upit in upit" :key="upit.ID_upita">
          <td>{{ upit.ID_upita }}</td>
          <td>{{ upit.Marka_model_vozila }}</td>
          <td>{{ upit.Ime_prezime }}</td>
          <td>{{ upit.Kontakt }}</td>
          <td>{{ upit.OIB }}</td>
          <td class="has-text-centered">
            <a
              class="button is-danger is-small"
              @click="deleteUpit(upit.ID_upita)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--novo vozilo-->
  <div class="novo">Upiti za nova vozila
    <router-link :to="{ name: 'KreirajUpit' }">
    <button class="add">Novi upit</button>
    </router-link>
    <table class="tablica">
      <thead>
        <tr>
          <th>ID_upita</th>
          <th>Novo vozilo</th>
          <th>Ime i prezime</th>
          <th>Kontakt</th>
          <th>OIB</th>
          <th class="has-text-centered">Mogućnosti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="upitnovo in upitnovo" :key="upitnovo.ID_upita">
          <td>{{ upitnovo.ID_upita }}</td>
          <td>{{ upitnovo.NovoVozilo }}</td>
          <td>{{ upitnovo.Ime_prezime }}</td>
          <td>{{ upitnovo.Kontakt }}</td>
          <td>{{ upitnovo.OIB }}</td>
          <td class="has-text-centered">
            <a
              class="button is-danger is-small"
              @click="deleteUpit(upitnovo.ID_upita)"
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
  name: "ListUpit",
  data() {
    return {
      upit: [],
      upitnovo: []
    };
  },
 
  created() {
    this.getUpit();
    this.getUpitNovo();
  },
 
  methods: {
    // Get All Products
    async getUpit() {
      try {
        const response = await axios.get("http://localhost:8081/upit");
        this.upit = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 // nova vozila
 async getUpitNovo() {
      try {
        const response = await axios.get("http://localhost:8081/upitnovo");
        this.upitnovo = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    // Delete Product
    async deleteUpit(id) {
      try {
        await axios.delete(`http://localhost:8081/upit/${id}`);
        this.getUpit();
        this.getUpitNovo();
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
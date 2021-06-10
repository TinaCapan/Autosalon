<template>
  <div>
    <router-link :to="{ name: 'KreirajUgovor' }">
      <button class="add">Novi ugovor</button>
    </router-link>
    <table class="tablica">
      <thead>
        <tr>
          <th>ID_ugovora</th>
          <th>Ime klijenta</th>
          <th>Vozilo</th>
          <th>Datum_ugovora</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ugovor in ugovor" :key="ugovor.ID_ugovora">
          <td>{{ ugovor.ID_ugovora }}</td>
          <td>{{ ugovor.Ime_prezime_klijenta }}</td>
          <td>{{ ugovor.Marka_model_vozila }}</td>
          <td>{{ ugovor.Datum_ugovora }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'IzmjeniUgovor', params: { id: ugovor.ID_ugovora } }"
              class="edit"
              >Izmjeni</router-link
            >
            <a
              class="edit"
              @click="deleteUgovor(ugovor.ID_ugovora)"
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
  name: "ListUgovor",
  data() {
    return {
      ugovor: [],
    };
  },
 
  created() {
    this.getUgovor();
  },
 
  methods: {
    // Get All Products
    async getUgovor() {
      try {
        const response = await axios.get("http://localhost:8081/ugovor");
        this.ugovor = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteUgovor(id) {
      try {
        await axios.delete(`http://localhost:8081/ugovor/${id}`);
        this.getUgovor();
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
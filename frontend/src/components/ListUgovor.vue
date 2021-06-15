<template>
  <div class="row">
  <div class="naslov-button">
    <div class="naslov">POPIS UGOVORA</div>
    <router-link :to="{ name: 'KreirajUgovor' }">
      <button class="add">KREIRAJ NOVI UGOVOR</button>
    </router-link></div>
    <div class="tdiv">
    <table class="tablica">
      <thead>
        <tr>
          <th>ID_ugovora</th>
          <th>Ime klijenta</th>
          <th>Vozilo</th>
          <th>Datum_ugovora</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ugovor in ugovor" :key="ugovor.ID_ugovora">
          <td>{{ ugovor.ID_ugovora }}</td>
          <td>{{ ugovor.Ime_prezime_klijenta }}</td>
          <td>{{ ugovor.Marka_model_vozila }}</td>
          <td>{{ formatDate(ugovor.Datum_ugovora) }}</td>
        </tr>
      </tbody>
    </table>
    </div>
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

    formatDate(d) {
    var date = new Date(d);
    var datestring = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    date.getFullYear();
    return datestring;
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
 
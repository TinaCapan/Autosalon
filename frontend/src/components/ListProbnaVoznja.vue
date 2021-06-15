<template>
  <div class="row">
    <div class="naslov-button">
      <div class="naslov">POPIS PROBNIH VOŽNJI</div></div>
      <div class="tdiv">
    <table class="tablica">
      <thead>
        <tr>
          <th>Termin</th>
          <th>Klijent</th>
          <th>Vozilo</th>
          <th>Mogućnosti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="probnaVoznja in probnaVoznja" :key="probnaVoznja.ID_voznje">
          <td>{{ formatDate(probnaVoznja.Termin) }}</td>
          <td>{{ probnaVoznja.Ime_prezime_klijenta }}</td>
          <td>{{ probnaVoznja.Marka_model_vozila }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'IzmjeniProbnuVoznju', params: { id: probnaVoznja.ID_voznje } }"
              class="edit" >IZMJENI</router-link>
            <a class="edit"
              @click="deleteProbnaVoznja(probnaVoznja.ID_voznje)">OBRIŠI</a>
          </td>
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
  name: "ListProbnaVoznja",
  data() {
    return {
      probnaVoznja: [],
    };
  },
 
  created() {
    this.getProbnaVoznja();
  },
 
  methods: {
    // Get All Products
    async getProbnaVoznja() {
      try {
        const response = await axios.get("http://localhost:8081/probnaVoznja");
        this.probnaVoznja = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    formatDate(d) {
    var date = new Date(d);
    var datestring = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    return datestring;
    },

    // Delete Product
    async deleteProbnaVoznja(id) {
      try {
        await axios.delete(`http://localhost:8081/probnaVoznja/${id}`);
        this.getProbnaVoznja();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

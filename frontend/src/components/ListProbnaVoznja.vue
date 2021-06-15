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
        </tr>
      </thead>
      <tbody>
        <tr v-for="probnaVoznje in probnaVoznja" :key="probnaVoznje.ID_voznje">
          <td>{{ formatDate(probnaVoznje.Termin) }}</td>
          <td>{{ probnaVoznje.Ime_prezime_klijenta }}</td>
          <td>{{ probnaVoznje.Marka_model_vozila }}</td>
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

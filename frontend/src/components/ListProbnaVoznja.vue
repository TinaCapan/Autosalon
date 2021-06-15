<template>
  <div>
<!--    <router-link :to="{ name: 'KreirajProbnuVoznju' }" class="button is-success mt-5"
      >Add New</router-link> -->
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
              class="button is-info is-small"
              >Izmjeni</router-link
            >
            <a class="delete"
              @click="deleteProbnaVoznja(probnaVoznja.ID_voznje)"
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
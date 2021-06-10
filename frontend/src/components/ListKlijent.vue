<template>
  <div>
    <router-link :to="{ name: 'KreirajKlijenta' }">
    <button class="add">Novi klijent</button>
    </router-link>
    <table class="tablica">
      <thead>
        <tr>
          <th>Ime i prezime</th>
          <th>OIB klijenta</th>
          <th>Kontakt</th>
          <th>Mail</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="klijent in klijent" :key="klijent.ID_klijenta">
          <td>{{ klijent.Ime_prezime_klijenta }}</td>
          <td>{{ klijent.OIB_klijenta }}</td>
          <td>{{ klijent.Kontakt }}</td>
          <td>{{ klijent.Mail }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'IzmjeniKlijenta', params: { id: klijent.ID_klijenta } }"
              class="button is-info is-small"
              >Izmjeni</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteKlijent(klijent.ID_klijenta)"
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
  name: "ListKlijent",
  data() {
    return {
      klijent: [],
    };
  },
 
  created() {
    this.getKlijent();
  },
 
  methods: {
    // Get All Products
    async getKlijent() {
      try {
        const response = await axios.get("http://localhost:8081/klijent");
        this.klijent = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteKlijent(id) {
      try {
        await axios.delete(`http://localhost:8081/klijent/${id}`);
        this.getKlijent();
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
  max-width: 100%;
  background-color: #99d1d32c;
  color: rgb(0, 0, 0);
  margin: 30px 50px 30px 50px;
}

.tablica td, .tablica th {
  border: 1px solid rgb(0, 0, 0);
  padding: 8px;
}

.tablica tr:nth-child(even){background-color: rgb(255, 255, 255);}

.tablica tr:hover {background-color: #dbe5eb;}

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
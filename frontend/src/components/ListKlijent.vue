<template>
  <div class="row">
    <div class="naslov-button">
    <div class="naslov">POPIS KLIJENATA</div>
    <router-link :to="{ name: 'KreirajKlijenta' }">
    <button class="add">UNESI NOVOG KLIJENTA</button></router-link></div>
    <div class="tdiv">
    <table class="tablica">
      <thead>
        <tr>
          <th>Ime i prezime</th>
          <th>OIB klijenta</th>
          <th>Kontakt</th>
          <th>Mail</th>
          <th class="has-text-centered">OPCIJE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="klijent in klijent" :key="klijent.ID_klijenta">
          <td>{{ klijent.Ime_prezime_klijenta }}</td>
          <td>{{ klijent.OIB_klijenta }}</td>
          <td>{{ klijent.Kontakt }}</td>
          <td>{{ klijent.Mail }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'IzmjeniKlijenta', params: { id: klijent.ID_klijenta } }" class="edit">Izmjeni</router-link>
            <a class="edit" @click="deleteKlijent(klijent.ID_klijenta)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
 
<script>
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
    async getKlijent() {
      try {
        const response = await axios.get("http://localhost:8081/klijent");
        this.klijent = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
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

<template>
  <div class="row">
      <div class="naslov">POPIS UPITA ZA VOZILA IZ PONUDE</div>
      <div class="tdiv">
      <table class="tablica">
      <thead>
        <tr>
          <th>ID_upita</th>
          <th>Marka model vozila</th>
          <th>Ime i prezime</th>
          <th>Kontakt</th>
          <th>OIB</th>
          <th class="has-text-centered">OPCIJE</th>
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
              >OBRIŠI</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <!--novo vozilo-->
  <div class="row">
    <div class="naslov">POPIS UPITA ZA NOVA VOZILA</div>
    <div class="tdiv">
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
              >OBRIŠI</a>
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
 
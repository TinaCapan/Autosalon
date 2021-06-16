<template>
  <div class="card">
    <div class="field">
      <label class="label">ID_vozila</label>
        <input
          class="input"
          type="text"
          placeholder="ID_vozila"
          v-model="ID_vozila"
        />
    </div>
 
    <div class="field">
      <label class="label">Novo vozilo</label>
        <input
          class="input"
          type="text"
          placeholder="NovoVozilo"
          v-model="NovoVozilo"
        />
    </div>

    <div class="field">
        <label class="label">Ime_prezime</label>
          <input
            class="input"
            type="text"
            placeholder="ImePrezime"
            v-model="Ime_prezime"
          />
      </div>

      <div class="field">
        <label class="label">Kontakt</label>
          <input
            class="input"
            type="text"
            placeholder="Kontakt"
            v-model="Kontakt"
          />
      </div>

      <div class="field">
        <label class="label">OIB</label>
          <input
            class="input"
            type="text"
            placeholder="OIB"
            v-model="OIB"
          />
      </div>
        <button class="edit" @click="updateUpit">Spremi</button>
    </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditUpit",
  data() {
    return {
      ID_vozila: "",
      NovoVozilo: "",
      Ime_prezime: "",
      Kontakt: "",
      OIB: "",
      }
  },

  created: function () {
    this.getUpitById();
  },
  methods: {
    // Get Product By Id
    async getUpitById() {
      try {
        const response = await axios.get(
          `http://localhost:8081/upit/${this.$route.params.id}`
        );
        this.ID_vozila = response.data.ID_vozila;
        this.NovoVozilo = response.data.NovoVozilo;
        this.Ime_prezime = response.data.Ime_prezime;
        this.Kontakt = response.data.Kontakt;
        this.OIB = response.data.OIB;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateUpit() {
      try {
        await axios.put(
          `http://localhost:8081/upit/${this.$route.params.id}`,
          {
            ID_vozila:this.ID_vozila,
            NovoVozilo:this.NovoVozilo,
            Ime_prezime: this.Ime_prezime,
            Kontakt: this.Kontakt,
            OIB: this.OIB
          }
        );
        this.ID_vozila = "";
        this.NovoVozilo = "";
        this.Ime_prezime= "";
        this.Kontakt = "";
        this.OIB= "";
        this.$router.push("/ListaUgovora");
        } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
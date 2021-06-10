<template>
  <div>
    <div class="field">
      <label class="label">Termin</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Termin"
          v-model="Termin"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">ID_vozila</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="ID_vozila"
          v-model="ID_vozila"
        />
      </div>
    </div>
      
    <div class="control">
        <button class="button is-success" @click="updateProbnaVoznja">Spremi</button>
    </div>
    </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditProbnaVoznja",
  data() {
    return {
      Termin: "",
      ID_klijenta: "",
      ID_vozila: ""
      }
  },

  created: function () {
    this.getProbnaVoznjaById();
  },
  methods: {
    // Get Product By Id
    async getProbnaVoznjaById() {
      try {
        const response = await axios.get(
          `http://localhost:8081/probnaVoznja/${this.$route.params.id}`
        );
        this.Termin = response.data.Termin;
        this.ID_klijenta = response.data.ID_klijenta;
        this.ID_vozila = response.data.ID_vozila;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateProbnaVoznja() {
      try {
        await axios.put(
          `http://localhost:8081/probnaVoznja/${this.$route.params.id}`,
          {
            Termin:this.Termin,
            ID_klijenta:this.ID_klijenta,
            ID_vozila: this.ID_vozila
          }
        );
        this.Termin = "";
        this.ID_klijenta = "";
        this.ID_vozila= "";
        this.$router.push("/");
        } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
<template>
    <div class="card">
        <div class="field">
          <label class="label">Marka i model vozila</label>
            <input
              class="input"
              type="text"
              placeholder="markaModel"
              v-model="Marka_model_vozila"
            />
        </div>
     
        <div class="field">
          <label class="label">Vrsta motora</label>
            <input
              class="input"
              type="text"
              placeholder="VrstaMotora"
              v-model="Vrsta_motora"
            />
        </div>
    
        <div class="field">
            <label class="label">Snaga motora</label>
              <input
                class="input"
                type="text"
                placeholder="SnagaMotora"
                v-model="Snaga_motora"
              />
          </div>
    
          <div class="field">
            <label class="label">Radni obujam</label>
              <input
                class="input"
                type="text"
                placeholder="RadniObujam"
                v-model="Radni_obujam"
              />
          </div>
    
          <div class="field">
            <label class="label">Godina proizvodnje</label>
              <input
                class="input"
                type="text"
                placeholder="GodinaProizvodnje"
                v-model="Godina_proizvodnje"
              />
          </div>
    
          <div class="field">
            <label class="label">Broj prijedenih kilometara</label>
              <input
                class="input"
                type="text"
                placeholder="BrojPrijedenihKilometara"
                v-model="Broj_prijedenih_kilometara"
              />
          </div>
    
          <div class="field">
            <label class="label">Cijena vozila</label>
              <input
                class="input"
                type="text"
                placeholder="CijenaVozila"
                v-model="Cijena_vozila"
              />
          </div>
     
          <button class="btnunesi" @click="updateVozilo">Spremi</button>
      </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditVozilo",
  data() {
    return {
      Marka_model_vozila: "",
      Vrsta_motora: "",
      Snaga_motora: "",
      Radni_obujam: "",
      Godina_proizvodnje: "",
      Broj_prijedenih_kilometara: "",
      Cijena_vozila: ""
    };
  },
  created: function () {
    this.getVoziloById();
  },
  methods: {
    // Get Product By Id
    async getVoziloById() {
      try {
        const response = await axios.get(
          `http://localhost:8081/vozilo/${this.$route.params.id}`
        );
        this.Marka_model_vozila = response.data.Marka_model_vozila;
        this.Vrsta_motora = response.data.Vrsta_motora;
        this.Snaga_motora = response.data.Snaga_motora;
        this.Radni_obujam = response.data.Radni_obujam;
        this.Godina_proizvodnje = response.data.Godina_proizvodnje;
        this.Broj_prijedenih_kilometara = response.data.Broj_prijedenih_kilometara;
        this.Cijena_vozila = response.data.Cijena_vozila;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateVozilo() {
      try {
        await axios.put(
          `http://localhost:8081/vozilo/${this.$route.params.id}`,
          {
            Marka_model_vozila:this.Marka_model_vozila,
            Vrsta_motora:this.Vrsta_motora,
            Snaga_motora: this.Snaga_motora,
            Radni_obujam: this.Radni_obujam,
            Godina_proizvodnje: this.Godina_proizvodnje,
            Broj_prijedenih_kilometara: this.Broj_prijedenih_kilometara,
            Cijena_vozila: this.Cijena_vozila
          }
        );
        this.Marka_model_vozila = "";
        this.Vrsta_motora = "";
        this.Snaga_motora = "";
        this.Radni_obujam = "";
        this.Godina_proizvodnje = "";
        this.Broj_prijedenih_kilometara = "";
        this.Cijena_vozila = "";
        this.$router.push("/ListaVozila");
        } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

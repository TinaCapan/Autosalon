<template>
  <div>
    <div class="field">
      <label class="label">Marka i model vozila</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Marka i model vozila"
          v-model="Marka_model_vozila"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Vrsta motora</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Vrsta motora"
          v-model="Vrsta_motora"
        />
      </div>
    </div>

    <div class="field">
        <label class="label">Snaga motora</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Snaga motora"
            v-model="Snaga_motora"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Radni obujam</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Radni obujam"
            v-model="Radni_obujam"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Godina proizvodnje</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Godina proizvodnje"
            v-model="Godina_proizvodnje"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Broj prijedenih kilometara</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Broj prijedenih kilometara"
            v-model="Broj_prijedenih_kilometara"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Cijena vozila</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Cijena vozila"
            v-model="Cijena_vozila"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Slika vozila</label>
        <div class="control">
          <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
        </div>
      </div>
      
    <div class="control">
      <button class="unesi" @click="saveVozilo">Spremi</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddVozilo",
  data() {
    return {
      Marka_model_vozila: "",
      Vrsta_motora: "",
      Snaga_motora: "",
      Radni_obujam: "",
      Godina_proizvodnje: "",
      Broj_prijedenih_kilometara: "",
      Cijena_vozila: "",
      Slika:""
    };
  },
  methods: {
    async saveVozilo() {
      try {
        await axios.post("http://localhost:8081/vozilo", {
        Marka_model_vozila:this.Marka_model_vozila,
        Vrsta_motora:this.Vrsta_motora,
        Snaga_motora: this.Snaga_motora,
        Radni_obujam: this.Radni_obujam,
        Godina_proizvodnje: this.Godina_proizvodnje,
        Broj_prijedenih_kilometara: this.Broj_prijedenih_kilometara,
        Cijena_vozila: this.Cijena_vozila,
        Slika: this.Slika
        });
        this.Marka_model_vozila = "";
        this.Vrsta_motora = "";
        this.Snaga_motora = "";
        this.Radni_obujam = "";
        this.Godina_proizvodnje = "";
        this.Broj_prijedenih_kilometara = "";
        this.Cijena_vozila = "";
        this.Slika="";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #dbe5eb;
    border-radius: 4px;
  }
  input[type=text]:focus {
    background-color: #dbe5eb;
    opacity: 30%;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #183031;
    border-radius: 4px;
    background-color: #dbe5eb;
    opacity:40%;
    resize: none;
  }
  .unesi {
    transition-duration: 0.4s;
    font-size: 14px;
    padding: 14px 40px;
    border-radius: 4px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    margin-top: 10px;
    }
  
  .unesi:hover {
    background-color: #183031; /* Green */
    color: #dbe5eb;
  }
  </style>
  
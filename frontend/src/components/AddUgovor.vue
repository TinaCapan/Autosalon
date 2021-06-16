<template>
  <div class="card">
    <div class="field">
      <label class="label">Klijent</label>
        <select class="odabir" v-model="ID_klijenta">
          <option v-for="klijent in klijent" v-bind:key="klijent.ID_klijenta" v-bind:value="klijent.ID_klijenta">
            {{ klijent.Ime_prezime_klijenta }}
          </option>
        </select>
    </div>
 
    <div class="field">
      <label class="label">Vozilo</label>
      <select class="odabir" v-model="ID_vozila">
        <option v-for="vozilo in vozilo" v-bind:key="vozilo.ID_vozila" v-bind:value="vozilo.ID_vozila">
          {{vozilo.ID_vozila + ' - ' + vozilo.Marka_model_vozila + ' - ' + vozilo.Godina_proizvodnje }}
        </option>
      </select>
      </div>

    <div class="field">
        <span>Datum: {{ Datum_ugovora }}</span>
      </div>

      <button class="btnunesi" @click="saveUgovor">Spremi</button>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddUgovor",
  data() {
    return {
      ID_klijenta: "",
      ID_vozila: "",
      Datum_ugovora: new Date().toISOString().substring(0,10),
      klijent:[],
      vozilo:[]
    };
  },
  created(){
    this.getKlijent();
    this.getVozilo();
  },
  methods: {
    // Create New product
    async saveUgovor() {
      try {
        await axios.post("http://localhost:8081/ugovor", {
        ID_klijenta:this.ID_klijenta,
        ID_vozila:this.ID_vozila,
        Datum_ugovora: this.Datum_ugovora,
        });
        this.setProdano();
        this.ID_klijenta = "";
        this.ID_vozila = "";
        this.Datum_ugovora = "";
        this.$router.push("/ListaUgovora");
      } 
      catch (err) {
        console.log(err);
      }
    },
    async setProdano(){
      try{
        const id=this.ID_vozila;
        console.log(id);
        await axios.put(`http://localhost:8081/prodan/${id}`);
      } catch(err){
          console.log(err);
        }
      },
    async getKlijent() {
      try {
        const response = await axios.get("http://localhost:8081/klijent");
        this.klijent = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getVozilo() {
      try {
        const response = await axios.get("http://localhost:8081/vozilo");
        this.vozilo = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>
<style>
  .odabir {
    width: 40%;
    padding: 12px 20px;
    border: 2px solid #012855d7;
    
    border-radius: 4px;
    background-color: #f1f1f1;
    margin-top: 10px;
  }
  .odabir:hover {
    background-color: #f1f1f1;
    color: #00574b;
  }
  </style>
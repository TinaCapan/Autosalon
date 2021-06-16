<template>
  <div class="card">
  <h1>Kreiranje probne vožnje za {{this.$route.params.naziv}}</h1>
    <div class="fieldid">
      <label class="label">ID odabranog vozila</label>
        <input
          class="idvozila"
          type="text"
          placeholder="ID_vozila"
          v-model="ID_vozila"
          disabled
          />
    </div>
    <div class="field">
      <label class="label">Odaberite željeni termin probne vožnje</label>
        <input class="datum"
          id="date"
          min="2021-06-10"
          max="2999-06-30"
          type="date"
          placeholder="Datum"
          v-model="Datum"
        />
      <select class="odabir" v-model="vrijemeSelect">
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
      </select>
    </div>

    <div class="field">
        <label class="label">Klijent</label>
          <select class="odabir" v-model="ID_klijenta">
            <option v-for="klijent in klijent" v-bind:key="klijent.ID_klijenta" v-bind:value="klijent.ID_klijenta">
              {{ klijent.Ime_prezime_klijenta }}
            </option>
          </select>
      </div>
      <button class="btnunesi" @click="provjeriTermin">Spremi</button>
  </div>
</template>
 
<script>
import axios from "axios";
 
export default {
  name: "AddProbnaVoznja",
  data() {
    return {
      Termin: "",
      Datum:"",
      ID_klijenta: "",
      ID_vozila: this.$route.params.id,
      vrijemeSelect:"",
      klijent:[],
      res:"",
      today: new Date().toISOString().substring(0,19),
      vozilo:[]
    };
  },
  created(){
    this.getKlijent();
    this.getVozilo();
  },
  methods: {
    // Create New product
    async saveProbnaVoznja() {
      this.Termin=this.Datum + "T" + this.vrijemeSelect; 
      try {
        await axios.post("http://localhost:8081/probnaVoznja", {
        Termin:this.Termin,
        ID_klijenta:this.ID_klijenta,
        ID_vozila:this.ID_vozila
        });
        this.Termin = "";
        this.ID_klijenta = "";
        this.ID_vozila = "";
        
        this.$router.push("/ListaProbnaVoznja");
      } 
      catch (err) {
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
    //termin
    async provjeriTermin(){
      this.Termin=this.Datum + "T" + this.vrijemeSelect; 
      try{
        const res = await axios.get("http://localhost:8081/termin", {
          params:{
            Termin: this.Termin,
            id: this.ID_vozila,
          }
      });
      if(res!=null){
      this.res=res.data[0].ID_voznje;
      console.log(res.data[0]);
        alert("Probna vožnja je već zakazana za taj datum i vrijeme. Molimo izaberite drugi termin.");}
    } catch (err){
      this.saveProbnaVoznja();
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
   .idvozila{
    width: 40%;
    padding: 12px 20px;
    border: 2px solid #012855d7;
    border-radius: 4px;
    background-color: #f1f1f1;
    margin-top: 10px;
   }
   .fieldid{
     width: 40%;
   }
   .datum {
    width: 40%;
    padding: 12px 20px;
    border: 2px solid #012855d7;
    
    border-radius: 4px;
    background-color: #f1f1f1;
    margin-top: 10px;
  }
 </style>

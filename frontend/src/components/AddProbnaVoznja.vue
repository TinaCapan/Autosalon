<template>
  <h1>Upit za: {{this.$route.params.naziv}}</h1>
  <div>
    <div class="field">
      <label class="label">ID odabranog vozila</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="ID_vozila"
          v-model="ID_vozila"
          disabled
          />
      </div>
    </div>
    <div class="field">
      <label class="label">Odaberite željeni termin probne vožnje</label>
      <div class="control">
        <input
          id="date"
          min="2021-06-10"
          max="2021-06-30"
          type="date"
          placeholder="Datum"
          v-model="Datum"
        />
      </div>
      <select v-model="vrijemeSelect">
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
      </select>
      <span>{{vrijemeSelect}}</span>
    </div>

    <div class="field">
        <label class="label">Klijent</label>
        <div class="control">
          <select v-model="ID_klijenta">
            <option v-for="klijent in klijent" v-bind:key="klijent.ID_klijenta" v-bind:value="klijent.ID_klijenta">
              {{ klijent.Ime_prezime_klijenta }}
            </option>
          </select>
          <span>Selected: {{ ID_klijenta }} {{Termin}}</span>
        </div>
      </div>
 
    <div class="control">
      <button class="unesi" @click="provjeriTermin">Spremi</button>
    </div>
  </div>
</template>
 
<script>
// import axios
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
    };
  },
  created(){
    this.getKlijent()
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
        
        this.$router.push("/");
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
        alert("Probna vožnja je već zakazana za taj datum. Molimo izaberite drugo vrijeme.");}
    } catch (err){
      this.saveProbnaVoznja();
    }
  }
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
    background-color: #183031; 
    color: #dbe5eb;
  }
  </style>
  
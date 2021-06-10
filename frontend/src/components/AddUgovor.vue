<template>
  <div>
    <div class="field">
      <label class="label">Klijent</label>
      <div class="control">
        <select v-model="ID_klijenta">
          <option v-for="klijent in klijent" v-bind:key="klijent.ID_klijenta" v-bind:value="klijent.ID_klijenta">
            {{ klijent.Ime_prezime_klijenta }}
          </option>
        </select>
        <span>ID odabranog klijenta: {{ ID_klijenta }}</span>
      </div>
    </div>
 
    <div class="field">
      <label class="label">Vozilo</label>
      <select v-model="ID_vozila">
        <option v-for="vozilo in vozilo" v-bind:key="vozilo.ID_vozila" v-bind:value="vozilo.ID_vozila">
          {{vozilo.ID_vozila + ' - ' + vozilo.Marka_model_vozila + ' - ' + vozilo.Godina_proizvodnje }}
        </option>
      </select>
      <span>ID odabranog vozila: {{ ID_vozila }}</span>
      </div>

    <div class="field">
        <label class="label">Datum_ugovora</label>
        <div class="control">
          <input
            class="input"
            type="date"
            placeholder="Datum ugovora"
            v-model="Datum_ugovora"
          />
        </div>
        <span>Odabrani datum: {{ Datum_ugovora }}</span>
      </div>
 
    <div class="control">
      <button class="unesi" @click="saveUgovor">Spremi</button>
    </div>
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
      Datum_ugovora: "",
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
        this.$router.push("/");
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
  
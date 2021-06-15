<template>
  <div>
  <h1>Upit za:{{this.$route.params.naziv}}</h1>
<div class="field">
        <label class="label">Ime i prezime</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Ime i prezime"
            v-model="Ime_prezime"
          />
        </div>
      </div>

    <div class="field">
        <label class="label">Kontakt</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Kontakt"
            v-model="Kontakt"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">OIB</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="OIB"
            v-model="OIB"
          />
        </div>
      </div>
 
    <div class="control">
      <button class="unesi" @click="saveUpit">Spremi</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddUpit",
  data() {
    return {
      ID_vozila: this.$route.params.id,
      NovoVozilo: "",
      Ime_prezime: "",
      Kontakt: "",
      OIB: "",
      vozilo:[]
    };
  },
  created(){
    this.getVozilo();
  },
  methods: {
    async saveUpit() {
      try {
        await axios.post("http://localhost:8081/upit", {
        ID_vozila: this.ID_vozila,
        NovoVozilo: this.NovoVozilo,
        Ime_prezime: this.Ime_prezime,
        Kontakt: this.Kontakt,
        Mail: this.Mail,
        OIB: this.OIB
        });
        this.ID_vozila = "";
        this.NovoVozilo = "";
        this.Ime_prezime ="";
        this.Kontakt = "";
        this.Mail="";
        this.OIB="";
        this.$router.push("/CardVozila");
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
    background-color: #183031; /* Green */
    color: #dbe5eb;
  }
  </style>
  
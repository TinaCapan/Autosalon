<template>
  <div>
    <div class="field">
      <label class="label">Ime i prezime klijenta</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Ime i prezimee"
          v-model="Ime_prezime_klijenta"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">OIB klijenta</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="OIB"
          v-model="OIB_klijenta"
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
        <label class="label">Mail</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="E-mail"
            v-model="Mail"
          />
        </div>
      </div>
 
    <div class="control">
      <button class="unesi" @click="saveKlijent">Spremi</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddKlijent",
  data() {
    return {
      Ime_prezime_klijenta: "",
      OIB_klijenta: "",
      Kontakt: "",
      Mail: ""
    };
  },
  methods: {
    async saveKlijent() {
      try {
        await axios.post("http://localhost:8081/klijent", {
        Ime_prezime_klijenta:this.Ime_prezime_klijenta,
        OIB_klijenta:this.OIB_klijenta,
        Kontakt: this.Kontakt,
        Mail: this.Mail
        });
        this.Ime_prezime_klijenta = "";
        this.OIB_klijenta = "";
        this.Kontakt = "";
        this.Mail = "";
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
  
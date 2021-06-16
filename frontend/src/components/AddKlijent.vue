<template>
  <div class="card card-body">
    <h1>UNOS KLIJENTA</h1>
    <div class="field">
        <input
          class="input"
          type="text"
          placeholder="Ime i prezime klijenta"
          v-model="Ime_prezime_klijenta"
        />
    </div>
 
    <div class="field">
        <input
          class="input"
          type="text"
          placeholder="OIB klijenta"
          v-model="OIB_klijenta"
        />
    </div>

    <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Kontakt"
            v-model="Kontakt"
          />
      </div>

      <div class="field">
          <input
            class="input"
            type="text"
            placeholder="E-mail"
            v-model="Mail"
          />
      </div>
 
      <button class="btnunesi" @click="saveKlijent">Spremi</button>
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
        this.$router.push("/ListaKlijenata");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 

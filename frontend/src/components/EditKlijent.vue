<template>
  <div>
    <div class="field">
      <label class="label">Ime i prezime klijenta</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="imePrezime"
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
          placeholder="oib"
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
            placeholder="Mail"
            v-model="Mail"
          />
        </div>
      </div>
      
    <div class="control">
        <button class="edit" @click="updateKlijent">Spremi</button>
    </div>
    </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditKlijent",
  data() {
    return {
      Ime_prezime_klijenta: "",
      OIB_klijenta: "",
      Kontakt: "",
      Mail: ""
    };
  },
  created: function () {
    this.getKlijentById();
  },
  methods: {
    // Get Product By Id
    async getKlijentById() {
      try {
        const response = await axios.get(
          `http://localhost:8081/klijent/${this.$route.params.id}`
        );
        this.Ime_prezime_klijenta = response.data.Ime_prezime_klijenta;
        this.OIB_klijenta = response.data.OIB_klijenta;
        this.Kontakt = response.data.Kontakt;
        this.Mail = response.data.Mail;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateKlijent() {
      try {
        await axios.put(
          `http://localhost:8081/klijent/${this.$route.params.id}`,
          {
            Ime_prezime_klijenta:this.Ime_prezime_klijenta,
            OIB_klijenta:this.OIB_klijenta,
            Kontakt: this.Kontakt,
            Mail: this.Mail
          }
        );
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
 
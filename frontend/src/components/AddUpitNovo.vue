<template>
  <div class="card card-body">
    <h1>UPIT ZA NOVO VOZILO</h1>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Unesite podatke o traženom vozilu"
          v-model="NovoVozilo"
        />
      </div>
    </div>

<div class="field">
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
      ID_vozila: null,
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
 

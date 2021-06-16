<template>
    <div class="card card-body">
      <h1>UNOS VOZILA</h1>
    <div class="field">
        <input class="input" type="text" placeholder="Marka i model vozila" v-model="Marka_model_vozila"/>
    </div>
 
    <div class="field">
        <input class="input" type="text" placeholder="Vrsta motora" v-model="Vrsta_motora"/>
    </div>

    <div class="field">
        <input class="input" type="text" placeholder="Snaga motora" v-model="Snaga_motora"/>
      </div>

      <div class="field">
        <input class="input" type="text" placeholder="Radni obujam" v-model="Radni_obujam"/>
      </div>

      <div class="field">
          <input class="input" type="text" placeholder="Godina proizvodnje" v-model="Godina_proizvodnje"/>
      </div>

      <div class="field">
          <input class="input" type="text" placeholder="Broj prijedenih kilometara" v-model="Broj_prijedenih_kilometara"/>
      </div>

      <div class="field">
          <input class="input" type="text" placeholder="Cijena vozila" v-model="Cijena_vozila"/>
      </div>

      <div class="field">
        <div class="field">
          <p>Slika vozila</p>
          <input class="input" type="file" @change="previewImage" accept="image/*">
          <p class="field">Progress: {{uploadValue.toFixed()+"%"}}
            <progress :value="uploadValue" max="100"></progress>
        </p>
        </div>
      </div>
      <img class="preview" :src="picture">
      <button class="btnunesi" @click="onUpload">Spremi</button>
  </div>
</template>
 
<script>
import axios from "axios";
import { storage } from '../firebase'

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
      ImageData: null,
      picture: "",
      uploadValue: 0
    };
  },
  methods: {
    previewImage (event) {
      this.uploadValue=0
      this.picture = ""
      this.ImageData = event.target.files[0]
    },
    onUpload () {
      this.picture = null
      const storageRef = storage.ref(`${this.ImageData.name}`).put(this.ImageData)
      storageRef.on('state_changed', snapshot => {
        this.uploadValue = (snapshot.bytesTransffered / snapshot.totalBytes) * 100
      }, error => { console.log(error.message) },
      () => {
        this.uploadValue = 100
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url
          this.saveVozilo(url);
        })
      }
      )
    },
    async saveVozilo(url) {
      try {
        await axios.post("http://localhost:8081/vozilo", {
        Marka_model_vozila:this.Marka_model_vozila,
        Vrsta_motora:this.Vrsta_motora,
        Snaga_motora: this.Snaga_motora,
        Radni_obujam: this.Radni_obujam,
        Godina_proizvodnje: this.Godina_proizvodnje,
        Broj_prijedenih_kilometara: this.Broj_prijedenih_kilometara,
        Cijena_vozila: this.Cijena_vozila,
        Slika: url
        });
        this.Marka_model_vozila = "";
        this.Vrsta_motora = "";
        this.Snaga_motora = "";
        this.Radni_obujam = "";
        this.Godina_proizvodnje = "";
        this.Broj_prijedenih_kilometara = "";
        this.Cijena_vozila = "";
        this.picture=""
        this.$router.push("/ListaVozila");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
  .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin:auto;
  }
  .field{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #012855;
    border-radius: 4px;
    font-size: 20px;
  }
  input[type=text]:focus {
    background-color: #e7e7e7;
  }
  .txt {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    border: 2px solid #012855;
    border-radius: 4px;
    resize: none;
    margin-bottom: 10px;
  }
  .txt:focus{
    background-color: #e7e7e7;
  }
  h1{
    font-size: 20px;
    font-weight: bold;
    padding: 15px 15px 0px 15px;
  }
  .field-parking{
  display:flex;
  justify-content: center;
  }
  .lbl{
    margin-right: 30px;
    align-self: center;
  }
  
  .edit-form{
    width: 100%;
  }
  .btnunesi{
    padding: 15px 25px 15px 25px;
    background-color: #012855;
    color:white;
    height: 5vh;
    width: 10vh;
  }
</style>

  
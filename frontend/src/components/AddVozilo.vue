<template>
  <div>
    <div class="field">
      <label class="label">Marka i model vozila</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Marka i model vozila"
          v-model="Marka_model_vozila"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Vrsta motora</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Vrsta motora"
          v-model="Vrsta_motora"
        />
      </div>
    </div>

    <div class="field">
        <label class="label">Snaga motora</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Snaga motora"
            v-model="Snaga_motora"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Radni obujam</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Radni obujam"
            v-model="Radni_obujam"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Godina proizvodnje</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Godina proizvodnje"
            v-model="Godina_proizvodnje"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Broj prijedenih kilometara</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Broj prijedenih kilometara"
            v-model="Broj_prijedenih_kilometara"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Cijena vozila</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Cijena vozila"
            v-model="Cijena_vozila"
          />
        </div>
      </div>

      <div class="field">
        <div>
          <p>Upload slike</p>
          <input type="file" @change="previewImage" accept="image/*">
          <p>Progress: {{uploadValue.toFixed()+"%"}}
            <progress :value="uploadValue" max="100"></progress>
        </p>
        </div>
      </div>
      <img class="preview" :src="picture">
    <div class="control">
      <button class="unesi" @click="onUpload">Spremi</button>
    </div>
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
  
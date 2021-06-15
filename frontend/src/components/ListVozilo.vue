<template>
  <div class="row">
    <div class="naslov-button">
    <div class="naslov">POPIS VOZILA</div>
    <router-link :to="{ name: 'KreirajVozilo' }">
    <button class="add">UNESI NOVO VOZILO</button></router-link></div>
    <div class="tdiv">
    <table class="tablica">
      <thead>
        <tr>
          <th>Model i marka vozila</th>
          <th>Vrsta motora</th>
          <th>Snaga motora</th>
          <th>Radni obujam</th>
          <th>Godina proizvodnje</th>
          <th>Broj prijedenih kilometara</th>
          <th>Cijena vozila</th>
          <th class="has-text-centered">OPCIJE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vozilo in vozilo" :key="vozilo.ID_vozila">
          <td>{{ vozilo.Marka_model_vozila }}</td>
          <td>{{ vozilo.Vrsta_motora }}</td>
          <td>{{ vozilo.Snaga_motora }}</td>
          <td>{{ vozilo.Radni_obujam }}</td>
          <td>{{ vozilo.Godina_proizvodnje }}</td>
          <td>{{ vozilo.Broj_prijedenih_kilometara }}</td>
          <td>{{ vozilo.Cijena_vozila }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'KreirajProbnuVoznju', params: { id: vozilo.ID_vozila, naziv: vozilo.Marka_model_vozila } }"
              class="edit">PROBNA VOŽNJA</router-link><br>
            <router-link :to="{ name: 'IzmjeniVozilo', params: { id: vozilo.ID_vozila } }"
              class="edit">IZMJENI</router-link><br>
            <a class="edit" @click="deleteVozilo(vozilo.ID_vozila)">OBRIŠI</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ListVozilo",
  data() {
    return {
      vozilo: [],
    };
  },
 
  created() {
    this.getVozilo();
  },
 
  methods: {
    // Get All Products
    async getVozilo() {
      try {
        const response = await axios.get("http://localhost:8081/vozilo");
        this.vozilo = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteVozilo(id) {
      try {
        await axios.delete(`http://localhost:8081/vozilo/${id}`);
        this.getVozilo();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
  .row{
    width: 100%;
  }
  .tdiv{
    width: 90%;
    margin: auto;
  }
.naslov-button{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8vh;
}
.tablica {
  font-size: 15px;
  border-collapse: collapse;
  width: 100%;
  background-color: #77777741;
  color: rgb(0, 0, 0);
  margin-left: 10px;
  margin-right: 10px;
  table-layout: fixed;
  box-shadow: 8px 8px 8px grey;
}

.tablica td, .tablica th {
  padding: 8px;
  text-align: center;
}

.tablica tr:nth-child(even){background-color: rgb(255, 255, 255);}

.tablica tr:hover {background-color: #9cccd66e;}

.tablica th {
  padding: 12px 36px;
  background-color: #00A1C0;
  color: white;
  text-align: center;
}

.naslov {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
}

.add {
  background-color: #77777741;
  border: none;
  color: black;
  font-weight: bold;
  padding: 8px 32px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  position: absolute;
  right: 67px;
  transform: translateY(-15px);
  box-shadow:3px 3px 3px #0045536e ;
  }

.add:hover {
  background-color: #00A1C0;
  color: #EBDBDC;
}

.edit{
  cursor: pointer;
  padding: 5px 5px 5px 5px;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>

<template>
  <div class="slika">
    <img src='../assets/pozadina.jpg'/>
    <h1 class="overlay">AUTOSALON XY</h1>
  </div>
  <div id="onama" class="tekst">
      Lokacija: Vukovarska 58, 51000 Rijeka<br>
      Radno vrijeme autosalona: PONEDJELJAK - PETAK 08:00 - 16:00<br>
      Kontakt autosalona: 091/234-5678<br>
      E - mail autosalona: autosalon@gmail.com
    </div>
</template>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.overlay{
  position: absolute;
  top: 45%;
  width: 100%;
  text-align: center;
  color:#234143;
  background-color: #ffffff;
  opacity:60%;
  padding: 30px 0px 30px 0px;
  font-size: 50px;
}
.slika{
  width:100%;
  height: 92vh;
}
.slika img{
  width: 100%;
  height: 92vh;
  opacity: 60%;
}
#onama {
  position: absolute;
  bottom: 8px;
  left: 16px;
  background-color: #ffffff;
  opacity:60%;
  padding: 20px 15px 20px 15px;
  font-weight: bold;
  color: black;
  font-size: 20px;
}

</style>

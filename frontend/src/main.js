import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import ForgetPassword from '@/components/ForgetPassword'

import KreirajVozilo from './components/AddVozilo.vue'
import IzmjeniVozilo from './components/EditVozilo.vue'
import ListaVozila from './components/ListVozilo.vue'

import KreirajKlijenta from './components/AddKlijent.vue'
import IzmjeniKlijenta from './components/EditKlijent.vue'
import ListaKlijenata from './components/ListKlijent.vue'

import KreirajUpit from './components/AddUpit.vue'
import KreirajUpitNovo from './components/AddUpitNovo.vue'
import IzmjeniUpit from './components/EditUpit.vue'
import ListaUpita from './components/ListUpit.vue'

import KreirajUgovor from './components/AddUgovor.vue'
import IzmjeniUgovor from './components/EditUgovor.vue'
import ListaUgovora from './components/ListUgovor.vue'

import KreirajProbnuVoznju from './components/AddProbnaVoznja.vue'
import IzmjeniProbnuVoznju from './components/EditProbnaVoznja.vue'
import ListaProbnaVoznja from './components/ListProbnaVoznja.vue'
import CardVozila from './components/CardVozila.vue'

const routes = [
  {
    name: 'KreirajVozilo',
    path: '/kreirajVozilo',
    component: KreirajVozilo
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    name: 'IzmjeniVozilo',
    path: '/izmjeniVozilo/:id',
    component: IzmjeniVozilo
  },
  {
    name: 'CardVozila',
    path: '/CardVozila',
    component: CardVozila
  },
  {
    name: 'ListaVozila',
    path: '/',
    component: ListaVozila
  },
  {
    name: 'KreirajKlijenta',
    path: '/kreirajKlijenta',
    component: KreirajKlijenta
  },
  {
    name: 'IzmjeniKlijenta',
    path: '/izmjeniKlijenta/:id',
    component: IzmjeniKlijenta
  },
  {
    name: 'ListaKlijenata',
    path: '/listaKlijenata',
    component: ListaKlijenata
  },
  {
    name: 'KreirajUpit',
    path: '/kreirajUpit',
    component: KreirajUpit
  },
  
  {
    name: 'KreirajUpitNovo',
    path: '/kreirajUpitNovo',
    component: KreirajUpitNovo
  },
  {
    name: 'IzmjeniUpit',
    path: '/izmjeniUpit/:id',
    component: IzmjeniUpit
  },
  {
    name: 'ListaUpita',
    path: '/listaUpita',
    component: ListaUpita
  },
  {
    name: 'KreirajUgovor',
    path: '/kreirajUgovor',
    component: KreirajUgovor
  },
  {
    name: 'IzmjeniUgovor',
    path: '/izmjeniUgovor/:id',
    component: IzmjeniUgovor
  },
  {
    name: 'ListaUgovora',
    path: '/listaUgovora',
    component: ListaUgovora
  },
  {
    name: 'KreirajProbnuVoznju',
    path: '/kreirajProbnuVoznju/:id',
    component: KreirajProbnuVoznju,
  },
  {
    name: 'IzmjeniProbnuVoznju',
    path: '/izmjeniProbnuVoznju/:id',
    component: IzmjeniProbnuVoznju
  },
  {
    name: 'ListaProbnaVoznja',
    path: '/listaProbnaVoznja',
    component: ListaProbnaVoznja
  }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
  
createApp(App).use(router).use(router).mount('#app')
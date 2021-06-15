import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import ForgetPassword from '@/components/ForgetPassword'

import Home from '@/components/Home.vue' 

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
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'KreirajVozilo',
    path: '/kreirajVozilo',
    component: KreirajVozilo,
    meta: {
      authRequired: true
    }
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
    component: IzmjeniVozilo,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'CardVozila',
    path: '/CardVozila',
    component: CardVozila
  },
  {
    name: 'ListaVozila',
    path: '/listaVozila',
    component: ListaVozila,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'KreirajKlijenta',
    path: '/kreirajKlijenta',
    component: KreirajKlijenta,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'IzmjeniKlijenta',
    path: '/izmjeniKlijenta/:id',
    component: IzmjeniKlijenta,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'ListaKlijenata',
    path: '/listaKlijenata',
    component: ListaKlijenata,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'KreirajUpit',
    path: '/kreirajUpit',
    component: KreirajUpit,
  },
  
  {
    name: 'KreirajUpitNovo',
    path: '/kreirajUpitNovo',
    component: KreirajUpitNovo
  },
  {
    name: 'IzmjeniUpit',
    path: '/izmjeniUpit/:id',
    component: IzmjeniUpit,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'ListaUpita',
    path: '/listaUpita',
    component: ListaUpita,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'KreirajUgovor',
    path: '/kreirajUgovor',
    component: KreirajUgovor,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'IzmjeniUgovor',
    path: '/izmjeniUgovor/:id',
    component: IzmjeniUgovor,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'ListaUgovora',
    path: '/listaUgovora',
    component: ListaUgovora,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'KreirajProbnuVoznju',
    path: '/kreirajProbnuVoznju/:id',
    component: KreirajProbnuVoznju,
  },
  {
    name: 'IzmjeniProbnuVoznju',
    path: '/izmjeniProbnuVoznju/:id',
    component: IzmjeniProbnuVoznju,
    meta: {
      authRequired: true
    }
  },
  {
    name: 'ListaProbnaVoznja',
    path: '/listaProbnaVoznja',
    component: ListaProbnaVoznja,
    meta: {
      authRequired: true
    }
  }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
  
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next()
    } else {
      alert('Za pristup ovoj stranici morate biti prijavljeni')
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

createApp(App).use(router).use(router).mount('#app')
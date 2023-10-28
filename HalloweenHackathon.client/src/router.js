import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/character-select',
    name: 'CharacterSelect',
    component: loadPage('CharacterSelect')
  },
  {
    path: '/map',
    name: 'Map',
    component: loadPage('MapPage')
  },
  {
    path: '/triviaGrid',
    name: 'TriviaGrid',
    component: loadPage('TriviaGrid')
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: loadPage('Scoreboard')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

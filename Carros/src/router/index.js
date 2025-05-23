import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
import ListaProdutosView from '@/views/ListaProdutosView.vue'
import GaragemView from '@/views/GaragemView.vue'
import Produto from '@/components/produto.vue'
import LoginComponentView from '@/views/LoginComponentView.vue'
import CadastroComponentView from '@/views/CadastroComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'telainicial',
      component: TelaInicialView
    },
    {
      path: '/ListaProdutos',
      name: 'ListaProdutos',
      component: ListaProdutosView,
    },
    {
      path: '/garagem',
      name: 'garagem',
      component: GaragemView
    },
    {
      path: '/produto',
      name: 'Produto',
      component: Produto
    },
    {
      path: '/Login',
      name: 'loginComponent',
      component: LoginComponentView
    },
    {
      path: '/Cadastro',
      name: 'cadastroComponent',
      component: CadastroComponentView
    },
  ],
})

export default router
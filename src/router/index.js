
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'
import Contact from '../components/Contact.vue'
import About from '../components/About.vue'
import Blog from '../components/Blog.vue'
import Community from '../components/Community.vue'
import Explore from '../components/Explore.vue'
import Features from '../components/Features.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {name: 'Home', path: '/', component: Home},
    {name: 'Community', path: '/community', component: Community},
    {name: 'Explore', path: '/explore', component: Explore},
    {name: 'Features', path: '/features', component: Features},
    {name: 'Blog', path: '/blog', component: Blog},
    {name: 'About', path: '/about', component: About},
    {name: 'Contact', path: '/contact', component: Contact},
    {name: 'Footer', path: '/footer', component: Footer},
  ]
})

export default router


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/amrita', component: () => import('src/pages/about-me.vue') },
      //{ path: '', component: () => import('src/pages/Hobbies.vue') },
      { path: '/amrita/SkillSet', component: () => import('src/pages/SkillSet.vue') },
      { path: '/amrita/Hobbies', component: () => import('src/pages/MyHobbies.vue') },
      { path: '/amrita/ContactMe', component: () => import('src/pages/ContactMe.vue') },
     
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

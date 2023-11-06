<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Hey, I'm Amrita Maheshwari</div>
        <div class="text-subtitle1">Budding learner, Passionate for work..</div>
      </div>
      <q-img
        src="D:\Profile\my_profile\src\assets\photo1.jpg"
        class="header-image absolute-top"
        />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              to="/amrita/"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                About me
              </q-item-section>
            </q-item>

            <q-item 
              to="/amrita/SkillSet"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="code" />
              </q-item-section>

              <q-item-section>
                Skill Set
              </q-item-section>
            </q-item>

            <q-item 
              to="/amrita/Hobbies"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Hobbies
              </q-item-section>
            </q-item>

            <q-item 
              to="/amrita/ContactMe"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="phone" />
              </q-item-section>

              <q-item-section>
                ContactMe
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://media.licdn.com/dms/image/C4E03AQHxtqGw5TMJtQ/profile-displayphoto-shrink_800_800/0/1649400054855?e=2147483647&v=beta&t=eyxUFUXe87BNOv74Vo2ZfKrnpTDoEMCD0MnPJnaHHv8">
            </q-avatar>
            <div class="text-weight-bold">Amrita Maheshwari</div>
            <div>amrita.maheshwari@ltimindtree.com</div>
          </div>
        </q-img>
      </q-drawer>


    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
//import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
  .header-image {
    height:100px;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }
</style>

<template>
  <div id="app">
    <TheHeader></TheHeader>
    <Intro></Intro>
    <Skills>
      <!-- <Skill></Skill> -->
    </Skills>
    <Posts></Posts>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import Intro from './components/Intro.vue'
import Skills from './components/Skills.vue'
// import Skill from './components/Skill.vue'
import Posts from './components/Posts.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Intro,
    Skills,
    // Skill,
    Posts,
    TheFooter
  }
}
</script>

<style lang="scss">
  @import './assets/sass/style.scss'
</style>

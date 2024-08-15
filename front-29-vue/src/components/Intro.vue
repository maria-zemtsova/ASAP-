<template>
   <section class="intro">
            <div class="intro-wrapper">
                <h2 class="intro__title">I am Kotik</h2>
                <p class="intro__job">Frontend-developer</p>
                <p class="more-button">Scroll to more</p>
            </div>
            <img class="intro__image" src="../assets/kotik.jpg" alt="Kotik's photo" width="481px" height="635px">
        </section>
  </template>

  <script>
  export default {
    name: 'front-29-vue-intro',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  </style>
  
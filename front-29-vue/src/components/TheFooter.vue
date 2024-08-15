<template>
    <footer>
        <p class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
  name: 'front-29-vue-footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>

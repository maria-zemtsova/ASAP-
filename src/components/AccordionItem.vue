<template>
    <li>
        <h3>{{ item }}</h3>
    </li>
</template>



<script>
  export default {
    name: 'AccordionComponent',
    props: {
      item: String
    }
  } 
</script>

  
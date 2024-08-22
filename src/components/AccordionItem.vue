<template>
    <li>
        <div>
            <h3>{{ item.list }}</h3>
        </div>
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

  
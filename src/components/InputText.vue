<template>
  <div>
    <label for="name">{{ label }}</label>
    <input type="text" :value="value" id="name" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    id: String,
  }, 


  }

</script>
  

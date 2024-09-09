<template>
    <div>
      <label for="height">{{ label }}</label>
      <input type="number" :value="value" id="height" @input="$emit('input', $event.target.value)"/>
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
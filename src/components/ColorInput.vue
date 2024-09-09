<template>
    <div>
      <label for="color">{{ label }}</label>
      <input type="color" :value="value" id='color' @input="$emit('input', $event.target.value)" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      value: String
    },

  }
  </script>
  
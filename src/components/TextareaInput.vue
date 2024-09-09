<template>
    <div>
      <label for="biography">{{ label }}</label>
      <textarea :value="value" id="biography" @input="$emit('input', $event.target.value)"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      value: String
    }
  }
  </script>
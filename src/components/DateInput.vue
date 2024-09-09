<template>
    <div>
      <label for="age">{{ label }}</label>
      <input type="date" :value="value" id="age" @input="$emit('input', $event.target.value)" />
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
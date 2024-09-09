<template>
    <div>
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ options.text }}
      </option>
    </select>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      options: Array,
      value: String
    }
  }
  </script>
  
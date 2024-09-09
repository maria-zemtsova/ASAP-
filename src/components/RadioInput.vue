<template>
  <div>
    <label>{{ label }}</label>
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="option.value"
        :name="id"
        :value="option.value"
        :checked="option.value === value"
        @change="$emit('input', option.value)"
      />
      <label :for="option.value">{{ option.text }}</label>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      label: String,
      options: Array,
      value: String
    }
  }
  </script>
  
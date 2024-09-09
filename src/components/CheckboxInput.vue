<template>
  <div>
    <input type="checkbox" :id="id" :checked="isChecked" @change="toggle" />
    <label :for="id">{{ label }}</label> 
  </div>
 
</template>

<script>
export default {
  name:'checkboxComponent',
  props: {
    id: String,
    label: String,
    value: Array,
    talent: String,
  },
  computed: {
    isChecked() {
      return this.value.includes(this.talent);
    },
  },
};
</script>
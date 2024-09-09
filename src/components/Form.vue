<template>
  <div>
    <h3>Форма</h3>
    <InputName v-model="inputValue" />
    <button @click="sync">Синхронизировать</button>
    <p>Имя: {{ syncedValue }}</p>
  </div>
</template>

<script>
import InputName from './InputText.vue';

export default {
  name: 'FormC',
  components: {
    InputName
  },
  data() {
    return {
      inputValue: '',
      syncedValue: ''
    };
  },
  methods: {
    sync() {
      this.syncedValue = this.inputValue;
      this.$emit('update:inputValue', this.inputValue);
    }
  }
};
</script>



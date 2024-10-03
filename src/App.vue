<template>
  <div id="app">
    <CharacterForm 
      @syncData="syncFormData" 
      :initFormData="formData"
   
    />
    <CharacterForm
      @syncData="syncFormData"
      :initFormData="formData"
     
    />
  </div>

</template>

<script>
import CharacterForm from './components/CharacterForm.vue';

export default {
  components: {
    CharacterForm
  },

  data() {
    return {
      // formOneData: {},
      // formTwoData: {},
      formData:{}
    };
  },

  methods: {
    syncFormData(data) {
      // this.formData.name = data.name;
      console.log(this.formData)
      this.$set(this.formData, 'name', data.name)
      this.$set(this.formData, 'height', data.height)
      this.$set(this.formData, 'age', data.age)
      this.$set(this.formData, 'color', data.color)
      this.$set(this.formData, 'biography', data.biography)
      this.$set(this.formData, 'gender', data.gender)
      this.$set(this.formData, 'isMaster', data.isMaster)
      this.$set(this.formData, 'race', data.race)
      this.$set(this.formData, 'classC', data.classC)
      this.$set(this.formData, 'talents', data.talents)
    },

  }
}

</script>

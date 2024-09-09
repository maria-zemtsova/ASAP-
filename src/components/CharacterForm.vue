<template>
    <div class="character-form">
      <InputText 
        label="Имя" 
        id='name' 
        v-model="formData.name" />
      {{ formData.name }}


      <NumberInput 
        label="Рост" 
        id='height' 
        v-model="formData.height"/>
      {{ formData.height }}

      <DateInput 
        label="Дата рождения" 
        id='age' 
        v-model="formData.age"/>
      {{ formData.age }}


      <RadioInput 
          label="Пол" 
          id='gender' 
          v-model="formData.gender" 
          :options="optionsGender"/>
          {{ formData.gender }}


      <ColorInput 
          label="Цвет волос" 
          id='color' 
          v-model="formData.color"/>
      {{ formData.color }}


      <TextareaInput 
          label="Биография" 
          id='biography' 
          v-model="formData.biography"/>
      {{ formData.biography }}


      <CheckboxInput 
          label="Персонаж мастера?" 
          v-model="formData.isMaster" 
          id="isMaster"/>
      {{ formData.isMaster }}


      <SelectInput 
          label="Раса" 
          id='race' 
          v-model="formData.race" 
          :options="optionsRace" />
      {{ formData.race  }}


      <SelectInput 
          label="Класс" 
          id='class' 
          v-model="formData.classC" 
          :options="optionsClass" />
      {{ formData.classC}}


      <div>
        <label>Таланты</label>
        <CheckBoxInput
            v-for="talent in optionsTalents" 
            :key="talent.value"
            :id="talent.value"
            :label="talent.text"
            v-model="formData.talents"
            :talent="talent.value"
      />
      {{ formData.talents }}

    </div>

      <button  @click="syncData">Синхронизировать</button>
    </div>
  </template>
  
  <script>
  import InputText from './InputText.vue';
  import NumberInput from './NumberInput.vue';
  import DateInput from './DateInput.vue';
  import RadioInput from './RadioInput.vue';
  import CheckboxInput from './CheckboxInput.vue';
  import SelectInput from './SelectInput.vue';
  import TextareaInput from './TextareaInput.vue';
  import ColorInput from './ColorInput.vue';

  
  export default {
    components: {
      InputText,
      NumberInput,
      DateInput,
      RadioInput,
      CheckboxInput,
      SelectInput,
      TextareaInput,
      ColorInput,
    },
    props: ['initFormData'],
    data() {
      return {
        formData: {
          name: '',
          age: '',
          height: null,
          gender: '',
          isMaster: [],
          race: '',
          classC: '',
          talents: [],
          hairColor: '#000000',
          biography: '',
                  },
          optionsGender: [
            {value: 'm', text: 'Мужской'},
            {value: 'f', text: 'Женский'}, ],

          optionsRace:[
          { value: "human", text: "Человек" },
          { value: "elf", text: "Эльф" },
          { value: "gnome", text: "Гном" },
          ],

          optionsClass:[
          { value: "wizard", text: "Волшебник" },
          { value: "warrior", text: "Воин" },
          { value: "thief", text: "Вор" },
          ],

          optionsTalents:[
          { value: "acrobatics", text: "Акробатика " },
          { value: "riding", text: "Верховая езда" },
          { value: "healing", text: "Лечение" },
          ],
      };
    },
    watch:{
      initFormData:{
        immediate:true,
        deep:true,
        handler(newVal){
          this.$set(this.formData, 'name', newVal.name)
          this.$set(this.formData, 'height', newVal.height)
          this.$set(this.formData, 'age', newVal.age)
          this.$set(this.formData, 'color', newVal.color)
          this.$set(this.formData, 'biography', newVal.biography)
          this.$set(this.formData, 'gender', newVal.gender)
          this.$set(this.formData, 'race', newVal.race)
          this.$set(this.formData, 'classC', newVal.classC)
          this.$set(this.formData, 'isMaster', newVal.isMaster)
          this.$set(this.formData, 'talents', newVal.talents)
          


        }
      }
    },
    methods:{
      syncData(){
        this.$emit('syncData', this.formData)
      }
    }

  
  }


  </script>

  
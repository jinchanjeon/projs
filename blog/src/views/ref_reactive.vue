<template>
    <div class="home">
     <h1>Home</h1>
     <h2>Refs</h2>
     <p> {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
     <button @click="updateNinjaOne">Update ninja one</button>
  
     <h2>Reactive</h2>
     <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
      <button @click="updateNinjaTwo">Update ninka two</button>
  
    </div>
  </template>
  
  <script>
  import { ref,reactive } from 'vue'
  // @ is an alias to /src
  
  export default {
    name: 'HomeView',
    setup() {
      const ninjaOne=ref({name:'chan', age:24})
      const ninjaTwo=reactive({name:'mario',age:35})
  
      const nameOne=ref('chan')
      const nameTwo=reactive('mario')
  
      const updateNinjaOne=()=>{
        ninjaOne.value.age=40
      }
      const updateNinjaTwo=()=>{
        ninjaTwo.age=40
  
      }
  // reactive는 .value 안쓰고
  
      return {ninjaOne, updateNinjaOne,ninjaTwo, updateNinjaTwo,nameTwo}
    },
    
  
  }
  </script>
  
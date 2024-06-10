<template>
  <h1>{{ title }}</h1>
  <p>welcome..</p>
  <teleport to="#modals" v-if="showModal"> 
    <!-- index.html에 있는 modals클래스 불러와 -->
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a> <!--a태그를 넣기 위해 template을 넣음 -->
        <a href="#">more info</a>
      </template>
      
      <h1>ninja giveaway!</h1>
      <p>grab your ninja swag for half price!</p>
      <!-- 얘네가 없으면 default content로 나와 -->

    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">      
      <h1>sign up to newsletter</h1>
      <p>for updates and promo codes!</p>
    </Modal>
  </teleport>

  <button @click="toggleModal"> open modal</button>
  <button @click="toggleModalTwo"> open modal</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return{
      title:'my firest vue app :)',
      showModal:false,
      showModalTwo:false,
    }
  },
  methods:{
    handleclick(){
      console.log(this.$refs.name)
      this.$refs.name.classlist.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal= !this.showModal //false면 true로 , true면 false로
    },
    toggleModalTwo(){
      this.showModalTwo= !this.showModalTwo //false면 true로 , true면 false로
    },
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom:1px solid #ddd;
  display:inline-block;
  padding-bottom:10px;
}
</style>

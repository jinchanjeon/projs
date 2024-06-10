<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{sale:theme ==='sale' }">
      <!-- theme===''의 소괄호 안에 있는 게 sale이 아니면 바껴 -->
      <slot> default content</slot> <!-- app.vue에 있는 modal 제목, 내용 reuse할 수 있음-->
      <div class="actions">
        <slot name="links"></slot> <!--app.vue에 있는 links라는 v-slot에서 가져와-->
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:["theme"], //app.vue에 있는 <Modal header=""~~/>를 적용
    methods:{
      closeModal(){
        //custom event
        this.$emit('close')
      }
    }
  }
</script>

<style >
  .modal{
    width:400px;
    padding:20px;
    margin:100px auto;
    background: white;
    border-radius:10px;

  }

  .backdrop{
    top:0;
    position:fixed;
    background: rgb(0,0,0,0.5);
    width:100%;
    height:100%;

    }
    .modal h1{ 
      /* 그냥 h1이라고 하면 App.vue에 있는 h1태그에 적용돼서 <style scoped>라고 하거나
      아니면 이렇게 .modal h1이라고 하거나 */
      color:#03cfb4;
      border:none;
      padding:0;
    }
    .modal p{
      font-style:normal;
    }
    .modal .actions{
      text-align:center;
      margin:30px 0 10px 0;

    }
    .modal .action a{
      color:#333;
      padding:8px;
      border:1px solid #eee;
      border-radius:4px;
      text-decoration:none;
      margin:10px;
    }
    .modal.sale{
      background: crimson;
      color:white;
    }
    .modal.sale h1{
      color:white;
    }
    .modal.sale .actions{
      color:white;
    }
    .modal.sale .actions a{
      color:white;
    }
</style>
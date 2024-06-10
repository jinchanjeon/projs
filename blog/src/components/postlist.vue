<template>
  <div clss="post-list">
    <div v-for="post in posts" :key="post.id">
        <singlepost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import singlepost from './singlepost.vue'

export default {
    props:['posts'],
    components:{singlepost},
    setup(props){
        onMounted(()=>console.log('component mounted'))
        onUnmounted(()=>console.log('component unmounted'))
        onUpdated(()=>console.log('component updated'))

    },
    mounted(){
        console.log('mounted using options API')
    }
}
</script>

<style>

</style>
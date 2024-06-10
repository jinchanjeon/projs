<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <postlist :posts="posts"/>
      <tagcloud :posts="posts"/>
    </div>
    <div v-else>
      <spinner/>
    </div>
    <!-- <postlist v-if="showPosts" :posts="posts" />
    <button @click="showPosts=!showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
    
  </div>
</template>

<script>
import postlist from '../components/postlist.vue'
import tagcloud from '../components/tagcloud.vue'
import getPosts from '../composables/getPosts'
import spinner from '../components/spinner.vue'
import { ref } from 'vue'
// import { computed, ref, watch, watchEffect } from 'vue'
// @ is an alias to /src

export default {
  name: 'home',
  components:{postlist, spinner,tagcloud },
  setup() {
  const {posts, error, load }=getPosts()

  load()

  //  const showPosts=ref(true)
  //   return {posts, showPosts}
  return{posts,error}

  }



}
</script>

<style>
.home{
  max-width:1200px;
  margin:0 auto;
  padding:10px;
}
.layout{
  display:grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
<template>
<div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <postlist :posts="postsWithTag" />
        <tagcloud :posts="posts"/>
    </div>
    <div v-else>
        <spinner/>
    </div>
</div>
</template>

<script>
import postlist from '../components/postlist.vue'
import getPosts from '../composables/getPosts'
import spinner from '../components/spinner.vue'
import tagcloud from '../components/tagcloud.vue'
import {useRoute} from 'vue-router'
import { computed } from 'vue'

export default{
    components:{postlist, spinner,tagcloud},
    setup(){
        const route=useRoute()

        const {posts,error,load}=getPosts()

        load()

        const postsWithTag = computed(()=>{
            return posts.value.filter((p)=> p.tags.includes(route.params.tag))
        })

        return {error,posts, postsWithTag}
    }
}
</script>

<style>
 .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
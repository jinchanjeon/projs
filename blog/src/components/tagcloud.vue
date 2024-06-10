<template>
    <div class="tag-cloud">
        <h3>
            tags
        </h3>
        <div v-for="tag in tags" :key="tag">
            <router-link :to="{ name: 'tag', params: { tag } }">
                #{{ tag }}
            </router-link>
        </div>
    </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
    props: ['posts'],
    setup(props) {
        const { tags } = useTags(props.posts)

        return { tags }
    },
    props: ['posts']
}
</script>

<style>
.tag-cloud {
    padding: 10px;
}

.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}

.tag-cloud div {
    display: inline-block;
    padding: 10px;
}

.tag-cloud a {
    color: #9d9d9d;
    text-decoration: none;
}

.tag-cloud a.router-link-active {
    color: #ff8d8d;
    font-weight: bold;
}</style>
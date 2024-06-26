import { projectFirestore } from '@/firebase/config'
import {ref} from 'vue'

const getPost=(id)=>{
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            //simulate delay
            // await new Promise(resolve=>{
            //     setTimeout(resolve,2000)
            //})

            let res= await projectFirestore.collection('posts').doc(id).get()
            // console.log(res.data())
            if(!res.exists){
                throw Error('that post does not exist')
            }

            post.value={...res.data(), id: res.id}
            console.log(post.value)

            /*
            let data = await fetch('http://localhost:3000/posts/'+id)
            if (!data.ok) {
                throw Error('that post does not exist')
            }
            post.value = await data.json()
            */
        } 
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
return {post, error, load}
}
export default getPost 
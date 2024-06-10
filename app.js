const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am the template </h2>'
    data(){
        return {
            url:"http://www.naver.com",
            showBooks:true,
            age:45,
            x:0,
            y:0,
            books:[
                {title:'name of the wind', author:'patrick rothfuss',img:'assets/1.jpg',isfav:true},
                {title:'the way of kings', author:'brandon sanderson',img:'assets/2.jpg',isfav:false},
                {title:'the final empire', author:'brandon sanderson',img:'assets/3.jpg',isfav:true},
            ]
        }
    },
    methods:{
        changeTitle(title){
            //this.title='words of randiance',
            this.title=title 
            //index.html에 changeTitle(title)에 있는 title을 가져와서 여기 있는 title에 넣어
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks //true면 false로, fasle면 true로
        },
        handleEvent(e,data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        },
        toggleFav(book){
            book.isfav= !book.isfav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isfav)
        }
    }
})

app.mount('#app')


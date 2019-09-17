<template>
    <div>
      <h3> {{categ['name']}}</h3>
      <h1> {{comic['title']}} </h1>
      
       <img v-bind:src="urlImage" height="500" width="420"> </img>
      
      
    <h2> {{comic['description']}}</h2>
   

   

    </div>
    

    


</template>



<script>
import axios from 'axios'
export default {
    name: 'details',
    


     data: function(){
             return {
                
                comic:'',
                categ:'',
                urlComic:'',
                id:'',
                props:['id'],
                urlImage:''
         }
     },
     created: function(){
        this.id = this.$route.params.id;

         console.log(this.id);
        // urlComic = url + this.$props.id;
        const url  = 'http://localhost:8080/comics-manager/comic/' + this.id
     axios.get(url)
            .then((response) => {
              //  console.log(response.data);
                this.comic = response.data.comic;
                 console.log('categories');
                this.categ = this.comic.category;
                //console.log(this.comic);
               
                console.log(this.comic.imageUrl);
                this.urlImage = 'http://localhost:8080/' + this.comic.imageUrl;
                console.log(this.urlImage);
            })
      },
}
</script>


<style scoped>

</style>
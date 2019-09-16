<template>
    <div>
      <h1> {{comic['title']}} </h1>
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
                urlComic:'',
                id:'',
                props:['id']
         }
     },
     created: function(){
        this.id = this.$route.params.id;
        console.log('In details created');
         console.log(this.id);
        // urlComic = url + this.$props.id;
        const url  = 'http://localhost:8080/comics-manager/comic/' + this.id
     axios.get(url)
            .then((response) => {
              //  console.log(response.data);
                this.comic = response.data.comic;
                console.log(this.comic);
            })
      },
}
</script>


<style scoped>

</style>
<template v-if="details">
    <h1> DETAILS</h1>
</template>



<script>
import axios from 'axios'
export default {
    name: 'details',


     data: function(){
             return {
                url:'http://localhost:8080/comics-manager/comic/',
                comic:'',
                urlComic:'',
                id:''
         }
     },
     created: function(){
       /*  this.id = this.$route.params.id;
         console.log(this.id);
         urlComic = url + this.$props.id;
     axios.get(this.urlComic)
            .then((response) => {
            this.comic = response.data
              
              console.log(this.comic);    
            })*/
      },
}
</script>


<style scoped>

</style>
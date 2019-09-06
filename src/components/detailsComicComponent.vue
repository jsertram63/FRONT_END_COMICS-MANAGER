<template>

    <div>
       
        
      
    </div>
  

</template>


<script>
import axios from 'axios'
import { url } from 'inspector';
export default {
    name: 'detailsComicsCompent',


     data: function(){
             return {
                url:'http://localhost:8080/comics-manager/comic/',
                comic:'',
                urlComic:''
         }
     },
     created: function(){
         urlComic = url + this.$props.id;
     axios.get(this.urlComic)
            .then((response) => {
            this.comic = response.data
              
              console.log(this.comic);    
            })
      },
}

</script>







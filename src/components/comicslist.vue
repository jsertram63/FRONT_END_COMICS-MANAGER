<template>
 <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heroe</th>
      <th scope="col">Titre</th>
      <th scope="col">description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(com,i) in comics">
      <th scope="row">{{i+1}}</th>
      <td>{{com.category.name}}</td>
      <td>{{com.title}}</td>
      <td>{{com.description}} {{com.id}}</td>
      <td>
             <div class="card__actions">
              <!-- <button v-on:click="goDetails(com.id)"> Details </button> 
              <h6 @click="goDetails()"> Details </h6> !-->
           
                <router-link  :to="{name:'details', params: {comicId:com.id}} " tag="button">Details</router-link>    
                <router-view></router-view>
             </div>
             
      </td>
    </tr>
    
  </tbody>
</table>


 </div>

</template>



<script>

import axios from 'axios'
export default {
   
   name: 'comicslist',


  data: function(){
        return {
              imageUrl:'',
              comicsArray:[],
              comics:[],
              urlComics:'http://localhost:8080/comics-manager/comics',
              url:'https://jsonplaceholder.typicode.com/users'        
         }
  },

  beforeRouteUpdate(to, from, next) {
    console.log("beforeROuteUpdate");
    next() //make sure you always call next()
  },

   created: function(){
          axios.get(this.urlComics)
            .then((response) => {
              this.comics = response.data;  

             console.log(this.comics);
            })
      
     },
     methods:{
       goDetails(comId){
         console.log("GO DETAILS")
         console.log(this.comId);
         this.$router.push({name:'detailsComic'});
       },
       getDetailsLink:function(){
         return "/comics-manager/comic/" + this.comicId 
       }
     }
}
</script>


<style scoped>

@import '/Users/macmin/Documents/DEVELOPPEMENT/VUE/front-end-comics-manager/node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
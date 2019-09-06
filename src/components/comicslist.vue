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
      <td>{{com.description}}</td>
      <td>
             <div class="card__actions">
           
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
              comics:[],
              comicsArray:[],
              comicId:'dfsdfsd',
              urlComics:'http://localhost:8080/comics-manager/comics',
              url:'https://jsonplaceholder.typicode.com/users'        
         }
  },
   created: function(){
          axios.get(this.urlComics)
            .then((response) => {
              this.comics = response.data;  

             console.log(this.comics);
            })
      
     }
}
</script>


<style scoped>

@import '/Users/macmin/Documents/DEVELOPPEMENT/VUE/front-end-comics-manager/node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
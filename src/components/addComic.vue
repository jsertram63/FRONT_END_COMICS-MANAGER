<template>
     <form class="form-control" @submit="formSubmit">
<fieldset>
         <legend>Titre du comic</legend>
            <label>son nom</label>
            <input type="text" name="email" size="20" 
   maxlength="40" value="email" id="email" v-model="nameHeroe"/>



  <select class="form-control" :required="true" v-model="selected">
      <option :selected="true" @change="changeSelect" >SAGA</option>
      <option v-for="item in sagaTab2" v-bind:value="item.id"> {{item.name}} </option>
  </select>

  


  <label for="comments">Description :</label>
   <textarea name="comments" id="comments" cols="20" rows="2" v-model="description">
   </textarea>


   <label>ImageUrl</label>
            <input type="text" name="email" size="20" 
   maxlength="40" value="email" id="email" v-model="imageUrl"/>
</fieldset>

 
 <button class="btn" type="submit"> AJouter</button>

      </form>
 
   


</template>
   
<script>
import axios from 'axios'

export default {
   name: 'addCategory',

     data: function(){
             return {
                nameHeroe:'',
                description:'',
                selected:'',
                imageUrl:'',
                sagaTab:[],
                sagaTab2:[],
                

                url:'http://localhost:8080/comics-manager/comic/',
                urlCategories:'http://localhost:8080/comics-manager/categories'
                    
         }
     },
     created: function(){
           axios.get(this.urlCategories)
            .then((response) => {
              this.sagaTab = response.data;   
              // extact in new array categorie with id and neme  
              
              const result = this.sagaTab.categories.map((item => {
                  return {
                      name:item.title,
                      id: item._id,
                      object: item
                  }
              }));
              console.log(result);
              this.sagaTab2 = result;
            })
      
     },
     computed: {
    selectedID: function () {
      return this.selected.id;
    }
  },
     
     methods: {
         formSubmit(e){
             console.error("Log an error level message.");
             axios.post(this.url, {
                 title:this.nameHeroe,
                 description:this.description,
                 imageUrl:this.imageUrl,
                 categoryId:this.selected
                 
             })
             .then(function(response) {
                console.log((response));
                 
             })
            .catch(function(err) {
             console.log(err);
            });

         },
         changeSelect(){
             console.log("CHANGE SELECT");
         }
     }
 

}

</script>


<style scoped>

@import './../assets/css/forms.css';

</style>
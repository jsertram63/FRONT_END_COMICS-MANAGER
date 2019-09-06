<template>
     <form class="form-control" @submit="formSubmit">
         <legend>Quel est ce super héroes ?</legend>
            <label>son nom</label>
            <input type="text" name="email" size="20" 
   maxlength="40" value="email" id="email" v-model="nameHeroe"/>

  <label for="comments">Description :</label>
   <textarea name="comments" id="comments" cols="20" rows="2" v-model="description">
   </textarea>
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
                url:'http://localhost:8080/comics-manager/category/'      
         }
     },
     methods: {
         formSubmit(e){
             console.error("Log an error level message.");
             axios.post(this.url, {
                 title:this.nameHeroe,
                 description:this.description
             })
             .then(function(response) {
                console.log((response));
                 
             })
            .catch(function(err) {
             console.log(err);
            });

         }
     }
 

}

</script>


<style scoped>

@import './../assets/css/forms.css';

</style>
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


   <label>Image</label>
            
   <input type="file" id="file" name="file" ref="file" @change="onFileSelected"/>
</fieldset>

 
 <button class="btn"> AJouter</button>
 <button v-on:click="submitFile()">Submit</button>

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
                file:'',
                selectedFile:null,
                

                url:'http://localhost:8080/comics-manager/comic',
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
         formSubmit: function(e){

            let formData = new FormData();
             var options = { content: formData };
         
          



         let data = {
             title: this.heroe,
             description: this.description,
             categoryId: this.selected
         }
         //formData.append('body',data);
         formData.append('title',this.nameHeroe);
         formData.append('description',this.description);
         formData.append('categoryId',this.selected);
           formData.append('file', this.selectedFile);   


          let CancelToken = axios.CancelToken;
          let source = CancelToken.source();
           let current = this;
          let cancelToken = source.token;

            let config = {
                cancelToken: source.token,
                timeout: 5000,
                 header : {
                    'Content-Type' : 'multipart/form-data',
                    
                 }
            }
       
             axios.post( this.url,formData,config,{
                 onUploadProgress: uploadEvent => {
                     console.log('upload Progress:' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%') 
                 }
             })
              //   .then(function(){
              //      console.log('SUCCESS!!');
              .then((response) => {
                  console.log('SUCCESS!!');
                    console.log(response.data);
                     console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.headers);
                    console.log(response.config);


            })
                .catch(function(){
                console.log('FAILURE!!');
            });



      },

      
         onFileSelected(event){
             this.selectedFile = event.target.files[0];
             console.log("EVENT");
             console.log(event.target.files[0]);
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
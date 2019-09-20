<template>
    <div>
      <header class="main-header">
      <nav  v-on:authenticated="setAuth()" class="main-header__nav">
        <ul id="v-for-items" class="main-header__item-list" >
            <li  class="main-header__item">
                <router-link to="/comics-manager/comics">  Comics </router-link>
            </li>
            <li v-if="item.auth==false" v-for="(item,i) in items" :key1="i" class="main-header__item">       
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li>
            <li v-if="item.auth==false" v-for="(item,i) in items" :key1="i" class="main-header__item">       
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li> 
             <li v-if="authenticated==true" v-for="(item,i) in items" :key2="i" class="main-header__item">       
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li> 
        </ul>  
         <ul class="main-header__item-list">
             <li  v-for="(item,i) in itemsConnexion" :key3="i" v-if="authenticated==false && item.auth==false" class="main-header__item">
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li>
              <li  v-for="(item,i) in itemsConnexion" :key4="i" v-if="authenticated==true && item.auth==true" class="main-header__item">
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li>
        </ul>
    </nav>
      </header>
       <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
     data: function(){
             return {
                  items: [
                           // {name: 'Comics',path:'/comics-manager/comics',auth:false},
                             {name: 'Add Comics',path:'/comics-manager/add-comic',auth:true},
                              {name: 'Add Category',path:'/comics-manager/add-category',auth:true}
                  ],
                  itemsConnexion:[
                        {name: 'login',path:'/comics-manager/logIn',auth:false},
                        {name: 'signup',path:'/comics-manager/signup',auth:false},
                        {name: 'logout',path:'/comics-manager/logout',auth:true},


                  ],
                  itemps2:[
                    {name: 'login',path:'/comics-manager/logIn'},
                        {name: 'signup',path:'/comics-manager/signup'},
                  ],
                  authenticated:false

         }
     },
     methods : {
       setAuth() {
         this.authenticated = true;
         console.log("received data from signin")
       }
     },
     created() {
       this.$bus.$on('authenticated', () => {
       console.log("authenticated");
       this.authenticated = true;
       })

     }
    
  }
</script>

<style scoped>
@import './../assets/css/main.css';

</style>
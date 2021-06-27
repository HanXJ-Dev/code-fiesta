<template>
    <div>

        <div class = 'content-overall'>
            <router-link to = "/">
                <div class = "header">
                    <h2>{{title}}</h2>
                    <p>{{desc}}</p>
                </div>
            </router-link>
            <div class="menu">
                <div id = "left" @click="menuLeftScroll"><ion-icon name="caret-back-circle"></ion-icon></div>
                <div class="menu-items" @onLoad = "overflowing()">
                    <a href = "#" @click="changeStatus('economy')" id = 'economy' class = "active"><ion-icon name="home" ></ion-icon>Economy</a>
                    <a href = "#" @click="changeStatus('technology')" id = 'technology' class = "active"><ion-icon name="analytics"></ion-icon>Technology</a>
                    <a href = "#" @click="changeStatus('finance')" id = 'finance' class = "active"><ion-icon name="wallet"></ion-icon>Finance</a>
                    <a href = "#" @click="changeStatus('healthcare')" id = 'healthcare' class = "active"><ion-icon name="bandage"></ion-icon>Healthcare</a>
                    <a href = "#" @click="changeStatus('education')" id = 'education' class = "active"><ion-icon name="document"></ion-icon>Education</a>
                    <a href = "#" @click="changeStatus('food')" id = 'food' class = "active"><ion-icon name="fast-food"></ion-icon>Food</a>
                    <a href = "#" @click="changeStatus('general')" id = 'general' class = "active"><ion-icon name="newspaper"></ion-icon>General</a>
                </div>
                <div id = "right" @click="menuRightScroll"><ion-icon name="caret-forward-circle"></ion-icon></div>
            </div>
            <div class="content">
                <Policy :from = yearFrom :to = yearTo :search = searchTerm :categories = cat />
            </div>
        </div>
                <div class = 'filter'></div>
    </div>
</template>
    
<script>
    import {TITLE, DESCRIPTION} from '../variables'
    import Policy from './Policy'
  

    export default {
        components:{
            Policy
        },
        data(){
            return{
                title: TITLE,
                desc: DESCRIPTION,
                cat: {
                    'economy': true,
                    'technology': true,
                    'finance': true,
                    'healthcare': true,
                    'education': true,
                    'food': true,
                    'general': true 
                },
    

            }
        },
        props:{
            yearFrom: String,
            yearTo: String,
            searchTerm: String,
        },

        unmounted(){

        },
        methods:{

            menuLeftScroll(){
                document.getElementsByClassName('menu-items')[0].scrollBy({left: -100, behavior: 'smooth'})
                
            },
            menuRightScroll(){
                
                document.getElementsByClassName('menu-items')[0].scrollBy({left: 100, behavior: 'smooth'})

            },
            changeStatus(category){
                this.cat[category] = !this.cat[category]
                if (this.cat[category]){
                    document.getElementById(category).setAttribute('class', 'active')
                }else{
                    document.getElementById(category).removeAttribute('class', 'active')
                }
            }
        }
    }
</script> 
<style scoped>

    .filter{
        z-index: 1;
        background-color: rgba(255,255,255, 0.8);
        top:0;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100vw;
    
    }
    a {
        text-decoration: none;
        color: black;
        width: 500px;
    }
    .header{
        margin: 10px;
    }
    .header h2{
        color: var(--red);
    }
    .header p{
        padding-left: 3px;
    }
    .menu{

        display:flex;
    }
    .menu-items{
          
        margin-left: 0;
        width: 100vw;
        background-color: var(--white);
        overflow: auto;
        white-space: nowrap;
        text-align:center;
        height: var(--horizontal-menu-height);
    }
    
    .menu-items a{
        display: inline-block;
        color: var(--red);
        text-align: center;
        height: var(--horizontal-menu-height);;
        padding: 14px;
        text-decoration: none;
        padding-top: 0;
        padding-bottom: 5px;
        transition: 0.3s;
        width: 150px;
    }
    .menu-items a:active{
        background-color: var(--white);
        color: var(--red);
    }
    ion-icon{
        display: block;
        margin:auto;
        font-size: 2em;
        padding-top: 10px; 
    }

    #left{
        width:60px;
        overflow:hidden;
        display:block;
        padding-top: 10px;
        background: var(--red);
        color: var(--white);
        height: var(--horizontal-menu-height);
        left:0;
        clear:none; 
        position:fixed; 
        z-index:2;


    }
    #right {
        width:60px;
        overflow:hidden;
        display:block;
        padding-top: 10px;
        background: var(--red);
        color: var(--white);
        height: var(--horizontal-menu-height);
        clear:none;
        right: 0;
        position:fixed;
        z-index:2;
        }


    #right,
    #left{
        display: none;
        transition: 0.3s;
    }
    #left:active,
    #right:active{
        cursor:pointer;
        background-color: var(--red);
        color: var(--white);
    }

    .menu-items .active {
        background-color: var(--red);
        color: var(--white);
    }
    .content-overall{
        position: fixed;
        z-index: 2;
    }
    @media only screen and (max-width:1050px){
        #left,
        #right{
            display: block;
        }
        .menu-items{
            margin-left: 60px;
            width: calc(100vw - 120px);
        }

    }
    
</style>
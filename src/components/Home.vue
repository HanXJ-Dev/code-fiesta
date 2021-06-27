<template>
    <div class = "container ">
        <div class="row header">
                <h1 class = "title">{{title}}</h1>
                <p class = "description">{{desc}}</p>
        </div>
        <form class = "input-form">
            <div class="row text-row">
                <input class="form-control form-control-lg input-text" type="text" placeholder="Search for a specific term (not required)" v-model="search" > 
            </div>
            <div class="row input-select">
                <div class="col-md-4 left-select">
                        <label for ="YearTo">Year (From)</label>
                        <select class="form-control" v-model = "from" @change="changeToYear">
                            <option v-for="year in startyear" :key="year">{{year}}</option>
                        </select>
                </div>
                <div class="col-md-4 right-select">
                    <label for ="YearTo">Year (To)</label>
                    <select class="form-control" id = "YearTo" v-model = "to"> 
                        <option v-for="year in endyear" :key="year">{{year}}</option>
                    </select>
                </div>
                <div class = "col-md-4 submit-btn">
                    
                    <router-link 
                    :to = "{name: 'Policies', params:{yearFrom: from, yearTo : to, searchTerm: search }}">
                        <button type="submit" class="btn btn-danger">Search</button>
                    </router-link>
                </div>
            </div>
            
        </form>
    </div>
</template>
<script>

    import {TITLE, DESCRIPTION} from '../variables'
    export default{
        data(){
            return{
                title: TITLE,
                desc: DESCRIPTION,
                search: '',
                start: 2010,
                end: 2021,
                from: 0,
                to: 0,
                startyear: [
                ],
                endyear: [
                ]

            }

        },
        mounted(){
            for (let i = this.start; i <= this.end; i++) {
                this.startyear.push(i)
                this.endyear.push(i)   
            }
            this.from = this.start
            this.to = this.end
        },
        methods:{
            changeToYear(){
                this.endyear = []
                for (let i = this.from; i <= this.end; i++) {
                    this.endyear.push(i)
                }
                if (this.to < this.from){
                    this.to = this.end
                }
                // this.to = this.end

            },
        }
    }
</script>
<style scoped>

    .container{

        margin-top: calc(50vh/2);
    }
    .title{
        color: var(--red);
    }
    .header{
        text-align:center;
    }
    .header h1{
        font-size: 5em;
    }
    .header p{
        font-size:2em;
    }
    .input-text{
        height: var(--form-height);
    }
    .text-row,
    .input-select{
        padding: 0 15px 0 15px;
    }
    .input-select,
    .input-form{
        margin-top: 50px;
    }
    .left-select{
        margin-bottom: 50px;
        padding-left:0;
    }
    .btn{
        margin-top: 1.7em;
        display:block;
    }

    @media only screen and (max-width:991px){
        .submit-btn,
        .left-select,
        .right-select{
            padding: 0;
        }
        .container{
            margin-top: calc(20vh/2);
    }
    .header h1{
        font-size: 3em;
    }
    .header p{
        font-size:1em;
    }
    }
    button{
        text-decoration: none;
        transition: 0.3s;
    }
    a{
        text-decoration: none;
        
    }
</style>

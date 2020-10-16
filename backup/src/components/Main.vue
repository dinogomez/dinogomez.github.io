<template>
    <div class="main" id="main">

        

<img src="../assets/shapes02.svg" id="shapestwo" alt="">

<div class="jumbotron bg-transparent mb-0 radius-0">
  <div class="container">
      <div class="row">
        <div class="col-xl-6  align-self-center">
            <h1 class="display-2 text-mono" id="Paul">Paul Gome<span class="vim-caret">z</span></h1>
                <div class="lead mb-2 text-mono text-success" id="subheader" style="font-size: 1rem">           
         <vue-typed-js :strings="['student web developer <span class=text-white>/</span> ^1000 <span class=text-darkgrey text-mono my-2>minimalist enthusiast</span>'  ]" :loop="true" :contentType='html' :backDelay="1000" :backSpeed="50" :startDelay="1000" :typeSpeed="70">
            <span class="typing"></span>
            </vue-typed-js>
            </div>
          <div class="text-mono">
            <a href="#projects"
               title="Download Theme"
               class="btn btn-primary btn-shadow px-3 my-2 ml-0 text-left mr-1 "
               v-smooth-scroll="{ duration: 5000}">
              Projects
            </a>
            <a href="#!"
               class="btn btn-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left mr-1">
              Contact
            </a>
             <a href="#!"
               class="btn btn-warning btn-shadow px-3 my-2 ml-0 ml-sm-1 " style="width: 6em">
              About
            </a>
          </div>
          <div class="mt-2"><h6 class="text-mono "><span class="js p-1">javascript</span> <span class="vjs p-1">vue.js</span> <span class="php p-1">php</span> <span class="py p-1">python</span> <span class="cpp p-1">c++</span></h6></div>
        <div class="mt-3"><h6 class="text-mono mt-1"><span class="git p-1">git</span> <span class="java p-1">java</span></h6></div>




          <!-- <p class="mt-5 text-grey text-spacey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dignissimos provident. Alias, aliquid, cum cumque deleniti dignissimos eos exercitationem explicabo illum inventore laboriosam nihil nobis nostrum praesentium recusandae sequi, sint!
          </p> -->
        </div>
        <div class="col-xl-6 text-center">
            <a class=" btn-shadow px-3 my-2 ml-0 ml-sm-1 " href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmengxinli.com%2FTED&psig=AOvVaw0u9HuhYG9ZlQb0_VFhLL7l&ust=1602916906565000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDz84DBuOwCFQAAAAAdAAAAABAD" target="_blank"><img class="img-fluid box-shadow " id="avatar" src="../assets/avatar.gif" alt=""></a> 

        </div>
      </div>
      
  </div>
</div>
    </div>
</template>

<script>



export default {
    name: "Main",
    methods: {}
}
</script>
<style scoped >
/* width: 450.5px;
height: 901px;
left: 1469px;
top: 629px;

background: #714CDF;
border: 1px solid #714CDF; */
    #shapestwo{
           width: 20%;
            position: absolute;
            top: 65%;
            right: 0px;
            z-index: -1;
    }
    #shapesone{
        position: absolute;
        width: 363.63px;
        height: 333.97px;
        left: 55px;
        top: 45px;
    }
    #avatar{
        border-radius: 10%;
          box-shadow: 5px 10px #6f42c1;

    }
    #Paul{
        word-spacing: -1rem;
    }
    .main{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        
        justify-content: center;
    }

    .js{
        background: #f7df1e;
        color: #181818;
        font-weight: bold;
        
        }
    .vjs{
    background: #42b883;
    color: #181818;
    font-weight: bold;
    
    }
    .php{
    background: #8892be;
    color: #181818;
    font-weight: bold;
    
    }
    .py{
    background: #4584b6;
    color: #181818;
    font-weight: bold;
    
    }
    .cpp{
    background: #005597;
    color: #181818;
    font-weight: bold;
    
    }
    .git{
    background: #f5f5f5;
    color: #181818;
    font-weight: bold;
    }
    .java{
    background: #ec2025;
    color: #181818;
    font-weight: bold;  
    }
    
</style>
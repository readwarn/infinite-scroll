
var app=new Vue({
    el:'#app',
    data:{
      images:[],
      boxstyle:{
          transform:'translateY(0%)',
          transitionDuration:'0s'
      },
      loader:{
        display:'flex'
      },
      play:false,
      test:100
    },
    methods:{
         getbox(){
          var self=this;
             axios.get('https://api.unsplash.com/photos/random?client_id=sOKsMx9b9pmxwrO_p0If7XxZqNJCI5hkva7mFwDr6e0&count=30').then(function(data){
                 self.loader.display='none';
                 data.data.forEach(img => {
                     self.images.push(img);
                });
            });
         },
         anime(){
           this.play=!this.play;
           if(this.play){
              this.load();
              var move=document.getElementById('box').scrollHeight;
              this.boxstyle.transform='translateY(-'+move+'px)';
              this.boxstyle.transitionDuration=this.test+'s';
           }
           else{
               var halt=document.getElementById('box').getBoundingClientRect().top;
               var h=halt-92.5;
               this.boxstyle.transform='translateY('+ h +'px)';  
               this.boxstyle.transitionDuration='0s';
           }
         },
         load(){
           var self=this;
           var timer=setInterval(supply,100000);
           function supply(){
             if(self.play){
              self.getbox();
              var move=document.getElementById('box').scrollHeight;
              self.boxstyle.transform='translateY(-'+move+'px)';
              self.test=0.00522552768*move;
              console.log(self.test);
              self.boxstyle.transitionDuration=self.test+'s';
             }
             else{
               clearInterval(timer);
             }
           }
         }
    },
    mounted(){
       this.getbox();
    }
})
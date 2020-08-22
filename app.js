
var app=new Vue({
    el:'#app',
    data:{
      message:'here we go',
      h:0,
      images:[],
      scroll:false,
      boxstyle:{
          transform:'translateY(-0px)',
      },
      loader:{
        display:'flex'
      },
      play:false,
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
         pullup(){
            var self=this;
            var mytimer=setInterval(pull,100);
            var loader=setInterval(this.load,100000)
            function pull(){
                if(!self.play){
                    clearInterval(mytimer);
                    clearInterval(loader);
                }
                else{
                    self.h+=3;
                    self.boxstyle.transform='translateY(-'+ self.h +'px)';
                }
            }
         },
         pause(){
            if(!this.play){
                var halt=document.getElementById('box').getBoundingClientRect().top;
                var h=halt-100;
                this.boxstyle.transform='translateY('+ h +'px)';   
             }
         },
         stop(){
              this.play=!this.play;
              this.pullup();
              this.pause();
         },
         load(){
            var halt=document.getElementById('box').getBoundingClientRect().top;
            var h=halt-125;
            this.boxstyle.transform='translateY('+ h +'px)';
            this.getbox();   
         }
    },
    mounted(){
       this.getbox();
    }
})
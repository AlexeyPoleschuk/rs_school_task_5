// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var r={};
    var t=currency;  
    if(currency>10000){
       return {error:"You are rich, my friend! We don't have so much coins for exchange"};
   }
   if (currency==0){
       return{};
   }
   
   if (currency>0 || currency<10000){
       if(t>=50){
           r.H=parseInt(t/50);
           t=t-r.H*50;
       }
       if(t>=25){
           r.Q=parseInt(t/25);
           t=t-r.Q*25;
       }
       if(t>=10){
           r.D=parseInt(t/10);
           t=t-r.D*10;
       }
       if(t>=5){
           r.N=parseInt(t/5);
           t=t-r.N*5;
       }
       if(t>=1){
           r.P=parseInt(t);
       }
       return r;
   }
}




let  times = 0;
const interval = setInterval(()=>{
    console.log('repetir!!');
    times++; // times = times +1; times +=1;

    /*if(times > 10){
        clearInterval(interval)
    }*/
    //if(times > 10) {clearInterval(interval)}
    
    (times > 10) && clearInterval(interval)
},1000);


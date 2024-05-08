 export const API_KEY='AIzaSyD843GAboUZ6vefJLutbT9p79XT09Z-MQE';

  export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
    }
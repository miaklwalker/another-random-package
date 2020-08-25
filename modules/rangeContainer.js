import Type from "./Type.js"

export default class RangeContainer {
    constructor(ranges = undefined){
        if(ranges){
            this.ranges = this.addRange(ranges); 
        }
    }
    addRange(range){
        if(range instanceof Type || range.name === "Type" ){
            const {key,id,min,max} = range;
            let values = {min,max}
            this[key] = values;
            this[id]  = values;
        }
        else if(Array.isArray(range)){
            for(let i = 0 ; i < range.length ; i++ ){
                this.addRange(range[i]);
            }
        }
        else{
            console.warn("Please only pass types to this method")
        }
    }
    selectRange(config){
        if(Array.isArray(config)){
            let randomRangeID = Math.floor(Math.random() * config.length);
            return this[config[randomRangeID]];
        }
    }
}
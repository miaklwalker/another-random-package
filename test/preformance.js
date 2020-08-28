const Random =  require("../index.js")

function preformanceTest(runs,iterations,toTest,args){
    let temp = [];
    let testStart = Date.now();
    for(let i = 0 ; i < runs ; i++){
        let start = Date.now();
    for(let j = 0 ; j < iterations ; j++){
        toTest(args)
    }
    let finish = Date.now() - start;
    temp.push(finish);
    }
    let testfinished = Date.now() - testStart;
    return {
        runs,
        iterations,
        results:temp,
        averageTime:`${temp.reduce((x,y)=>x+y)/runs} ms`,
        totalTime:`${testfinished} ms`, 
    }

}


console.log(preformanceTest(20,200,Random.randomAlphaNumeric,22));
// function bottleCounter(bottleNumber){
//     while(bottleNumber > 0){
//         console.log(bottleNumber + ' bottles on the wall ' + (bottleNumber - 1) + ' left');
//         bottleNumber--;
//     }

// }

// bottleCounter(99);

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        // 
        let output = [];

        for(let i=0; i<=n; i++){
            if(n === 1){
                output.push(i);
            }

            else if (n === 2){
                output=[0,1];
            }

            else{
                output = [0,1];

                for(let i = 2; i < n; i++){
                output.push(output[output.length -2] + output[output.length - 1]);
                }
            }
        
            return output;
        }
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
console.log(fibonacciGenerator(6));
function fibonacciGenerator (n) {

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
        
    }
console.log(fibonacciGenerator(6));
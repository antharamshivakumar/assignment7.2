function Stats() {
        this.total = (function(args){
            var total = 0;
            for(var i = 0; i < args.length; i++) {
                total += args[i];
            }

            return total;
        })(arguments);
     }
var output = new Stats(1,2,3,4,5,6,7,8,9,10);

console.log(output.total);
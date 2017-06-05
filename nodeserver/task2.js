var sum = 0 ;
for( i = 2 ; i < process.argv.length ; i ++ )
{   var temp = parseFloat(process.argv[i]) ;
    sum +=  temp ; 
}
console.log(sum) ;
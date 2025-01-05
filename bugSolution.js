function foo(a,b){return typeof a === 'number' && typeof b === 'number' ? a+b : NaN;}console.log(foo(1, "1")); //Output: NaN
function bar(a,b){return typeof a === 'number' && typeof b === 'number' ? a-b : NaN;}console.log(bar(1,"1")); //Output: NaN
function baz(a,b){return typeof a === 'number' && typeof b === 'number' ? a*b : NaN;}console.log(baz(1,"1")); //Output: NaN
function bam(a,b){return typeof a === 'number' && typeof b === 'number' ? a/b : NaN;}console.log(bam(1,"1")); //Output: NaN
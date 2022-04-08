/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

5*5  
5*4  4*4
5*3  4*3  3*3
5*2  4*2  3*2
5*1  4*1  3*1
*/

var a=999, b=999, highest=0;

for(var j=0; a-j>=100; j++){
    for(var i=0; b-i>=100; i++){
        if(isPalindrome(a*(b-i))){
           if(highest < a*(b-i))
                highest =  a*(b-i);
        }
    }
    b-=1;
    a-=1;
}

console.log(highest);
function isPalindrome(n){
    n = n + '';//012345
    return n.charAt(2) === n.charAt(3) && 
           n.charAt(1) === n.charAt(4) && 
           n.charAt(0) === n.charAt(5);
}

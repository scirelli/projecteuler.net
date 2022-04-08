function cacheFunc(fnc) {
    var cache = {};

    return function(){
        var val = 0,
            args = Array.prototype.slice.call(arguments,0),
            id = args.join();

        if(cache[id]) return cache[id];

        val = fnc.apply(fnc, args);
        cache[id] = val;

        return val;
    }
}

function fibinnaci(n){
    if(n <= 1 ) return n;

    return fibinnaci(n-2) + fibinnaci(n-1);
}
var cachedFib = cacheFunc(fibinnaci);

var a = [],
    val=0,
    i=0;
while(val < 4000000){
    val = cachedFib(i++);
    a.push(val);
}
var count = a.reduce(function(ac, val){
    if(val%2 === 0){
        ac+=val;
    }
    return ac;
}, 0);
console.log(a.join(' '));
console.log(count);

function checkprime(noo) {
    var cnt = 0;
    for (var i = 2; i < noo; i++) {
        if (noo % i == 0) {
            cnt++;
        }
    }
    if (cnt == 0) {
        console.log('Number is prime');
    }
    else {
        console.log('Not prime no');
    }
}
checkprime(14);

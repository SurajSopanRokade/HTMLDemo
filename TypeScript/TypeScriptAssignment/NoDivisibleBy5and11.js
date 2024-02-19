function check(nn) {
    if (nn % 5 == 0 && nn % 11 == 0) {
        console.log('Divisible by 5 and 11');
    }
    else {
        console.log('Not divisible by 5 and 11');
    }
}
check(35);

function getOrdinal(n) {

    //  When no other condtion applies
    let ord = 'th';

    //  If remainder when divided by 10 is 1 and remainder when divided by 100 is NOT 11
    if (n % 10 == 1 && n % 100 != 11) {
      ord = 'st';
    }
    //  If remainder when divided by 10 is 2 and remainder when divided by 100 is NOT 12
    if (n % 10 == 2 && n % 100 != 12){
      ord = 'nd';
    }
    //  If remainder when divided by 10 is 3 and remainder when divided by 100 is NOT 13
    if (n % 10 == 3 && n % 100 != 13){
      ord = 'rd';
    }
    //  Return number with ordinal
    return n + ord;
}

console.log(getOrdinal(15)); // Output: 15th

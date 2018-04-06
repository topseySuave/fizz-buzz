const fizzBuzz = (val) => {
    if(val){
        if(isNaN(val))return 'Please enter a number';
        if( val < 0 )return 'Number must be positive';
        if( val % 3 == 0 && val % 5 == 0 ) return 'fizzbuzz';
        if( val % 3 == 0 ) return 'fizz';
        if( val % 5 == 0 ) return 'buzz';
        return val;
    }
    return 'Must be a number';
};

export default fizzBuzz;
class Myclass {
    value = 10;
    constructor() {
        //this.first = first;
        //this.second = second;

        this.addThis2 = function (first, second) {//익명 함수
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }

}

var a1 = new Myclass(2, 6);
//a1.first = 3;
console.log(a1.first); //2
console.log(a1.second);//6 
console.log(a1.addThis2); //undefined
console.log(a1.addThis2(2, 5));
//console.log(a1.addThis3(3, 6)); //Typeerror addThis3 is not a function
console.log(typeof (a1.addThis2)); //undefined
//console.log(a1.addThis3);//
//console.log(typeof (a1.addThis2()))//Typeerror addThis3 is not a function



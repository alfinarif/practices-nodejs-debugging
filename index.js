import axios from "axios";

let url =  'https://freetestapi.com/api/v1/countries';

axios.get(url).then(function (response) {

        for (let i = 0; i < response.data.length; i++){
            console.log(response.data[i]);
        }

    })
    .catch(function (error){

        console.log(error);


    })

// example of nodejs debuging
// let a = 10;
// let b = 20;
// let c;
// let d = 40;
//
// let ab = a + b;
// let cd = c + d;
//
// let result = cd - ab;
//
// console.log(result);


 var name = "harshit";

function fun() {
    
    var x = 100;

    console.log(x);

    function gun() {

      //console.log(name);
        var name = "raj";
        console.log(name);

        function pun() {
            
            var name = "aditya"; 
            console.log(name);
        }

        pun();

    }

    gun();


}

fun();
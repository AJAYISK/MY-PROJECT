//my javascript

function myfunction(){
        var profile={username:"sunkanmi",age:90,password:1234,asset:["car","house in banana island","5plots of land"]};
        var gousername = document.getElementById("getuser").value;
    var gopwd = document.getElementById("getpass").value;
        if(gousername == profile.username && gopwd == profile.password){
           document.getElementById("demo").innerHTML="welcome back!" + profile.username; + "your age is" + profile.age;
        }else if(gousername == "" || null ){
    document.getElementById("demo").innerHTML="space cannot be blank!"
        }else if(gopwd =="" || null){
            document.getElementById("demo").innerHTML="space cannot be blank!"
        }else{
        document.getElementById("demo").innerHTML="invalid email & password!"
        }
    }
    
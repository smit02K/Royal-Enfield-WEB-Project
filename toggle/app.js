function Register(){
    document.getElementById("Btn").style.left="89px";
    document.getElementById("FormRegister").style.left="0px";
    document.getElementById("FormLogin").style.left="-580px";
}

function Login(){
    document.getElementById("Btn").style.left="0px";
    document.getElementById("FormRegister").style.left="580px";
    document.getElementById("FormLogin").style.left="0px";
}

function form1(){
    var a= document.getElementById("uname");
    var b= document.getElementById("pass");
    if(a.value.trim()=="" && b.value.trim()==""){
        document.getElementById("unameh6").innerHTML="Username is required";
        document.getElementById("passh6").innerHTML="Password is required";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        return false;
        
    }
    else if(a.value.trim()!="" && b.value.trim()==""){
        document.getElementById("passh6").innerHTML="Password is required";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()=="" && b.value.trim()!=""){
        document.getElementById("unameh6").innerHTML="Username is required";
        a.style.border="1px solid red";
        
        return false;
    }
    else if(a.value=="shivam" && b.value=="shivam7"){
        document.getElementById("btnh6").innerHTML="Username and Password is matching";
        
        return true;
    }
    
    
    else{
        document.getElementById("btnh6").innerHTML="Username and Password is not matching";
        return false;
    }
}
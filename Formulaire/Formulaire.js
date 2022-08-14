document.getElementById("phone").value = "+33"

function country_code(){
    var val = document.getElementById("country").value;

    if(val === "fr"){
        document.getElementById("phone").value = "+33"
    }
    else if(val === "sn"){
        document.getElementById("phone").value = "+221"
    }
    else if(val === "be"){
        document.getElementById("phone").value = "+32"
    }
    else if(val === "it"){
        document.getElementById("phone").value = "+39"
    }
    else if(val === "es"){
        document.getElementById("phone").value = "+34"
    }
    else if(val === "uk"){
        document.getElementById("phone").value = "+44"
    }
    else if(val === "us"){
        document.getElementById("phone").value = "+1"
    }
    else if(val === "de"){
        document.getElementById("phone").value = "+49"
    }
    else if(val === "ch"){
        document.getElementById("phone").value = "+86"
    }
    else if(val === "ru"){
        document.getElementById("phone").value = "+7"
    }
    else if(val === "in"){
        document.getElementById("phone").value = "+91"
    }
    else if(val === "autre"){
        document.getElementById("phone").value = ""
    }
}
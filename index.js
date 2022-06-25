


var nombre="franklyn";
var apellido="sierra";


localStorage.setItem("nombre", "franklyn")

localStorage.setItem("apellido","sierra")



localStorage.setItem('persona',JSON.stringify({nombre:"fran",apellido:"sierra"}))

sessionStorage.setItem("nombre","franklyn")
const newMinutosUTC=min=>{
    let fecha=new Date();
    fecha.setTime(fecha.getTime()+min*2000*60)
return fecha.toUTCString();
}

const crearCookies=(nombre,apellido,min)=>{

    expires=newMinutosUTC(min)
    document.cookie=`${nombre};apellido=${apellido};expires=${expires}`
}


const obtenerCookie=cookieName=>{
    let cookies=document.cookie;
    cookies=cookies.split(';');
    for(i=0;cookies.length>i;i++){
        cookies=cookies[i].trim();
            if(cookie.startsWith(cookieName)){
                return cookie.split('=')[0]
            }else{
              return  "no hay cookies con ese nombre"
            }

    }
}

crearCookies("nombre=franklyn","apellido=sierra","2")
function timer(){
    let date = new Date()
    //transforma em decimal
    let hr = date.getHours().toString().padStart(2,"0")
    let min = date.getMinutes().toString().padStart(2,"0")
    let sec = date.getSeconds().toString().padStart(2,"0")

    // transforma em binário
    let hora = date.getHours().toString(2).padStart(8, "00000000")
    let minuto = date.getMinutes().toString(2).padStart(8, "00000000")
    let segundo = date.getSeconds().toString(2).padStart(8, "00000000")

    //transforma em hexadecimal
    let h = date.getHours().toString(16)
    let m = date.getMinutes().toString(16)
    let s = date.getSeconds().toString(16)

    if ((hr >= 0)&&(hr <= 5)|| (hr >=18)){
        document.body.style.backgroundImage = "linear-gradient(180deg,#0353a4, #023e7d, #002855)"
    }else if ((hr >= 6)&&(hr <= 11)){
        document.body.style.backgroundImage = "linear-gradient(45deg, #ff9f1c, #f6aa1c, #ffbf69 )"
    }else if ((hr >= 12)&&(hr < 18)){
        document.body.style.backgroundImage = "linear-gradient(45deg, #ff9505, #ca6702 , #cc5803)"
    }

    //imprime em decimal
    document.getElementById("hours").innerHTML = hr
    document.getElementById("minutes").innerHTML = min
    document.getElementById("seconds").innerHTML = sec

    //imprime em binário
    document.getElementById("hora").innerHTML = hora
    document.getElementById("minutos").innerHTML = minuto
    document.getElementById("segundos").innerHTML = segundo

    //imprime em hexadecimal
    // document.getElementById("h").innerHTML = h
    // document.getElementById("m").innerHTML = m
    // document.getElementById("s").innerHTML = s



    setInterval("timer()", 1)
}
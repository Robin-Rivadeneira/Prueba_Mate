document.getElementById("SI").style.display = "none"
document.getElementById("NO").style.display = "none"
var ingreso = document.getElementById("ingreso");
var ingresos = document.getElementById("mostrar");
var mensaje = document.getElementById("mensaje");

var num = []
var repetido = []
var unico = []
var unido = []
unido.sort()
var repetidos = {}
var valor=[]
var sumaT = 0
var sumaFr = 0
var sumaPorcentual = 0
var frecuenciaPorcentual = []
var frecuenciaRelativa = []
var frecuenciaAcumulada = []
function Mostrar() {
    document.getElementById("ocular").style.display = "none"
    document.getElementById("SI").style.display = "block"
    document.getElementById("NO").style.display = "block"
    mensaje.style.display = "block"
    mensaje.innerHTML = '<p>Ingresar otro valor</p>'
    num.push(ingreso.value)
}
function Si() {
    document.getElementById("SI").style.display = "none"
    document.getElementById("NO").style.display = "none"
    document.getElementById("ocular").style.display = "block"
    mensaje.style.display = "none"
    console.log(num.length)
}
function No() {
    document.getElementById("SI").style.display = "none"
    document.getElementById("NO").style.display = "none"
    mensaje.style.display = "none"
    document.getElementById("ocular").style.display = "block"
    document.getElementById("ms").innerHTML = num.toString();

    for (let j = 0; j < num.length; j++) {
        for (let k = j + 1; k < num.length; k++) {
            if (num[j] == num[k]) {
                repetido.push(num[k])
            }
        }
    }
    for (let a = 0; a < num.length; a++) {
        for (let b = 0; b < repetido.length; b++) {
            if (num[a] != repetido[b]) {
                unico.push(num[a])
            }
        }
    }
    unido = unico.concat(repetido)
    document.getElementById("unido").innerHTML = unido.toString()

    num.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
        valor.push(repetidos[numero])
    });
    console.log(valor);

    valor.forEach(function (numero) {
        sumaT += numero;
    });
    console.log(sumaT);

    for (let c = 0; c < valor.length; c++) {
        let fr = valor[c] / sumaT
        frecuenciaRelativa.push(fr)
        console.log(fr)
    }

    frecuenciaRelativa.forEach(function (numero) {
        sumaFr += numero;
    });
    console.log(sumaFr)

    for (let d = 0; d < frecuenciaRelativa.length; d++) {
        let fp = frecuenciaRelativa[d] * 100
        frecuenciaPorcentual.push(fp)
        console.log(fp)
    }

    frecuenciaPorcentual.forEach(function (numero) {
        sumaPorcentual += numero;
    });
    console.log(sumaPorcentual)
    
    for(m=0;m<valor.length;m++){
            let a = valor[m]
            let b = valor[m]
            frecuenciaAcumulada=a+b+1
            console.log(frecuenciaAcumulada)
            a=b
            b=frecuenciaAcumulada
    }
}

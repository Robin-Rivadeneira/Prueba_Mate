class calculos{
    constructor(){
    this.ingreso = document.getElementById("ingreso");
    this.ingresos = document.getElementById("mostrar");
    this.mensaje = document.getElementById("mensaje");
    this.si=document.getElementById("SI").style.display = "none"
    this.no=document.getElementById("NO").style.display = "none"
    this.num = []
    this.frecuenciaPorcentual = []
    this.frecuenciaRelativa = []
    this.frecuenciaAcumulada = []
    this.repetidos = {}
    this.valor = []
    this.cont=1
    this.sumaT = 0
    this.sumaFr = 0
    this.sumaPorcentual = 0
    }
Mostrar() {
    document.getElementById("ocular").style.display = "none"
    document.getElementById("SI").style.display= "block"
    document.getElementById("NO").style.display = "block"
    this.mensaje.style.display = "block"
    mensaje.innerHTML = '<p>Ingresar otro valor</p>'
    this.num.push(this.ingreso.value)
}
Si() {
    document.getElementById("SI").style.display = "none"
    document.getElementById("NO").style.display = "none"
    document.getElementById("ocular").style.display = "block"
    this.mensaje.style.display = "none"
    console.log(this.num.length)
}
No() {
    document.getElementById("SI").style.display = "none"
    document.getElementById("NO").style.display = "none"
    this.mensaje.style.display = "none"
    document.getElementById("ocular").style.display = "block"
    document.getElementById("ms").innerHTML = this.num.toString();

    var uniqs = this.num.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })
    console.log(uniqs);
    document.getElementById("unido").innerHTML = uniqs.toString()

    for(let i=0;i<this.num.length;i++){
        for(let j=i+1;j<this.num.length;j++){
            if(this.num[i]==this.num[j]){
                let b=this.cont+1
                this.valor.push(this.cont)
                this.valor.push(b)
                console.log(this.valor)
        }
      }
    }

    for(let i=0;i<this.valor.length;i++){
        this.sumaT=this.sumaT+this.valor[i]
        console.log(this.sumaT)
    }
    
    for (let c = 0; c < this.valor.length; c++) {
        let fr = this.valor[c] / this.sumaT
        this.frecuenciaRelativa.push(fr)
        console.log(fr)
    }

    for(let i=0;i<this.frecuenciaRelativa.length;i++){
        this.sumaFr=this.sumaFr+this.frecuenciaRelativa[i]
        console.log(this.sumaFr)
    }

    for (let d = 0; d < this.frecuenciaRelativa.length; d++) {
        let fp = this.frecuenciaRelativa[d] * 100
        this.frecuenciaPorcentual.push(fp)
        console.log(fp)
    }

    for(let i=0;i<this.frecuenciaPorcentual.length;i++){
        this.sumaPorcentual=this.sumaPorcentual+this.frecuenciaPorcentual[i]
        console.log(this.sumaPorcentual)
    }

    for (let m = 0; m < this.valor.length; m++) {
        let a = this.valor[m]
        let b = this.valor[m]
        let c = a + b-1
        console.log(this.frecuenciaAcumulada)
        a = b
        b = c
        this.frecuenciaAcumulada.push(c)
    }

    var codigohtml = "<table border='1'><tbody>"
    codigohtml += "<tr>"
    codigohtml += "<td>Frecuencias</td>"
    codigohtml += "<td>Frecuencia Relativa</td>"
    codigohtml += "<td>Frecuencia Porcentual</td>"
    codigohtml += "<td>Frecuencia Acumulada</td>"
    codigohtml += "</tr>"
    codigohtml += "<tr>"
    for (let g = 0; g < uniqs.length; g++) {
        codigohtml += "<td>" + this.valor[g] + "</td>"
        codigohtml += "<td>" + this.frecuenciaRelativa[g] + "</td>"
        codigohtml += "<td>" + this.frecuenciaPorcentual[g] + "</td>"
        codigohtml += "<td>" + this.frecuenciaAcumulada[g] + "</td>"
        codigohtml += "</tr>"
    }codigohtml += "<tr>"
    codigohtml += "<td>" + this.sumaT + "</td>"
    codigohtml += "<td>" + this.sumaFr + "</td>"
    codigohtml += "<td>" + Math.ceil(this.sumaPorcentual) + "</td>"
    codigohtml += "</tr>"
    codigohtml += "</tbody></table>"
    document.getElementById("table").innerHTML = codigohtml
}
}

let a=new calculos()

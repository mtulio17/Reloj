function obtenerFecha(){
    let  fecha = new Date(),
         horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        // console.log(horas + minutos + segundos);
        
            //traer los elementos correspondientes
            let pHoras = document.getElementById('hora'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.querySelector('#diaSemana'),
            pNumDia = document.querySelector('#numDia'),
            pMes = document.querySelector('#mes'),
            pAnio = document.querySelector('#anio');

        //asignar los valores de la fecha: para js los dias se enumeran del  0 al 6, las semanas 
        let semana = ['domingo', 'Lunes', 'Martes', 'Miercoles', 'jueves', 'Viernes', 'Sabado'];
        pDiaSemana.innerHTML = semana[fecha.getDay()];
        pNumDia.innerHTML = fecha.getDay();

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiemre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.innerHTML = meses[fecha.getMonth()];

        pAnio.innerHTML = fecha.getFullYear();

        //asignar los valores de la hora
        if(segundos < 10){
            segundos = '0' + segundos
        }
        if(minutos < 10){
            minutos = '0' + minutos
        }
        if(horas < 10){
            horas = '0' + horas
        }

        pHoras.innerHTML = horas;
        pMinutos.innerHTML = minutos;
        pSegundos.innerHTML = segundos;
    }

function cambiarColor(color){
    let section = document.getElementById('reloj');
    if(color === 'rosa'){
        section.className = 'w-75 pink';
    }
    if (color === 'verde'){
        section.className = 'w-75 green';
    }
    if (color === 'azul'){
        section.className = 'w-75 blue';
    }
    
}


window.setInterval(obtenerFecha, 1000);
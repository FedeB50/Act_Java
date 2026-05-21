function Inscribir() {
    const edad = parseInt(document.getElementById('Edad').value);
    const prom1 = parseFloat(document.getElementById('Prom1').value);
    const prom2 = parseFloat(document.getElementById('Prom2').value);
    const temas = document.getElementById('temas_aprobados').value;
    const asiste = document.getElementById('asiste').checked;
    
    let mensaje = '';
    const resultado = document.getElementById('resultado');
    
    if (!asiste) {
        mensaje += 'No desea realizar el campamento\n';
    }
    
    if (edad < 14 || edad > 17) {
        mensaje += 'No tiene la edad permitida\n';
    }
    
    if (prom1 < 8 || prom2 < 8) {
        mensaje += 'No alcanzo los objetivos en 1er o 2do año\n';
    }
    
    if (temas !== 'ambos') {
        mensaje += 'No aprobó ambos temas\n';
    }
    
    if (mensaje === '') {
        resultado.innerText = 'El alumno cumple con los requerimientos para participar del viaje';
        resultado.className = 'exito';
    } else {
        resultado.innerText = mensaje.trim();
        resultado.className = 'error';
    }
}
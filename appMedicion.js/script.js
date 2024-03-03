/*documento script*/
var btn = document.getElementById('button');
var resultados = document.getElementById('resultInfo');

var producto = document.getElementById('producto');
var peso = document.getElementById('peso');
var calorias = document.getElementById('calorias');
var pesoEsperado = document.getElementById('pesoEsperado');

btn.addEventListener('click', function(){
    var infoProdu = producto.value;
    var infoPeso = peso.value;
    var infoCal = calorias.value;
    var user = pesoEsperado.value;


    /* IMPRIME EL PRODUCTO*/
    if(infoProdu.trim() !== ''){
        var nuevaInfoProd = document.createElement('li');
        nuevaInfoProd.textContent = infoProdu;

        resultados.appendChild(nuevaInfoProd);
        infoProdu.value = '';
    }

    /* IMPRIME EL RESUTADO */
    if(infoPeso.trim() !== '' && user.trim() !== ''){
    var nuevaInfoPeso = document.createElement('h3');
    nuevaInfoPeso.textContent = `Hay ${(user * infoCal) / infoPeso} Cal en ${user} gramos`;

    nuevaInfoPeso.classList.add('resultItem');

    resultados.appendChild(nuevaInfoPeso);
    infoPeso.value = '';
    producto.value = '';
    peso.value = '';
    calorias.value = '';
    pesoEsperado.value = '';
    }
});

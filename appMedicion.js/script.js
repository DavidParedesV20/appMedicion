/*documento script*/
var btn = document.getElementById('button');
var resultados = document.getElementById('resultInfo');

var producto = document.getElementById('producto');
var peso = document.getElementById('peso');
var calorias = document.getElementById('calorias');

btn.addEventListener('click', function(){
    var infoProdu = producto.value;
    var infoPeso = peso.value;
    var infoCal = calorias.value;


    /* IMPRIME EL PRODUCTO*/
    if(infoProdu.trim() !== ''){
        var nuevaInfoProd = document.createElement('li');
        nuevaInfoProd.textContent = infoProdu;

        resultados.appendChild(nuevaInfoProd);
        infoProdu.value = '';
    }

    /* IMPRIME EL RESUTADO */
    if(infoPeso.trim() !== ''){
    var nuevaInfoPeso = document.createElement('li');
    nuevaInfoPeso.textContent = (100 * infoCal) /infoPeso;

    resultados.appendChild(nuevaInfoPeso);
    infoPeso.value = '';

    }
});

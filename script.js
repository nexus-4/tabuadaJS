const inputnumero = document.getElementById('textnumero'); 
const gerar = document.getElementById('resBtn');
const tabuada = document.getElementById('itabuada');


gerar.onclick = function() {
    if (inputnumero.value.length == 0) {
        window.alert('Por favor, digite um numero.');
    } else {
        let x = 1;
        const numero = Number(inputnumero.value);
        tabuada.innerHTML = '';
        while(x <= 10) {
            let item = document.createElement('option');
            item.text = `${numero} x ${x} = ${numero * x}`;
            x++;
            tabuada.appendChild(item);
        }
    }
}

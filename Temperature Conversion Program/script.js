function conversion(){
    let temperature = document.getElementById('temperature').value;
    let result = document.getElementById('result');
    let FtoC = document.getElementById('FtoC').checked;
    let CtoF = document.getElementById('CtoF').checked;

    if( temperature == ''){
        result.style.color = 'red';
        result.textContent = 'The value for temperature cannot be Empty'
    }

    else if( FtoC == false && CtoF == false ){
        result.style.color = 'red';
        result.textContent = 'Please choose one conversion method'
    }

    else{
        if(FtoC == true){
            let conversion = (temperature - 32) * (5/9);
            conversion = String(conversion);
            conversion = conversion.slice(0,5);
            result.style.color = 'green'
            result.textContent = `The temperature in Celsius is ${conversion}℃` 
        }
        else if(CtoF == true){
            let conversion = (9/5 * temperature) + 32;
            conversion = String(conversion);
            conversion = conversion.slice(0,5)
            result.style.color = 'green'
            result.textContent = `The temperature in Fahrenheit is ${conversion}℉`
        }
    }

}

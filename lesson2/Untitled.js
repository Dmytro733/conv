var uan = document.querySelector('#UAN'),
    usd = document.querySelector('#USD'),
    eur = document.querySelector('#EUR');


uan.addEventListener('input',()  =>{
    let request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/conve.json');
    request.send();

    request.addEventListener('readystatechange',function(){
        if(request.readyState == 4 && request.status == 200 ){
            let data = JSON.parse(request.response);

            usd.value = (uan.value / data.usd).toFixed(2);
            eur.value = (uan.value / data.eur).toFixed(2);
        }else{
            usd.value = 'Щось пішло не так';
            eur.value = 'Щось пішло не так';
        }
    });
});

usd.addEventListener('input',()  =>{
    let request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/conve.json');
    request.send();

    request.addEventListener('readystatechange',function(){
        if(request.readyState == 4 && request.status == 200 ){
            let data = JSON.parse(request.response);

            uan.value = (usd.value * data.uan).toFixed(2);
        }else{
            uan.value = 'Щось пішло не так';
        }
    });
});

eur.addEventListener('input',()  =>{
    let request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/conve.json');
    request.send();

    request.addEventListener('readystatechange',function(){
        if(request.readyState == 4 && request.status == 200 ){
            let data = JSON.parse(request.response);

            uan.value = (eur.value * data.uany).toFixed(2);
        }else{
            uan.value = 'Щось пішло не так';
        }
    });
});









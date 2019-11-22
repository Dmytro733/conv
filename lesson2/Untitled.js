var uan = document.querySelector('#UAN'),
    usd = document.querySelector('#USD'),
    eur = document.querySelector('#EUR');


uan.addEventListener('input',()=>{
    let request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5500/conver.json');
    request.send();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState == 4 && request.status == 200 ){
            let data = JSON.parse(request.response);

            usd.value = (uan.value / data.usd).toFixed(2);
            eur.value = (uan.value / data.eur).toFixed(2);
        }else{
            usd.value = 'Щось пішло не так';
            eur.value = 'Щось пішло не так';
        }
        console.log(request.response);
    });
});


usd.addEventListener('input',()=>{
    let request1 = new XMLHttpRequest();

    request1.open('GET', 'http://127.0.0.1:5500/conver.json');
    request1.send();

    request1.addEventListener('readystatechange',()=>{
        if(request1.readyState == 4 && request1.status == 200 ){
            let data = JSON.parse(request1.response);

            uan.value = (usd.value * data.uan).toFixed(2);
            eur.value = (usd.value * data.EUR).toFixed(2);
        }else{
            uan.value = 'Щось пішло не так';
            eur.value = 'Щось пішло не так';
        }
    });
});

eur.addEventListener('input',()=>{
    let request2 = new XMLHttpRequest();

    request2.open('GET', 'http://127.0.0.1:5500/conver.json');
    request2.send();

    request2.addEventListener('readystatechange',()=>{
        if(request2.readyState == 4 && request2.status == 200 ){
            let data = JSON.parse(request2.response);

            uan.value = (eur.value * data.UAN).toFixed(2);
            usd.value =(eur.value * data.USD).toFixed(2);
        }else{
            uan.value = 'Щось пішло не так';
            usd.value = 'Щось пішло не так';
        }
    });
});









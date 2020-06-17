var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var comeaçar = document.getElementById('começar')

var cronometroSeg;
var minutoAtual;
var segundoAtual;

var interval;

console.log('Feito por Wilk Printes');

for(var i = 0; i<60; i++){
    minutos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
}
for(var i = 0; i<60; i++){
    segundos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
}

comeaçar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    interval = setInterval(function(){
        
        segundoAtual--;

        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--;
                segundoAtual = 59;

            }else{
                document.getElementById('music').play();
                clearInterval(interval);
                alert('Acabou!')
                display.childNodes[1].innerHTML = '00:00'
            }

        }
        
        if(minutoAtual<10){
            display.childNodes[1].innerHTML = '0'+minutoAtual+':'+segundoAtual;
        }if(segundoAtual<10){
            display.childNodes[1].innerHTML = +minutoAtual+':0'+segundoAtual;
        }
        

    }, 1000);
})
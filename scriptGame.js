         
            var altura = window.innerHeight;
            var largura = window.innerWidth;
            var vidas = 1
            var tempo = 100
             function EspacoDoGame(){
         
                altura = window.innerHeight;
                largura = window.innerWidth;
                                      }
            console.log(largura, altura)

                var nivel = window.location.search
                nivel.replace('?','')

                var nivelgame = 1500

                if (nivel === "facil"){
                    nivelgame = 1500
                }else if(nivel === "normal"){
                    nivelgame = 1000
                }else if(nivel === "dificil" ){
                    nivelgame = 750
                }
              
              

            var cronometro = setInterval(function(){
                if(tempo > 0 ){
                    tempo--
                    document.getElementById("cronometro").innerHTML = tempo
                }else {
                   
                    clearInterval(cronometro)
                    clearInterval(moscas)
                    window.location.href = 'Vitoria.html'
                }
            }, 1000)

function posicaoAleatoria(){

        if (document.getElementById("moscaid")){

                document.getElementById("moscaid").remove()
            if (vidas > 3){
                window.location.href = 'GameOver.html'
            }else{
                document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";

                vidas ++
            }
        }

        var posicaox = Math.floor(Math.random() * largura - 90);
        var posicaoy = Math.floor(Math.random() * altura - 90);
            posicaox = posicaox < 0 ? 0 : posicaox ; 
            posicaoy = posicaoy < 0 ? 0 : posicaoy;
             console.log(posicaox, posicaoy)

             var mosca = document.createElement('img');
             mosca.id = "moscaid"
             mosca.src = "imagens/mosca.png";
             mosca.className = tamanhoAleatorio() + ladoAleatorio();
             mosca.style.left = posicaox + 'px';
             mosca.style.top = posicaoy + 'px';
             mosca.style.position = 'absolute'; 
             mosca.onclick = function(){
                this.remove()
             }
             document.body.appendChild(mosca)};

             function tamanhoAleatorio(){
                    var classe = Math.floor(Math.random() * 3);

                    switch (classe){
                        case 0 : return 'mosquito1 '


                        case 1 : return 'mosquito2 '


                        case 2 : return 'mosquito3 '
                     } 

             }
            function ladoAleatorio (){
                var lado = Math.floor(Math.random() * 2);

                switch(lado){
                    case 0 : return 'ladoA'

                    case 1 : return 'ladoB'
                }
            }
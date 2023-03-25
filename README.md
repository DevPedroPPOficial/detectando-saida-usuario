# Detectando a saída do usuário
## Eventos de mouse

Alguns sites abrem um modal um pouco antes do usuário sair da página, isso é muito comum em páginas de venda, como uma última tentativa em fazer uma conversão.

Podemos fazer isso usando os eventos de mouse do Javascript, por exemplo "mousemove" e "mouseleave".

Em ambos exemplos, vamos utilizar uma variável global `mouseLeftScreen` pra controlar se o alerta deverá ser exibido ou não, como queremos que seja exibido apenas uma vez, quando isso ocorrer atribuiremos o valor `true` a variável.

Com `mousemove`:

    var mouseLeftScreen = false;

    document.addEventListener('mouseleave', (event) => {
        if (!mouseLeftScreen) {
            mouseLeftScreen = true;
            alert('Calmaê usuário!');
        }
    });

É só escuramos o evento, que será acionado sempre que o usuário sair da tela, já que adicionamos o listener direto no objeto document que é a própria raiz da árvore DOM.

Com `mouseleave`:

    var mouseLeftScreen = false;
    
    window.addEventListener('mousemove', (event) => {
        if (!mouseLeftScreen) {
            if (event.clientX <= 0 || event.clientY <= 0 ||
                event.clientX >= window.innerWidth ||
                event.clientY >= window.innerHeight) {
                mouseLeftScreen = true;
                alert('Calmaê usuário!');
            }
        }
    }); 

Dessa outra forma, precisamos usar as variáveis `clientX` e `clientY` pra verificar o posição do cursor do mouse na tela. Se o cursor estiver próximo ou ultrapassando as extremidades da tela, chamamos o alerta.

   const burgerIcon = document.getElementById('burger-menu');
    const menu = document.getElementById('burger');

    function ativar() {
        // Alterna a visibilidade do menu
        menu.classList.toggle('mostrar-menu');

        // Muda a cor do ícone quando ativado
        burgerIcon.classList.toggle('ativo');
    }

    burgerIcon.addEventListener('click', ativar);
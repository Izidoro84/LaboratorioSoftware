window.onload = function () {
    // Criação dos elementos com JavaScript
    const container = document.getElementById('contador');
    container.style.width = '300px';
    container.style.margin = '0 auto';
    container.style.padding = '20px';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    container.style.textAlign = 'center';
    container.style.fontFamily = 'Arial, sans-serif';

    // Título "Total"
    const tituloTotal = document.createElement('h1');
    tituloTotal.textContent = 'Total';
    tituloTotal.style.marginBottom = '10px';
    container.appendChild(tituloTotal);

    // Contador Total
    const contadorTotal = document.createElement('div');
    contadorTotal.id = 'total';
    contadorTotal.textContent = 0;
    contadorTotal.style.fontSize = '24px';
    contadorTotal.style.padding = '10px';
    contadorTotal.style.border = '2px solid #000';
    contadorTotal.style.borderRadius = '5px';
    contadorTotal.style.display = 'inline-block';
    contadorTotal.style.marginBottom = '20px';
    container.appendChild(contadorTotal);

    // Botão de Reset
    const btnReset = document.createElement('button');
    btnReset.textContent = '⟳';
    btnReset.style.marginLeft = '10px';
    btnReset.style.fontSize = '18px';
    btnReset.style.cursor = 'pointer';
    btnReset.style.border = 'none';
    btnReset.style.background = 'transparent';
    btnReset.onclick = function () {
        document.getElementById('homens').textContent = 0;
        document.getElementById('mulheres').textContent = 0;
        contadorTotal.textContent = 0;
    };
    container.appendChild(btnReset);

    // Seção de Homens e Mulheres
    const secao = document.createElement('div');
    secao.style.display = 'flex';
    secao.style.justifyContent = 'space-around';
    secao.style.marginTop = '20px';
    container.appendChild(secao);

    // Função para criar uma seção (Homens ou Mulheres)
    function criarSecao(titulo, id, svgIcon) {
        const secao = document.createElement('div');
        secao.style.textAlign = 'center';

        const imgContainer = document.createElement('div');
        imgContainer.innerHTML = svgIcon;
        imgContainer.style.width = '80px';
        imgContainer.style.height = '80px';
        secao.appendChild(imgContainer);

        const tituloSecao = document.createElement('h3');
        tituloSecao.textContent = titulo;
        tituloSecao.style.marginTop = '10px';
        secao.appendChild(tituloSecao);

        const contadorSecao = document.createElement('div');
        contadorSecao.id = id;
        contadorSecao.textContent = 0;
        contadorSecao.style.fontSize = '20px';
        contadorSecao.style.padding = '10px';
        contadorSecao.style.border = '2px solid #000';
        contadorSecao.style.borderRadius = '5px';
        contadorSecao.style.display = 'inline-block';
        contadorSecao.style.marginBottom = '10px';
        secao.appendChild(contadorSecao);

        // Criação dos botões "+" e "-"
        const botoesContainer = document.createElement('div');
        botoesContainer.style.marginTop = '10px';

        const btnMais = document.createElement('button');
        btnMais.textContent = '+';
        btnMais.style.backgroundColor = '#4CAF50';
        btnMais.style.border = 'none';
        btnMais.style.color = 'white';
        btnMais.style.padding = '10px';
        btnMais.style.borderRadius = '50%';
        btnMais.style.marginRight = '5px';
        btnMais.style.cursor = 'pointer';
        btnMais.style.fontSize = '16px';
        btnMais.onclick = function () {
            let total = parseInt(contadorTotal.textContent);
            let contador = parseInt(contadorSecao.textContent);
            contadorSecao.textContent = ++contador;
            contadorTotal.textContent = ++total;
        };
        botoesContainer.appendChild(btnMais);

        const btnMenos = document.createElement('button');
        btnMenos.textContent = '-';
        btnMenos.style.backgroundColor = '#f44336';
        btnMenos.style.border = 'none';
        btnMenos.style.color = 'white';
        btnMenos.style.padding = '10px';
        btnMenos.style.borderRadius = '50%';
        btnMenos.style.marginLeft = '5px';
        btnMenos.style.cursor = 'pointer';
        btnMenos.style.fontSize = '16px';
        btnMenos.onclick = function () {
            let total = parseInt(contadorTotal.textContent);
            let contador = parseInt(contadorSecao.textContent);
            if (contador > 0) {
                contadorSecao.textContent = --contador;
                contadorTotal.textContent = --total;
            }
        };
        botoesContainer.appendChild(btnMenos);

        secao.appendChild(botoesContainer);

        return secao;
    }

    // Ícones SVG para homens e mulheres
    const svgHomem = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="4" r="4"></circle>
            <path d="M12 8c-4 0-8 4-8 8v4h16v-4c0-4-4-8-8-8z"></path>
        </svg>
    `;

    const svgMulher = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="4" r="4"></circle>
            <path d="M12 8c-4 0-8 4-8 8v4h16v-4c0-4-4-8-8-8z"></path>
            <path d="M8 18v4h8v-4"></path>
        </svg>
    `;

    // Adiciona seções de homens e mulheres
    const secaoHomens = criarSecao('Homens', 'homens', svgHomem);
    const secaoMulheres = criarSecao('Mulheres', 'mulheres', svgMulher);

    secao.appendChild(secaoHomens);
    secao.appendChild(secaoMulheres);
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONFIGURAÇÃO DOS LINKS DO GOOGLE DRIVE ---
    // Cole aqui os links DIRETOS gerados no passo a passo acima.
    // É importante manter a ordem correta (Ep 1, Ep 2, Ep 3...)
   const pathsPersonalizados = [
        "https://drive.google.com/file/d/1sKkB6Wbs7NN2FVR3NgZuTBNAwgX3MRMz/preview",
         "https://drive.google.com/file/d/14Zoq1eHY79xKYRVhdiJApaFlTmizoGbO/preview",
         "https://drive.google.com/file/d/13-HTw-Ny8O94zQq1h33kpKXy2oAGat0Y/preview",
         "https://drive.google.com/file/d/11x8sWr4X6zJKTMMyqy2HIl1l6Rrl0by6/preview",
         "https://drive.google.com/file/d/1_rydJ3XmQWxeZ5_3ISCxmZpDFxIkeRpo/preview",
         "https://drive.google.com/file/d/14UclVMCEnbDHkIvubHvlP2zXUM-_K9-A/preview",
         "https://drive.google.com/file/d/1GK_8zZhbCQMx2ivmX2G1PRxaiD9E8tuV/preview",
         "https://drive.google.com/file/d/1hmilQAcyCA3ry5A8ffA_pocgzJulO_SY/preview",
         "https://drive.google.com/file/d/1Ow6TEkQm5TYHnTVEkWvAthudzU6tyQNy/preview",
         "https://drive.google.com/file/d/1poP60WXSYcbUHS0mqNoDdvpSOEjPv4hf/preview",
         "https://drive.google.com/file/d/1DK_DS4h5CJtPzLtz1Bjk7XXG9vUDSLxZ/preview",
         "https://drive.google.com/file/d/1IgE6t2PT5LTlAaWGEBIZwEgKmqFBVp7x/preview",
         "https://drive.google.com/file/d/14sSukDSVRTpeLIx6Fw9ltTJOJfj_FZrn/preview",
         "https://drive.google.com/file/d/1SPiT9XLUFSCc-_-AE-v2m_2jeGrS8taK/preview",
         "https://drive.google.com/file/d/1HSj4Gd5NSvMN5xL0JprfdIJwJivq1vWR/preview",
         "https://drive.google.com/file/d/1Y-DUr5b24eIwXx1b_TVw4qmq8PsxSQ4s/preview",
         "https://drive.google.com/file/d/1qp7NVcV2_rz6tvi9zUknqKUiLuQ6C3VL/preview",
         "https://drive.google.com/file/d/1uGtchVLWDpPW1a5o8otkj_MaviALo2Uj/preview",
         "https://drive.google.com/file/d/16tQJk1bQQiEQOkOdDVn-fCV4O6bV4QQ2/preview",
         "https://drive.google.com/file/d/1YlQIULdouN8Kq7TdZOD08wzCCu7j0tcm/preview",
         "https://drive.google.com/file/d/1HLayKYZYsOgpOyDj4k0ExTiabO_rSNYB/preview",
         "https://drive.google.com/file/d/1eCUMs52azD-YeGuiOiY--x9gnxHJtUdy/preview",
         "https://drive.google.com/file/d/1s7K_sKXhqxEisFREC1cNIXcEUiMcvL7c/preview",
         "https://drive.google.com/file/d/1eTNycKT1N7V8lnXFZONenloP3UlrR1uZ/preview",
         "https://drive.google.com/file/d/1FjD8WyJJzNkQ2Uj9cV6uQ5D-RKXLH7Ld/preview",
         "https://drive.google.com/file/d/1E8aaKk9fC_5YT2GNpgrLIouWNfoKGnwS/preview",
         "https://drive.google.com/file/d/1OoyMPjcUmiC4RYzXCeu50CroLtEow3zZ/preview",
         "https://drive.google.com/file/d/18uk9mZJZqbCDaOTKwrs_xR9zXWfo-59Y/preview",
         
    ];

    const TOTAL_EPISODIOS = 153;
    const episodios = [];

    // Gerador da lista completa
    for (let i = 1; i <= TOTAL_EPISODIOS; i++) {
        episodios.push({
            numero: i,
            titulo: `Episódio ${i}`,
            // Pega o link do array acima. Se você não preencheu ainda, ele deixa vazio para não dar erro.
            path: pathsPersonalizados[i - 1] || "" 
        });
    }

    // --- VARIÁVEIS DE CONTROLE ---
    const episodiosPorPagina = 30;
    let paginaAtual = 1;
    let episodioAtualAssistindo = null;

    // --- ELEMENTOS DO DOM ---
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    const viewLista = document.getElementById('episode-list-view');
    const viewPlayer = document.getElementById('player-view');
    const gridEpisodios = document.getElementById('episode-grid');
    const paginationContainer = document.getElementById('pagination');
    
    const btnBack = document.getElementById('btn-back');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const titlePlayer = document.getElementById('current-episode-title');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    // --- LÓGICA DE CARREGAMENTO (LOADING) ---
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            renderizarGrade();
            renderizarPaginacao();
        }, 500);
    }, 2000); 

    // --- FUNÇÕES DA GRADE E PAGINAÇÃO ---
    function renderizarGrade() {
        gridEpisodios.innerHTML = "";
        
        const indexInicio = (paginaAtual - 1) * episodiosPorPagina;
        const indexFim = indexInicio + episodiosPorPagina;
        const episodiosDaPagina = episodios.slice(indexInicio, indexFim);

        episodiosDaPagina.forEach(ep => {
            const card = document.createElement('div');
            card.className = 'episode-card';
            card.innerHTML = `<h3>${ep.titulo}</h3>`;
            card.addEventListener('click', () => abrirPlayer(ep.numero));
            gridEpisodios.appendChild(card);
        });
    }

    function renderizarPaginacao() {
        paginationContainer.innerHTML = "";
        const totalPaginas = Math.ceil(TOTAL_EPISODIOS / episodiosPorPagina);

        for (let i = 1; i <= totalPaginas; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === paginaAtual ? 'active' : ''}`;
            btn.innerText = i;
            btn.addEventListener('click', () => {
                paginaAtual = i;
                renderizarGrade();
                renderizarPaginacao();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(btn);
        }
    }

   // --- FUNÇÕES DO PLAYER DE VÍDEO ---
    function abrirPlayer(numeroEpisodio) {
        episodioAtualAssistindo = numeroEpisodio;
        const epDados = episodios[numeroEpisodio - 1]; 

        titlePlayer.innerText = epDados.titulo;
        
        if(epDados.path === "") {
            alert("O link de vídeo deste episódio ainda não foi adicionado.");
            return;
        }

        // Para o iframe, basta mudar o src diretamente
        const videoPlayer = document.getElementById('video-player');
        videoPlayer.src = epDados.path;

        viewLista.classList.add('hidden');
        viewPlayer.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        atualizarBotoesNavegacao();
    }

    function fecharPlayer() {
        const videoPlayer = document.getElementById('video-player');
        // Limpa o src para o vídeo parar de tocar em segundo plano
        videoPlayer.src = ""; 
        viewPlayer.classList.add('hidden');
        viewLista.classList.remove('hidden');
    }

    function atualizarBotoesNavegacao() {
        btnPrev.disabled = episodioAtualAssistindo === 1;
        btnNext.disabled = episodioAtualAssistindo === TOTAL_EPISODIOS;
    }

    // --- EVENTOS DE CLIQUE DO PLAYER ---
    btnBack.addEventListener('click', fecharPlayer);

    btnPrev.addEventListener('click', () => {
        if (episodioAtualAssistindo > 1) {
            abrirPlayer(episodioAtualAssistindo - 1);
        }
    });

    btnNext.addEventListener('click', () => {
        if (episodioAtualAssistindo < TOTAL_EPISODIOS) {
            abrirPlayer(episodioAtualAssistindo + 1);
        }
    });
});
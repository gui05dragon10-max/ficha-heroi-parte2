// ==========================================
// 1. EFEITO DE SCROLL NO MENU DE NAVEGAÇÃO
// ==========================================
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menuNav');
    
    if (window.scrollY > 30) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 2. INTERAÇÃO "VER MAIS" NA SEÇÃO SOBRE
    // ==========================================
    const btnVerMais = document.getElementById("btnVerMais");
    const textoExtra = document.getElementById("textoExtra");

    if (btnVerMais && textoExtra) {
        textoExtra.style.display = "none";

        btnVerMais.addEventListener("click", function () {
            // Operador ternário para alternar visibilidade (Requisito da Parte 2)
            let estaVisivel = textoExtra.style.display === "block";
            
            textoExtra.style.display = estaVisivel ? "none" : "block";
            btnVerMais.textContent = estaVisivel ? "Ver história completa" : "Ver menos";
        });
    }

    // ==========================================
    // 3. BARRA DE XP E EVOLUÇÃO DE ATRIBUTOS
    // ==========================================
    let nivelAtual = 1;
    let xpAtual = 30;
    const xpMaximo = 100;

    // Objeto guardando os atributos base do Leon
    const atributosLeon = {
        forca: { base: 70, bonus: 5, elVal: "val-for", elBar: "bar-for" },
        agilidade: { base: 45, bonus: 3, elVal: "val-agi", elBar: "bar-agi" },
        vitalidade: { base: 75, bonus: 4, elVal: "val-vit", elBar: "bar-vit" },
        defesa: { base: 78, bonus: 6, elVal: "val-def", elBar: "bar-def" },
        fe: { base: 85, bonus: 7, elVal: "val-fth", elBar: "bar-fth" }
    };

    const btnGanharXp = document.getElementById("btnGanharXp");
    const barraProgressoXp = document.getElementById("barraProgressoXp");
    const textoXp = document.getElementById("textoXp");
    const nivelHeroiEl = document.getElementById("nivelHeroi");
    const mensagemLevelUp = document.getElementById("mensagemLevelUp");

    if (btnGanharXp && barraProgressoXp) {
        btnGanharXp.addEventListener("click", function () {
            xpAtual += 25;

            // Verifica se atingiu ou ultrapassou 100 XP (Condicional de Level Up)
            if (xpAtual >= xpMaximo) {
                nivelAtual++;
                xpAtual = xpAtual - xpMaximo; // Mantém o excedente de XP para o próximo nível

                if (nivelHeroiEl) nivelHeroiEl.textContent = nivelAtual;
                if (mensagemLevelUp) {
                    mensagemLevelUp.textContent = `✨ NÍVEL UP! Leon subiu para o Nível ${nivelAtual} (+5 em todos os atributos)!`;
                    mensagemLevelUp.style.color = "#4caf50";
                }

                // Evolui cada atributo na tabela e anima a barra visual
                for (let chave in atributosLeon) {
                    let attr = atributosLeon[chave];
                    attr.base += 5;

                    const celulaValor = document.getElementById(attr.elVal);
                    const barraVisual = document.getElementById(attr.elBar);

                    if (celulaValor) celulaValor.textContent = attr.base;
                    if (barraVisual) {
                        // Limita a largura visual da barra a 100% para não vazar da tabela
                        let larguraTotal = Math.min(attr.base + attr.bonus, 100);
                        barraVisual.style.width = larguraTotal + "%";
                    }
                }

                // Atualiza também o HP e Dano no card de combate
                const statHp = document.getElementById("stat-hp");
                const statFis = document.getElementById("stat-fis");
                if (statHp) statHp.textContent = (6850 + (nivelAtual - 1) * 450).toLocaleString("pt-BR");
                if (statFis) statFis.textContent = 420 + (nivelAtual - 1) * 35;

            } else {
                // Feedback imediato de ganho de XP sem subir de nível ainda
                if (mensagemLevelUp) {
                    mensagemLevelUp.textContent = "⚔️ Missão concluída! +25 XP recebidos.";
                    mensagemLevelUp.style.color = "gold";
                }
            }

            // Atualiza a barra e o texto de XP
            let porcentagem = (xpAtual / xpMaximo) * 100;
            barraProgressoXp.style.width = porcentagem + "%";
            if (textoXp) textoXp.textContent = `${xpAtual} / ${xpMaximo} XP`;
        });
    }

    // ==========================================
    // 4. HABILIDADES DINÂMICAS COM IMAGENS MAIORES
    // ==========================================
    const habilidadesDados = [
        { nome: "Golpe Luminoso", desc: "Um ataque básico fortalecido com energia divina, causando dano físico e mágico de luz.", imagem: "imagens/H-Luminoso.jpg" },
        { nome: "Proteção Divina", desc: "Um bônus defensivo (buff) que aumenta a resistência do personagem contra feitiços e ataques sombrios.", imagem: "imagens/H-Divino.jpg" },
        { nome: "Escudo da Fé", desc: "Invoca uma barreira dourada que absorve danos diretos por alguns segundos.", imagem: "imagens/Escudo.jpg" },
        { nome: "Lâmina Purificadora", desc: "Um golpe devastador em área que varre os inimigos à frente com uma onda de luz.", imagem: "imagens/H-Lamina.jpg" },
        { nome: "Despertar do Santo", desc: "Uma habilidade de aprimoramento que amplifica temporariamente o dano e a velocidade de ataque do usuário.", imagem: "imagens/H-Despertar.jpg" },
        { nome: "Claridade Mental", desc: "Uma habilidade focado em restaurar pontos de Mana para permitir o uso contínuo de magias.", imagem: "imagens/H-Mental.jpg" },
        { nome: "Toque Curativo", desc: "Magia de cura primária que restaura instantaneamente uma grande quantidade de Pontos de Vida (HP).", imagem: "imagens/H-Curativo.jpg" },
        { nome: "Renovação", desc: "Uma bênção secundária que concede regeneração contínua de vida ao longo do tempo.", imagem: "imagens/H-Renovação.jpg" }
    ];

    const containerHabilidadesDinamicas = document.getElementById("containerHabilidadesDinamicas");

    if (containerHabilidadesDinamicas) {
        containerHabilidadesDinamicas.innerHTML = ""; // Limpa antes de gerar

        habilidadesDados.forEach(hab => {
            const card = document.createElement("div");
            card.classList.add("card-habilidade-nova"); // Classe exclusiva para o novo layout
            
            card.innerHTML = `
                <img src="${hab.imagem}" alt="${hab.nome}" class="img-habilidade-nova">
                <div class="info-habilidade">
                    <h3>${hab.nome}</h3>
                    <p>${hab.desc}</p>
                </div>
            `;
            containerHabilidadesDinamicas.appendChild(card);
        });
    }

    // ==========================================
    // 5. INVENTÁRIO DINÂMICO COM FILTROS E CONTADOR
    // ==========================================
    const inventarioDados = [
        { nome: "Espada Sagrada", tipo: "Arma", raridade: "Lendário", desc: "Lâmina pesada de duas mãos com aura dourada e sagrada.", imagem: "imagens/Espada.JPG" },
        { nome: "Armadura do Solstício", tipo: "Armadura", raridade: "Lendário", desc: "Placas em tom branco imaculado com filigranas em ouro e runas.", imagem: "imagens/Peitoral.jpg" },
        { nome: "Ombreiras do Solstício", tipo: "Armadura", raridade: "Lendário", desc: "Múltiplas camadas de metal sobrepostas para desviar golpes.", imagem: "imagens/Ombreiras.jpg" },
        { nome: "Manoplas do Solstício", tipo: "Armadura", raridade: "Lendário", desc: "Articuladas e reforçadas para firmeza na empunhadura.", imagem: "imagens/Manoplas.jpg" },
        { nome: "Vestes Eclesiásticas", tipo: "Vestimenta", raridade: "Lendário", desc: "Tabardo branco reforçado com couro e bordados em ouro.", imagem: "imagens/Tabardo.jpg" },
        { nome: "Capa do Solstício", tipo: "Vestimenta", raridade: "Lendário", desc: "Capa longa branca resistente ao clima hostil do combate.", imagem: "imagens/Capa.jpg" }
    ];

    const containerInventarioDinamico = document.getElementById("containerInventarioDinamico");
    const contadorInventario = document.getElementById("contadorInventario");

    function renderizarInventario(itensParaMostrar) {
        if (!containerInventarioDinamico) return;
        
        containerInventarioDinamico.innerHTML = ""; 

        itensParaMostrar.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card-inventario");
            
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="img-inventario">
                <div class="info-inventario">
                    <h3>${item.nome}</h3>
                    <span class="tag-tipo">${item.tipo} - ${item.raridade}</span>
                    <p>${item.desc}</p>
                </div>
            `;
            containerInventarioDinamico.appendChild(card);
        });

        // Atualiza o contador dinâmico automaticamente
        if (contadorInventario) {
            contadorInventario.textContent = `(${itensParaMostrar.length} itens)`;
        }
    }

    // Renderiza tudo inicialmente
    renderizarInventario(inventarioDados);

    // Sistema de cliques nos botões de filtro
    const botoesFiltro = document.querySelectorAll(".btn-filtro");
    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", function () {
            // Remove a classe ativo de todos e adiciona no clicado
            botoesFiltro.forEach(b => b.classList.remove("ativo"));
            this.classList.add("ativo");

            const categoria = this.getAttribute("data-filtro");

            if (categoria === "todos") {
                renderizarInventario(inventarioDados);
            } else {
                // Filtra o array usando o método .filter()
                const itensFiltrados = inventarioDados.filter(item => item.tipo === categoria);
                renderizarInventario(itensFiltrados);
            }
        });
    });

    // ==========================================
    // 6. CONQUISTAS DINÂMICAS COM CONTADOR
    // ==========================================
    const conquistasDados = [
        { titulo: "A Conquista do Templo do Solstício", imagem: "imagens/Templo.jpg", link: "Templo.html" },
        { titulo: "O Cerco da Fortaleza de Ghash-Dûr", imagem: "imagens/Ghash-Dur.jpg", link: "Fortaleza.html" },
        { titulo: "A Exploração de Sarnanor", imagem: "imagens/Ruinas.jpg", link: "Ruinas.html" },
        { titulo: "A Batalha de Minas-Gûl", imagem: "imagens/Castelo.jpg", link: "Minas-Gûl.html" }
    ];

    const containerConquistasDinamicas = document.getElementById("containerConquistasDinamicas");
    const contadorConquistas = document.getElementById("contadorConquistas");

    if (containerConquistasDinamicas) {
        containerConquistasDinamicas.innerHTML = ""; 

        conquistasDados.forEach(conq => {
            const card = document.createElement("div");
            card.classList.add("card-conquista-nova");
            
            card.innerHTML = `
                <img src="${conq.imagem}" alt="${conq.titulo}" class="img-conquista-nova">
                <div class="info-conquista">
                    <h3>${conq.titulo}</h3>
                    <a href="${conq.link}" class="botaol">Saiba mais</a>
                </div>
            `;
            containerConquistasDinamicas.appendChild(card);
        });

        if (contadorConquistas) {
            contadorConquistas.textContent = `(${conquistasDados.length} concluídas)`;
        }
    }

    // ==========================================
    // 7. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (SEM ALERT)
    // ==========================================
    const formContato = document.querySelector(".form-contato");
    
    if (formContato) {
        const mensagemFeedback = document.createElement("div");
        mensagemFeedback.style.marginTop = "10px";
        mensagemFeedback.style.fontWeight = "bold";
        formContato.appendChild(mensagemFeedback);

        formContato.addEventListener("submit", function (evento) {
            evento.preventDefault(); // Impede o envio padrão (Requisito obrigatório)

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                mensagemFeedback.textContent = "❌ Por favor, preencha todos os campos obrigatórios!";
                mensagemFeedback.style.color = "red";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                mensagemFeedback.textContent = "❌ Insira um e-mail válido (ex: seuemail@exemplo.com)!";
                mensagemFeedback.style.color = "red";
                return;
            }

            mensagemFeedback.textContent = "✅ Mensagem enviada com sucesso para a Guilda, Viajante!";
            mensagemFeedback.style.color = "lightgreen";
            formContato.reset();
        });
    }

});


const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});
if (btnTopo) {
    btnTopo.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

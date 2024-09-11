function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.Você precisa digitar palavras chaves relacionadas.</p>"
        return 
    }

    campoPesquisa= campoPesquisa.toLowerCase()v

    //console.log(campoPesquisa);
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags ="";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags =dado.tags.toLowerCase()

      //se no titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) || tags.includes
      (campoPesquisa)) {
        // Cria um novo elemento HTML para cada dado, formatando-o como um item de resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }

      
      
    }

    if (!resultados) {
        resultados ="<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }

// Camel Case:
//firstName
//lastName
//totalPrice
//isCompleted




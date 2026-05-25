function adicionarTarefa() {
  // 1. Pegar o que foi digitado no campo de texto
  const input = document.getElementById("nova-tarefa");
  const textoTarefa = input.value.trim();

  // 2. Se o usuário não digitar nada, avisa e não faz nada
  if (textoTarefa === "") {
    alert("Por favor, digite alguma tarefa antes de adicionar! 🛡️");
    return;
  }

  // 3. Pegar a lista (UL) onde as tarefas vão ficar
  const lista = document.getElementById("lista-tarefas");

  // 4. Criar um novo item de lista (LI)
  const novaLinha = document.createElement("li");
  
  // 5. Colocar o texto e o botão de apagar dentro da LI
  novaLinha.innerHTML = `
    <span>${textoTarefa}</span>
    <button class="btn-deletar" onclick="deletarTarefa(this)">X</button>
  `;

  // 6. Colocar esse novo item dentro da nossa lista na tela
  lista.appendChild(novaLinha);

  // 7. Limpar o campo de texto para a próxima tarefa
  input.value = "";
}

function deletarTarefa(botao) {
  // Remove a linha (LI) que é "mãe" do botão que foi clicado
  botao.parentElement.remove();
}

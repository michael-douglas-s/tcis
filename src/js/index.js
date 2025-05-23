function adicionarCampoImagem() {
    const container = document.getElementById('fotos-container');

    const div = document.createElement('div');
    div.classList.add('foto-item');

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    // input.capture = 'environment';

    const img = document.createElement('img');
    img.style.display = 'none';

    const textarea = document.createElement('textarea');
    textarea.name = 'descricao_imagem[]';
    textarea.placeholder = 'Descreva a imagem...';

    input.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          img.src = e.target.result;
          img.style.display = 'block';
        }
        reader.readAsDataURL(file);
      }
    });

    div.appendChild(input);
    div.appendChild(img);
    div.appendChild(textarea);
    container.appendChild(div);
  }

  window.onload = adicionarCampoImagem;


//  ADD FOTOS

function adicionarCampoImagem() {
  // Criar um input que aceita múltiplas imagens
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;

  input.onchange = function () {
    const arquivos = input.files;
    const container = document.getElementById('fotos-container');

    Array.from(arquivos).forEach(arquivo => {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Criar um elemento para a imagem e descrição
        const div = document.createElement('div');
        div.className = 'foto-item';

        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '150px';
        img.style.objectFit = 'contain';

        const textarea = document.createElement('textarea');
        textarea.name = 'descricao_imagem[]';
        textarea.placeholder = 'Descrição da imagem';

        // Campo oculto com a imagem em base64 (caso deseje enviar depois)
        const inputHidden = document.createElement('input');
        inputHidden.type = 'hidden';
        inputHidden.name = 'imagem_base64[]';
        inputHidden.value = e.target.result;

        div.appendChild(img);
        div.appendChild(textarea);
        div.appendChild(inputHidden);
        container.appendChild(div);
      }

      reader.readAsDataURL(arquivo);
    });
  };

  input.click(); // Abre o seletor de arquivos
}


// PDF

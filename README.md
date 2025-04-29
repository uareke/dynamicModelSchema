[PT-br]
📚 Dynamic Model Binding with Live Preview (addEvents Function)
Este guia ensina como integrar o sistema de binding dinâmico que conecta inputs HTML com um modelo de dados em JavaScript, e ainda atualiza visualmente valores em elementos data-result.

✨ Objetivo
Atualizar o model em tempo real enquanto o usuário digita ou altera campos.

Mostrar o valor digitado em um <p> (ou outro elemento) com data-result.

Exemplo funcional:

Usuário preenche <input id="brand" />

O valor aparece automaticamente em <p data-result="brand"></p>.

E o model é atualizado dinamicamente.

🛠️ Como usar
1. Estruture seu HTML
Você precisa criar:

Um campo de input, select, textarea, checkbox ou radio com um id correspondente ao nome da propriedade do modelo.

Um elemento com o atributo data-result="nomePropriedade" onde o valor será exibido.

Exemplo:
```
<div>
    <label>Brand</label>
    <input id="brand" name="brand" type="text">
    <p data-result="brand"></p> <!-- Aqui será mostrado o valor digitado -->
</div>
```

2. Crie seu Model
Seu model pode ser um objeto simples ou ter um método applyProperty para aplicar regras.

Exemplo básico:

```
class VehicleModel {
    constructor() {
        this.brand = null;
        this.model = null;
        this.year = null;
    }
}
```

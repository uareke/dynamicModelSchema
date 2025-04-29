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
3. Inicializar no seu Sistema
No seu JavaScript principal, chame:
```
const model = new VehicleModel();

// Considerando que "this" seja um objeto ou classe que contém addEvents
this.addEvents(model);
```

Pronto! Agora o sistema irá:

Atualizar o objeto model conforme o usuário digitar.

Preencher automaticamente os elementos data-result.

📋 Observações importantes
Os id dos inputs devem ser iguais aos nomes das propriedades do objeto model.

O data-result também deve usar o nome da propriedade.

Caso use jQuery para select, a função já suporta isso.

Se o seu model tiver regras específicas para atualizar (applyProperty), elas serão respeitadas.

Caso queira fazer animações ou destacar o <p> ao mudar o valor, é possível adicionar facilmente depois.

✅ Exemplo Final Visual

Html:
```
<div>
    <label>Brand:</label>
    <input id="brand" type="text">
    <p data-result="brand"></p>
</div>
```

Javascript:
```
const model = new VehicleModel();
addEvents(model);

// Quando o usuário digitar "Toyota", o model.brand = "Toyota" 
// E o <p> aparecerá "Toyota"
```

[En-Us]
📚 Dynamic Model Binding with Live Preview (addEvents Function)
This guide teaches you how to integrate the dynamic binding system that connects HTML inputs with a JavaScript model, and also live-updates values in data-result elements.

✨ Objective
Update the model in real-time as the user types or changes fields.

Display the typed value inside a <p> (or any other element) with data-result.

Functional example:

User fills <input id="brand" />

The value automatically appears in <p data-result="brand"></p>.

And the model is dynamically updated.

🛠️ How to Use
1. Structure your HTML
You must create:

An input, select, textarea, checkbox, or radio element with an id that matches the property name from your model.

An element with the attribute data-result="propertyName" where the value will be displayed.

Example:
```
<div>
    <label>Brand</label>
    <input id="brand" name="brand" type="text">
    <p data-result="brand"></p> <!-- The typed value will appear here -->
</div>

```

2. Create your Model
Your model can be a simple object or a class that has an applyProperty method to apply custom rules.

Basic example:

```
class VehicleModel {
    constructor() {
        this.brand = null;
        this.model = null;
        this.year = null;
    }
}

```

3. Initialize it in your System
In your main JavaScript code, call:
```
const model = new VehicleModel();

// Assuming "this" is an object or class that contains addEvents
this.addEvents(model);
```
Done! Now the system will:

Update the model object as the user types.

Automatically fill in the corresponding data-result elements.

📋 Important Notes
Input ids must match the property names of the model.

data-result must also use the property name.

If you use jQuery for select, the function already supports it.

If your model has specific update rules (applyProperty), they will be respected.

You can easily add animations or highlights to the <p> when the value changes if needed.

✅ Final Visual Example

Html:
``` 
<div>
    <label>Brand:</label>
    <input id="brand" type="text">
    <p data-result="brand"></p>
</div>

```

Javascript:
```
const model = new VehicleModel();
addEvents(model);

// When the user types "Toyota", model.brand = "Toyota"
// And the <p> will show "Toyota"
```

🔥 Ready to Use!
This system makes it easy to manage large forms without having to manually write multiple getElementById calls.

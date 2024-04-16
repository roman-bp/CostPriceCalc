// script.js

function addComponent() {
    var componentsDiv = document.getElementById('components');

    var newComponentDiv = document.createElement('div');
    newComponentDiv.classList.add('component');

    newComponentDiv.innerHTML = `
        <div class="input-group">
            <label for="componentName">Название компонента:</label>
            <input type="text" name="componentName" required>
        </div>
        <div class="input-group">
            <label for="componentQuantity">Количество:</label>
            <input type="number" name="componentQuantity" required>
        </div>
        <div class="input-group">
            <label for="componentPrice">Цена за единицу:</label>
            <input type="number" name="componentPrice" required>
        </div>
        <button type="button" class="remove-button" onclick="removeComponent(this)">Удалить компонент</button>
    `;

    componentsDiv.appendChild(newComponentDiv);
}

function removeComponent(button) {
    var componentDiv = button.parentElement;
    componentDiv.parentElement.removeChild(componentDiv);
}

function calculateCost() {
    var components = document.querySelectorAll('#components .component');

    var totalCost = 0;

    components.forEach(function(component) {
        var quantity = parseFloat(component.querySelector('[name="componentQuantity"]').value);
        var price = parseFloat(component.querySelector('[name="componentPrice"]').value);

        if (!isNaN(quantity) && !isNaN(price)) {
            totalCost += quantity * price;
        }
    });

    document.getElementById('result').innerHTML = "Себестоимость продукта: " + totalCost.toFixed(2) + " uhy.";
}

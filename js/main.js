const ingredients = [
    {
        name: 'Ananás',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/an.png',
        quantity: 0,
        price: 0.25,
    },
    {
        name: 'Atum',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/at.png',
        quantity: 0,
        price: 0.50,
    },
    {
        name: 'Azeitonas Pretas',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/ap.png',
        quantity: 0,
        price: 0.35,
    },
    {
        name: 'Bacon',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/ba.png',
        quantity: 0,
        price: 0.40,
    },
    {
        name: 'Batata Dipper',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/bd.png',
        quantity: 0,
        price: 0.50,
    },
    {
        name: 'Camarão',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/cam.png',
        quantity: 0,
        price: 0.75,
    },
    {
        name: 'Carne',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/ca.png',
        quantity: 0,
        price: 0.90,
    },
    {
        name: 'Cebola',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/ce.png',
        quantity: 0,
        price: 0.30,
    },
    {
        name: 'Cebola Caramelizada',
        image: 'https://images.telepizza.com/vol/pt/images/content/ingredientes/cec.png',
        quantity: 0,
        price: 0.20,
    },
];

let total = 10;

for (const ingredient of ingredients) {
    buildIngredient(ingredient);
}

function buildIngredient(info) {
    const item = document.createElement('li');
    item.classList.add('ingredient');
    item.setAttribute('data-amount', info.quantity);
    item.setAttribute('data-price', info.price);

    const columnInfo = document.createElement('div');
    columnInfo.classList.add('ingredient__column');
    columnInfo.innerHTML = `<img class="ingredient__image" src="${info.image}" alt="${info.name}">
    <span class="ingredient__counter">x${info.quantity}</span>
    <span class="ingredient__name">${info.name}</span>`;

    const columnActions = document.createElement('div');
    columnActions.classList.add('ingredient__column');

    const buttonMinus = document.createElement('button');
    buttonMinus.classList.add('ingredient__control', 'ingredient__control--remove');
    buttonMinus.innerHTML = '<i class="icofont-minus"></i>';
    buttonMinus.addEventListener('click', onUpdate);

    const buttonPlus = document.createElement('button');
    buttonPlus.classList.add('ingredient__control', 'ingredient__control--add');
    buttonPlus.innerHTML = '<i class="icofont-plus"></i>';
    buttonPlus.addEventListener('click', onUpdate);

    columnActions.append(buttonMinus, buttonPlus);

    item.append(columnInfo, columnActions);

    document.querySelector('.picker__ingredients').append(item);
}

function onUpdate(event) {
    const item = event.target.closest('.ingredient');
    const amount = +item.getAttribute('data-amount');
    const price = +item.getAttribute('data-price');
    const trigger = event.target.closest('.ingredient__control');
    let newAmount = amount;
    
    if (trigger.classList.contains('ingredient__control--remove')) {
        newAmount = amount - 1;
        total = total - price;
    } else {
        newAmount = amount + 1;
        total = total + price;
    }

    // final count
    
    document.querySelector('.picker__price').textContent = total.toFixed(2) + '€';

    item.setAttribute('data-amount', newAmount);
    item.querySelector('.ingredient__counter').textContent = `x${newAmount}`;
}


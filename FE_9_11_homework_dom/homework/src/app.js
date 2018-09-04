const maxItem = 10;

let forInput = document.querySelector('.forInput'),
    inputField = document.querySelector('.inputField'),
    addNewItems = document.querySelector('.addNewItems'),
    forNewItem = document.querySelector('.forNewItem');

let allItems = [];
function addingItems() {
    let myValue = inputField.value;


    let forOne = document.createElement('div'),
        check = document.createElement('i'),
        stateCheck = document.createTextNode('check_box_outline_blank'),
        pItem = document.createElement('p'),
        item = document.createTextNode(`${myValue}`),
        deleteItem = document.createElement('i'),
        deleteIcon = document.createTextNode('delete');

    forOne.setAttribute('class', 'forOne');
    forOne.setAttribute('draggable', 'true');
    check.setAttribute('class', 'material-icons');
    deleteItem.setAttribute('class', 'material-icons');
    pItem.appendChild(item);
    check.appendChild(stateCheck);
    deleteItem.appendChild(deleteIcon);
    forOne.appendChild(check);
    forOne.appendChild(pItem);
    forOne.appendChild(deleteItem);

    allItems.push(myValue);

    if (allItems.length <= maxItem) {
        forNewItem.appendChild(forOne);
        deleteItem.addEventListener('click', deletingItem);
        check.addEventListener('click', marcedCheck);
    } else {
        let message = document.createTextNode('Maximum item per list are created’ is displayed');
        forInput.removeChild(inputField);
        forInput.removeChild(addNewItems);
        forInput.appendChild(message);
    }

    function deletingItem() {
        forNewItem.removeChild(forOne);
        allItems.pop(myValue);
    }

    function marcedCheck() {
        let checkMarced = document.createElement('i'),
            stateCheckMarced = document.createTextNode('check_box');

        checkMarced.setAttribute('class', 'material-icons');
        checkMarced.appendChild(stateCheckMarced);
        forOne.replaceChild(checkMarced, check);
    }

    let dragItem = null;

    forNewItem.addEventListener('dragstart', function (event) {
        dragItem = event.target;
        event.target.style['color'] = 'red';
    });
    forNewItem.addEventListener('dragover', event => {
        if (event.target.className === 'forOne') {
            event.preventDefault();
            event.target.style['color'] = 'blue';
        }
    });

    forNewItem.addEventListener('dragleave', event => {
        event.target.style['color'] = 'black';
    });

    forNewItem.addEventListener('drop', event => {
        if (event.target.className === 'forOne') {
            event.preventDefault();

            if (event.target.style['color'] === 'blue') {
                event.target.style['color'] = 'black';
                forNewItem.insertBefore(dragItem, event.target.nextSibling);
            } else {
                forNewItem.insertBefore(dragItem, event.target);
            }
        }
    });

}
addNewItems.addEventListener('click', addingItems);


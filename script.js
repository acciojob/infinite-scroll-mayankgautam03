//your code here!


let items = document.getElementById("infi-list");

items.innerHTML=`<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
<li>Item 7</li>
<li>Item 8</li>
<li>Item 9</li>
<li>Item 10</li>
`
let itemCount = 10; // Initial items count

items.addEventListener('scroll', function() {
    if (items.scrollTop + items.clientHeight >= items.scrollHeight) {
        addMoreItems();
    }
});

function addMoreItems() {
    for (let i = 1; i <= 2; i++) { // Adding 2 new items
        itemCount++;
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount}`;
        items.appendChild(li);
    }
}



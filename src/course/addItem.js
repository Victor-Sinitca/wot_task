function createItem($parent, itemData) {
    const $item = document.createElement("div")
    /*$item.classList.add('product')*/
    $item.innerHTML = ` 
    <div>
    Товар
    
    </div>        `
    while ($parent.firstChild) {
        $parent.removeChild($parent.firstChild);
    }
    $parent.append($item)
}
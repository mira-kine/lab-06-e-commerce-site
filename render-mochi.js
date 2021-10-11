export function renderMochi(mochi){
    const mochiItem = document.createElement('div');
    mochiItem.classList.add('mochi-item');

    const mochiHeader = document.createElement('h2');
    mochiHeader.textContent = mochi.name;
    
    const img = document.createElement('img');
    img.src = mochi.img;

    mochiItem.append(mochiHeader, img);
    return mochiItem
}
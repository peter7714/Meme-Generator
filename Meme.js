const form = document.querySelector('#meme-creation');
const imgInput = document.querySelector('input[name="img-input"]');
const topInput = document.querySelector('input[name="top"]');
const bottomInput = document.querySelector('input[name="bottom"]');
const section = document.querySelector('#img-container');

function createMeme(imgLink, top, bottom){
    const img = new Image();
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const createDiv = document.createElement('div');
    const createDivOne = document.createElement('div');
    const createDivTwo = document.createElement('div');
    const createDivThree = document.createElement('div');
    img.src = imgLink;
    createDivOne.append(img);
    createDivOne.classList.add('img');
    h2.innerText = top;
    h2.classList.add('meme-text');
    createDivTwo.append(h2);
    createDivTwo.classList.add('top');
    h3.innerText = bottom;
    h3.classList.add('meme-text');
    createDivThree.append(h3);
    createDivThree.classList.add('bottom');
    createDiv.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
    });
    createDiv.append(createDivOne, createDivTwo, createDivThree)
    createDiv.classList.add('container');
    return createDiv;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(imgInput.value === ''){
        alert('Please Enter an Image');
        return;
    }
    if(topInput.value === ''){
        alert('Please Enter a Top Text');
        return;
    }
    if(bottomInput.value === ''){
        alert('Please Enter a Bottom Text');
        return;
    }
    const makeMeme = createMeme(imgInput.value, topInput.value, bottomInput.value);
    section.append(makeMeme);
    imgInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
});

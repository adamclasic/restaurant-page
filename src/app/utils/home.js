export const makeContent = (workPlace) => {
    
    let content1 = document.createElement('div');
    let content2 = document.createElement('div');
    let content3 = document.createElement('div');
    let content4 = document.createElement('div');
    let loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique, doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore, et officiis! Aspernatur, vitae!`;
    content1.innerText = loremText;
    content2.innerText = loremText;
    content3.innerText = loremText;
    content4.innerText = loremText;
    workPlace.appendChild(content1);
    workPlace.appendChild(content2);
    workPlace.appendChild(content3);
    workPlace.appendChild(content4);
}

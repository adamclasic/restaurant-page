export const homePage = () => {
    
    let homeContent = document.createElement('div');
    // let loremText = `HOME PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique, doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore, et officiis! Aspernatur, vitae!`;
    let hero = document.createElement('h1');
    hero.innerText = "Restaurant Page";
    hero.classList.add("hero-title");
    homeContent.appendChild(hero);
    homeContent.id = 'homeContDiv';
    return homeContent;
}

const explorePage = () => {
  const exploreContent = document.createElement('div');
  const loremText = `<h1> EXPLOR PAGE</h1> 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique,
   doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure 
   architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, 
   error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore,
    et officiis! Aspernatur, vitae!</p>`;
  exploreContent.innerHTML = loremText;
  exploreContent.id = 'exploreContDiv';
  return exploreContent;
};

export default explorePage;
const homePage = () => {
  const homeContent = document.createElement('div');
  const hero = document.createElement('h1');
  hero.innerText = 'Restaurant Page';
  hero.classList.add('hero-title');
  homeContent.appendChild(hero);
  homeContent.id = 'homeContDiv';
  return homeContent;
};
export default homePage;
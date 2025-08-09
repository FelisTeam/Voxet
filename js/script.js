const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Убираем активность у всех вкладок и содержимого
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => {
      c.classList.remove('active');
      // Сброс анимации карточек
      c.querySelectorAll('.card').forEach(card => {
        card.style.animation = 'none';
        card.offsetHeight; // триггер перерендера для перезапуска анимации
        card.style.animation = null;
      });
    });

    // Добавляем активность текущей вкладке и содержимому
    tab.classList.add('active');
    const id = tab.dataset.tab;
    const content = document.getElementById(id);
    if(content) {
      content.classList.add('active');
    }
  });
});

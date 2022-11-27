if (document.querySelector('.s-buy')) {
  const tabsBuy = document.querySelectorAll('.s-buy__tab'),
    tabContentsBuy = document.querySelectorAll('.s-buy__tabs-content');

  tabsBuy.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector('#' + tab.dataset.tab)

      tabContentsBuy.forEach(tabContent => {
        tabContent.classList.remove('is-active')
      })
      tabsBuy.forEach(tab => {
        tab.classList.remove('is-active')
      })
      tab.classList.add('is-active')
      target.classList.add('is-active')
    })
  })
}
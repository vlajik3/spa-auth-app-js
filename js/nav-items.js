function openTab(evt, tabName) {
  const contentBlocks = document.querySelectorAll('.tabcontent');
  const tabLinks = document.querySelectorAll(".tablinks");

  contentBlocks.forEach(item => {
    if (item.classList.contains(tabName)) {
      item.classList.add('active-content')
    } else {
      item.classList.remove('active-content')
    }
  })

  tabLinks.forEach(item => {
    if (item.classList.contains(tabName)) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

}

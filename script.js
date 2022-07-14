const header = document.getElementById('header')
const cardTitle = document.querySelector('.card-title')
const cardExcerpt = document.querySelector('.card-excerpt')
const lines = document.querySelectorAll('.line')
const profileImg = document.getElementById('profile_img')

const allAnimatedBg = document.querySelectorAll('.animated-bg')
const allAnimatedBgText = document.querySelectorAll('.animated-bg-text')
const date = document.getElementById('date')
const nameAuthor = document.getElementById('name')

if (document.readyState === 'loading') {
  header.classList.add('animated-bg')
  header.classList.add('animated-bg-text')
  if (header.classList.contains('animated-bg')) {
    header.childNodes[1].style.display = 'none'
  }

  cardTitle.classList.add('animated-bg')
  cardTitle.classList.add('animated-bg-text')
  cardTitle.style.color = 'transparent'

  cardExcerpt.style.color = 'transparent'
  lines.forEach((line) => {
    line.classList.add('animated-bg')
    line.classList.add('animated-bg-text')
  })
  profileImg.childNodes[1].style.display = 'none'
  profileImg.classList.add('animated-bg')

  nameAuthor.classList.add('animated-bg')
  nameAuthor.classList.add('animated-bg-text')
  nameAuthor.style.color = 'transparent'
  date.style.color = 'transparent'
  date.classList.add('animated-bg')
  date.classList.add('animated-bg-text')
}

setTimeout(() => {
  header.childNodes[1].style.display = 'block'
  cardTitle.style.color = 'black'
  cardExcerpt.style.color = 'black'

  profileImg.childNodes[1].style.display = 'block'
  nameAuthor.style.color = 'black'
  date.style.color = 'black'

  allAnimatedBg.forEach((ele) => {
    ele.classList.remove('animated-bg')
  })
  allAnimatedBgText.forEach((ele) => {
    ele.classList.remove('animated-bg-text')
  })
  lines.forEach((line) => {
    line.style.display = 'none'
  })
  cardTitle.classList.remove('animated-bg ')
  cardTitle.classList.remove('animated-bg-text')
}, 5000)

// the problem is :
// when the time die 5secoond the cardTitel and date and name still animated
// I try to remove classes manually but doesn't work so
// try with another solution ok man see u with good news :)

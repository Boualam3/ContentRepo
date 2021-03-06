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
  removeAnimatedClasses()
}, 5000)

function removeAnimatedClasses() {
  header.childNodes[1].style.display = 'block'
  cardTitle.style.color = 'black'
  cardExcerpt.style.color = 'black'
  cardTitle.classList.remove('animated-bg')
  cardTitle.classList.remove('animated-bg-text')

  profileImg.childNodes[1].style.display = 'block'
  nameAuthor.style.color = 'black'
  nameAuthor.classList.remove('animated-bg')
  nameAuthor.classList.remove('animated-bg-text')

  date.style.color = 'black'
  date.classList.remove('animated-bg')
  date.classList.remove('animated-bg-text')
  allAnimatedBg.forEach((ele) => {
    ele.classList.remove('animated-bg')
  })
  allAnimatedBgText.forEach((ele) => {
    ele.classList.remove('animated-bg-text')
  })
  lines.forEach((line) => {
    line.style.display = 'none'
  })
}

let showContent = document.getElementsByTagName('article')

  window.addEventListener('scroll', function() {

  console.log(window.scrollY)


let z = window.scrollY

  if (z > 1) {
    showContent[0].classList.remove('hidden')
    showContent[0].classList.add('show')
  }
  if(z > 650){

  showContent[1].classList.remove('hidden')
  showContent[1].classList.add('show')

  }
  if(z > 1350){

  showContent[2].classList.remove('hidden')
  showContent[2].classList.add('show')

} if(z > 1900){

  showContent[3].classList.remove('hidden')
  showContent[3].classList.add('show')
}
  })

  console.log(showContent)

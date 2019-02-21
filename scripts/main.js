const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const step = 960
let pos = 0
let action

let dots = document.querySelectorAll('li');
for(let i = 0; i< dots.length; i++){
    dots[i].addEventListener(
      'click',
      function (){
        pos = this.getAttribute('data-pos');
        setPosition(pos)
    }
  )
}

playSlider()

leftButton.addEventListener('click',leftSlide)
rightButton.addEventListener('click',rightSlide)

function leftSlide(){
  pos--
  if(pos<0){
    pos=sliderImages.length-1
  }
  setPosition(pos)
}

function rightSlide(){
  pos++
  if(pos>=sliderImages.length)
  {
    pos=0
  }
  setPosition(pos)
}

slider.addEventListener('mouseover',stopSlider)
slider.addEventListener('mouseout',playSlider)

function setPosition(pos)
{
  document.querySelector('li.current').classList.remove('current')
  dots[pos].classList.add('current')
  slider.style.left = -pos*step+'px' // 960px
}

function stopSlider()
{
  clearInterval(action)
}

function playSlider()
{
  action = setInterval(
    function()
    {
      pos = (pos+1)%sliderImages.length
      setPosition(pos)
    },
    5000
  )
}

//responsive

const FirstListingFooter = document.querySelectorAll(".FirstListingFooter")

for(let i=0; i<FirstListingFooter.length; i++)
{
  FirstListingFooter[i].addEventListener('click', function(){
    if (FirstListingFooter[i].classList.contains("Open")){
      FirstListingFooter[i].classList.remove("Open") 
    }
    else {
      let temp = document.querySelector(".Open")
      if (temp != null){
        temp.classList.remove("Open")
      }
      this[i].classList.add("Open")               // this.classList.add("is-open")
    }
  }
)}
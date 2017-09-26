import './style.scss'
import $ from 'jquery'

const rndTextPromise = (minWords = 10, maxWords = minWords) => $.get({
    url: `https://www.randomtext.me/api/gibberish/p-1/${minWords}-${maxWords}`
  })

const fillClass = (selector, minWords = 10, maxWords = minWords) => {
  const elements = $(selector)
  const content = Array(elements.length)
    .fill(undefined)
    .map(e => rndTextPromise(minWords, maxWords))

  Promise.all(content)
    .then(data => {
      elements.each((i, elm)=>{
        elm.innerHTML = data[i].text_out.replace(/<p>|<\/p>/g, '')
      })
    })
}

$(document).ready(()=>{
  fillClass('.rnd-spec-desc')
  fillClass('.rnd-spec-link', 3, 5)
  fillClass('.rnd-comp-desc', 20)
})

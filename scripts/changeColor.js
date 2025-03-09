const replaceColors = () => {
  document.querySelectorAll('*').forEach((el) => {
    const computedStyle = window.getComputedStyle(el)
    if (computedStyle.color === 'rgb(0, 19, 222)') {
      el.style.color = '#223D66'
    }
    if (computedStyle.backgroundColor === 'rgb(0, 19, 222)') {
      el.style.backgroundColor = '#223D66'
    }
  })

  document.querySelectorAll('iframe').forEach((iframe) => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
      iframeDoc.querySelectorAll('*').forEach((el) => {
        const computedStyle = window.getComputedStyle(el)
        if (computedStyle.color === 'rgb(0, 19, 222)') {
          el.style.color = '#223D66'
        }
        if (computedStyle.backgroundColor === 'rgb(0, 19, 222)') {
          el.style.backgroundColor = '#223D66'
        }
      })
    } catch (e) {
      console.warn('Cannot access iframe:', iframe.src)
    }
  })
}

const observer = new MutationObserver(replaceColors)
observer.observe(document.body, { childList: true, subtree: true })
setInterval(replaceColors, 2000)

replaceColors()

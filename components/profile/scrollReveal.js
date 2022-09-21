// import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return

  window.ScrollReveal({ reset: false })

  targetElements.forEach(({ element, animation }) => {
    window
      .ScrollReveal()
      .reveal(element, Object.assign({}, defaultProps, animation))
  })
}

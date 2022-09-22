export const defaultProps = {
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '30px',
  duration: 1000,
  desktop: true,
  mobile: true,
}

export const targetElements = (window) => {
  const windowWidth = window.innerWidth
  const defaultOrigin = windowWidth > 768 ? 'bottom' : 'left'

  return [
    {
      element: '.section-title',
      animation: {
        delay: 300,
        distance: '0px',
        origin: 'bottom',
      },
    },
    {
      element: '.hero-title-name',
      animation: {
        delay: 500,
        origin: defaultOrigin,
      },
    },
    {
      element: '.hero-title-desc',
      animation: {
        delay: 1000,
        origin: defaultOrigin,
      },
    },
    {
      element: '.hero-cta',
      animation: {
        delay: 1500,
        origin: defaultOrigin,
      },
    },
    {
      element: '.about-wrapper__image',
      animation: {
        delay: 600,
        origin: 'bottom',
      },
    },
    {
      element: '.about-wrapper__info',
      animation: {
        delay: 1000,
        origin: defaultOrigin,
      },
    },
    {
      element: '.project-wrapper__text',
      animation: {
        delay: 500,
        origin: defaultOrigin,
      },
    },
    {
      element: '.project-wrapper__image',
      animation: {
        delay: 1000,
        origin: defaultOrigin,
      },
    },
    {
      element: '.contact-wrapper',
      animation: {
        delay: 800,
        origin: 'bottom',
      },
    },
  ]
}

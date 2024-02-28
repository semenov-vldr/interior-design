const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.guarantees__list');

if (cardsContainer) {
  const cards = document.querySelectorAll('.guarantees__item');

  Array.from(cards).forEach((card, index) => {
    const offsetTop = 20 + index * 20
    card.style.paddingTop = `${offsetTop}px`
    if (index === cards.length - 1) {
      return
    }
    const toScale = 1 - (cards.length - 1 - index) * 0.1
    const nextCard = cards[index + 1]
    ScrollObserver.Element(nextCard, {
      offsetTop,
      offsetBottom: window.innerHeight - card.clientHeight
    }).onScroll(({ percentageY }) => {
      card.style.scale = valueAtPercentage({
        from: 1,
        to: toScale,
        percentage: percentageY
      })
      card.style.filter = `brightness(${valueAtPercentage({
        from: 1,
        to: 0.6,
        percentage: percentageY
      })})`
    })
  });
}

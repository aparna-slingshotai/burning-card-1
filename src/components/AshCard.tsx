/**
 * Ash card — "Downplaying what you've done doesn't make you humble."
 * Implemented from Figma: Ash 0.5 (node 4909-8530)
 */
import './AshCard.css'

const EMBRACE_ITEMS = [
  'Saying "I earned that"',
  'Receive, don\'t deflect',
]

const RELEASE_ITEMS = [
  'Crediting luck',
  'Dismissing praise',
]

export default function AshCard() {
  return (
    <article className="ash-card">
      <h1 className="ash-card__heading">
        Downplaying what you've done doesn't make you humble.
      </h1>
      <p className="ash-card__body">
        You called your promotion "lucky." Before that it was "right place right time." The person who narrates themselves out of their own story doesn't get seen — they get overlooked.
      </p>
      <div className="ash-card__lists">
        <section className="ash-card__column">
          <h2 className="ash-card__label">Embrace</h2>
          <ul className="ash-card__list">
            {EMBRACE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="ash-card__column">
          <h2 className="ash-card__label">Release</h2>
          <ul className="ash-card__list">
            {RELEASE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="ash-card__cta-wrap">
        <a href="/dig-deeper" target="_blank" rel="noopener noreferrer" className="ash-card__cta">
          Dig deeper
        </a>
      </div>
    </article>
  )
}

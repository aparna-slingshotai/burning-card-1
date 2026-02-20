/**
 * Full article page — Figma Ash 0.5 node 4789-2723.
 * Shown when user clicks "Dig deeper" on the card (navigates to /dig-deeper).
 */
import { Link } from 'react-router-dom'
import './ArticlePage.css'

export default function ArticlePage() {
  return (
    <div className="article-page">
      <header className="article-page__nav">
        <button type="button" className="article-page__menu" aria-label="Menu">
          <span className="article-page__menu-icon" aria-hidden />
        </button>
        <span className="article-page__brand">Ash</span>
        <button type="button" className="article-page__profile" aria-label="Profile">
          <span className="article-page__profile-icon" aria-hidden />
        </button>
      </header>

      <article className="article-page__content">
        <span className="article-page__overline">FRIDAY, 15TH FEBRUARY 2024</span>
        <h1 className="article-page__title">
          Downplaying what you've done doesn't make you humble.
        </h1>
        <h2 className="article-page__subheading">Why do people keep score?</h2>
        <p className="article-page__body">
          Here's what I keep thinking about. Scorekeeping is, at its core, a protection strategy. We track who did what so we don't get taken for granted — or so we tell ourselves. But the real cost is that we end up living inside the scorecard instead of the relationship.
        </p>

        <div className="article-page__food-card">
          <span className="article-page__food-overline">FOOD FOR THOUGHT</span>
          <h3 className="article-page__food-title">Why do I crave a relationship with no pressure?</h3>
          <button type="button" className="article-page__food-cta">Talk to Ash</button>
        </div>

        <h2 className="article-page__section-title">Rewiring your instincts</h2>
        <p className="article-page__body">
          When someone recognises your work, the instinct might be to push it away. Try pausing. Say "thank you" and let it land. You're not boasting; you're allowing the truth of your effort to be seen.
        </p>

        <div className="article-page__food-card">
          <span className="article-page__food-overline">FOOD FOR THOUGHT</span>
          <h3 className="article-page__food-title">Why do I crave a relationship with no pressure?</h3>
          <button type="button" className="article-page__food-cta">Talk to Ash</button>
        </div>

        <h2 className="article-page__section-title">Something to think about...</h2>
        <p className="article-page__body">
          What would change if you stopped editing yourself out of your own story? If you named your contribution without shrinking it? The real conversation lives there — not in the scorecard.
        </p>

        <div className="article-page__food-card">
          <span className="article-page__food-overline">FOOD FOR THOUGHT</span>
          <h3 className="article-page__food-title">Why do I crave a relationship with no pressure?</h3>
          <button type="button" className="article-page__food-cta">Talk to Ash</button>
        </div>

        <p className="article-page__signature">-ASH</p>

        <h2 className="article-page__section-title">Stories from your community</h2>
        <div className="article-page__community-scroll">
          <div className="article-page__community-card">
            <h3 className="article-page__community-title">Am I a bad friend?</h3>
            <p className="article-page__community-snippet">
              Okay, so I just need to get something off my chest. For context, I just turned 37, and I've been trying to have a baby for the past four years. I've done IUI, IV...
            </p>
            <div className="article-page__community-meta">
              <span className="article-page__community-avatar" aria-hidden />
              <span className="article-page__community-user">sneaky-leopard</span>
              <span className="article-page__community-time">10 min ago</span>
              <span className="article-page__community-comments">4</span>
            </div>
          </div>
          <div className="article-page__community-card">
            <h3 className="article-page__community-title">When is it okay to leave?</h3>
            <p className="article-page__community-snippet">
              I've been in this job for two years and I don't see a path forward. My manager says to be patient, but I'm not sure if I'm growing or just stuck...
            </p>
            <div className="article-page__community-meta">
              <span className="article-page__community-avatar" aria-hidden />
              <span className="article-page__community-user">quiet-river</span>
              <span className="article-page__community-time">1 hr ago</span>
              <span className="article-page__community-comments">12</span>
            </div>
          </div>
          <div className="article-page__community-card">
            <h3 className="article-page__community-title">Why do I freeze in conflict?</h3>
            <p className="article-page__community-snippet">
              Every time there's tension I go blank. I want to say what I feel but the words don't come. Has anyone else found a way through this?
            </p>
            <div className="article-page__community-meta">
              <span className="article-page__community-avatar" aria-hidden />
              <span className="article-page__community-user">honest-oak</span>
              <span className="article-page__community-time">2 hr ago</span>
              <span className="article-page__community-comments">7</span>
            </div>
          </div>
        </div>
      </article>

      <div className="article-page__follow-up-bar">
        <input
          type="text"
          className="article-page__follow-up-input"
          placeholder="Ask a follow up"
          aria-label="Ask a follow up"
          readOnly
        />
        <button type="button" className="article-page__follow-up-send" aria-label="Send" />
        <button type="button" className="article-page__follow-up-mic" aria-label="Voice input" />
      </div>

      <div className="article-page__back">
        <Link to="/" className="article-page__back-link">← Back to card</Link>
      </div>
    </div>
  )
}

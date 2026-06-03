import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Muhammad Tayyab</span>
        </h1>

        <p className="hero-tagline">
          Embedded Systems & Firmware Engineer <br /> with 2+ years of hands-on
          experience delivering embedded firmware, medical devices, and
          industrial automation systems.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Nutech Alum</span>
          <span className="hero-chip">Embedded Enthusiat</span>
          <span className="hero-chip">Learner</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}

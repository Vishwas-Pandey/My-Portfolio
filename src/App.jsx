import { useEffect, useRef, useState } from 'react'
import { PROFILE, MARQUEE, LOG, BOUGSK, PROJECTS, FLOW, EXPERIENCE, SKILLS } from './data.js'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- small hooks ---------- */

// Adds the class "on" to every .rv element the first time it scrolls into view.
function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('.rv')]
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('on'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Counts up to `value` once, when the element first becomes visible.
function Count({ value }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(prefersReducedMotion() ? value : 0)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || prefersReducedMotion()) {
      setShown(value)
      return
    }
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / 1100)
          setShown(Math.round(value * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  return (
    <span ref={ref} aria-label={String(value)}>
      {shown}
    </span>
  )
}

/* ---------- pieces ---------- */

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo" href="#top" aria-label="Vishwas Pandey, home">
        <span aria-hidden="true">VP</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#flow">Checkout flow</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="nav__cta" href="#contact">
        Get in touch
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow rv">
            <span className="dot" aria-hidden="true" /> Software engineer · Noida, India · B.Tech CSE 2026
          </p>
          <h1 className="rv" style={{ '--d': '80ms' }}>
            I build software that handles <em>real money</em> and real users.
          </h1>
          <p className="lead rv" style={{ '--d': '160ms' }}>
            I recently finished my B.Tech in Computer Science. I shipped <strong>Bougsk</strong>, a live shop with Razorpay payments, led a four-person team at Cognizant, and
            I like the parts of a system where things can go wrong.
          </p>
          <div className="hero__actions rv" style={{ '--d': '240ms' }}>
            <a className="btn btn--solid" href="#work">
              See the work
            </a>
            <a className="btn btn--ghost" href="#flow">
              How checkout works <Arrow />
            </a>
          </div>
        </div>

        <figure className="trace rv" style={{ '--d': '200ms' }}>
          <figcaption className="trace__head">
            <span className="live" aria-hidden="true" />
            <span>bougsk.com · one checkout, simplified</span>
          </figcaption>
          <ol className="trace__list">
            {LOG.map(([time, tag, what, note], i) => (
              <li key={i} className={`trace__row tag-${tag.toLowerCase()}`} style={{ '--i': i }}>
                <span className="trace__time">{time}</span>
                <span className="trace__tag">{tag}</span>
                <span className="trace__what">
                  {what}
                  <small>{note}</small>
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}

function Marquee() {
  const row = MARQUEE.map((t) => (
    <span key={t}>
      {t}
      <i aria-hidden="true">✦</i>
    </span>
  ))
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track" aria-hidden="true">
        <div>{row}</div>
        <div>{row}</div>
      </div>
    </div>
  )
}

function Statement() {
  return (
    <section className="tone-light statement" aria-labelledby="statement-h">
      <div className="wrap">
        <p className="eyebrow rv">About</p>
        <h2 id="statement-h" className="rv">
          Most apps work when everything goes right. I spend my time on <em>payments, stock and permissions</em>: the parts that fail when it matters. I build them carefully, test them, and ship them.
        </h2>
        <div className="statement__meta rv">
          <p>
            <b>Education</b>
            B.Tech, Computer Science and Engineering, Amity University Noida (2022 – 2026)
          </p>
          <p>
            <b>Recognition</b>
            National Semi-Finalist, Tata Imagination Challenge
          </p>
          <p>
            <b>Practising</b>
            Data structures and algorithms in C++
          </p>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <p className="eyebrow rv">
          <span className="num">01</span> — Selected work
        </p>
        <h2 id="work-h" className="rv">
          Things I have built, <em>shipped</em> and tested.
        </h2>

        <article className="case rv">
          <div className="case__main">
            <p className="eyebrow">
              <span className="num">Featured</span> · {BOUGSK.kind}
            </p>
            <h3>{BOUGSK.title}</h3>
            <p>{BOUGSK.text}</p>
            <ul className="chips" aria-label="Stack">
              {BOUGSK.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="case__note">The source is in a private repository. I am happy to walk through the code on a call.</p>
          </div>
          <div className="case__side">
            {BOUGSK.stats.map((s) => (
              <div className="tile" key={s.label}>
                <strong>
                  <Count value={s.value} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
            <a className="tile tile--accent" href={BOUGSK.live} target="_blank" rel="noreferrer">
              <span>Visit the live shop</span>
              <strong>
                bougsk.com <Arrow />
              </strong>
            </a>
          </div>
        </article>

        <ol className="rows">
          {PROJECTS.map((p) => (
            <li className="row rv" key={p.title}>
              <span className="row__n">{p.n}</span>
              <div className="row__body">
                <h3>{p.title}</h3>
                <p className="row__kind">{p.kind}</p>
                <p>{p.text}</p>
                <ul className="chips" aria-label={`${p.title} stack`}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="row__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <Arrow />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    Code <Arrow />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Flow() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.i))
        }),
      { rootMargin: '-42% 0px -42% 0px' },
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="flow" id="flow" aria-labelledby="flow-h">
      <div className="wrap flow__grid">
        <div className="flow__sticky">
          <p className="eyebrow">
            <span className="num">02</span> — The part I am proudest of
          </p>
          <h2 id="flow-h">
            From <em>“Pay now”</em> to a confirmed order.
          </h2>
          <p className="flow__intro">
            Bougsk’s checkout, step by step. Scroll through it: each step is a decision about what could go wrong, and how the code stops it.
          </p>
          <ol className="map" aria-label="Checkout stages">
            {FLOW.map((s, i) => (
              <li key={s.node} className={i === active ? 'is-active' : i < active ? 'is-done' : ''}>
                <span className="map__dot" aria-hidden="true" />
                <span className="map__name">{s.node}</span>
                <span className="map__tag">{s.tag}</span>
              </li>
            ))}
          </ol>
        </div>

        <ol className="steps">
          {FLOW.map((s, i) => (
            <li
              key={s.title}
              className={`step ${i === active ? 'is-active' : ''}`}
              data-i={i}
              ref={(el) => (stepRefs.current[i] = el)}
            >
              <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <code>{s.tag}</code>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="tone-light experience" id="experience" aria-labelledby="xp-h">
      <div className="wrap">
        <p className="eyebrow rv">
          <span className="num">03</span> — Experience
        </p>
        <h2 id="xp-h" className="rv">
          Where I have <em>worked</em>.
        </h2>
        <ol className="xp">
          {EXPERIENCE.map((x) => (
            <li className="xp__row rv" key={x.org}>
              <p className="xp__when">{x.when}</p>
              <div>
                <h3>
                  {x.role} <span>· {x.org}</span>
                </h3>
                <ul>
                  {x.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <p className="eyebrow rv">
          <span className="num">04</span> — Toolbox
        </p>
        <h2 id="skills-h" className="rv">
          What I work <em>with</em>.
        </h2>
        <div className="skills__grid">
          {SKILLS.map((g) => (
            <div className="skills__col rv" key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="cta rv">
          <p className="eyebrow">Open to software engineer roles</p>
          <h2 id="contact-h">Need an engineer who ships, tests and explains the trade-offs?</h2>
          <a className="cta__mail" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email} <Arrow />
          </a>
          <div className="cta__links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </div>
      <footer className="foot">
        <div className="wrap foot__row">
          <p>© 2026 {PROFILE.name}. Built with React and Vite.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="foot__word" aria-hidden="true">
          Vishwas Pandey
        </p>
      </footer>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Work />
        <Flow />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

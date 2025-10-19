import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { profile, skills, projects } from '../data.js'

export default function App() {
  const base = import.meta.env.BASE_URL;
  return (
    <>
      <Header />
      <main className="container">
        {/* --- HERO --- */}
        <section id="accueil" className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.tagline}</p>
            <div className="badges" style={{ marginTop: 10 }}>
              <Badge>Flutter</Badge><Badge>React Native</Badge><Badge>SpringBoot</Badge>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
              <a className="cta" href="#projets">Voir mes projets</a>
              <a className="cta" href="#contact" style={{ opacity: .9 }}>Me contacter</a>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
              <a
                href={`${base}MY_CV - FR.pdf`}
                className="cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* --- PHOTO instead of QR --- */}
          <div>
            <Card>
              <img
                src={profile.photo}
                alt="Photo de profil"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8, textAlign: 'center' }}>
                {profile.location}
              </div>
            </Card>
          </div>
        </section>

        {/* --- À PROPOS --- */}
        <section id="apropos">
          <h2>À propos</h2>
          <div className="grid">
            <div className="col-6">
              <Card>
                <p><strong>Objectif:</strong> Obtenir un poste de Développeur Mobile Junior et approfondir Flutter & React Native.</p>
                <p><strong>Localisation:</strong> {profile.location}</p>
                <p><strong>Valeur clé:</strong> “Apprendre, s’adapter, et créer des solutions utiles — c’est ce qui me motive chaque jour.”</p>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <h3>Compétences techniques</h3>
                <ul>{skills.techniques.map((s, i) => (<li key={i}>{s}</li>))}</ul>
                <h3>Soft skills</h3>
                <ul>{skills.soft.map((s, i) => (<li key={i}>{s}</li>))}</ul>
              </Card>
            </div>
          </div>
        </section>

        {/* --- PROJETS --- */}
        <section id="projets">
          <h2>Projets</h2>
          <div className="grid">
            {projects.map((p, idx) => (
              <div className="col-6" key={idx}>
                <Card>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ margin: 0 }}>{p.title}</h3>
                    <span style={{ color: 'var(--muted)', fontSize: 12 }}>{p.period}</span>
                  </div>
                  <p style={{ color: 'var(--muted)' }}>{p.description}</p>
                  <div className="badges" style={{ margin: '8px 0 12px' }}>
                    {p.stack.map((t, i) => (<Badge key={i}>{t}</Badge>))}
                  </div>
                  <p><strong>Résultats :</strong> {p.results}</p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a className="cta" href={p.links.demo}>Démo</a>
                    <a className="cta" href={p.links.github}>Code</a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact">
          <h2>Contact</h2>
          <Card>
            <p>Intéressé par une collaboration ou un entretien ?</p>
            <ul>
              <li>Email : <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li>GitHub : <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
              <li>LinkedIn : <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></li>
            </ul>
            <form onSubmit={(e) => {
              e.preventDefault()
              alert('Merci ! Votre message a bien été envoyé.')
            }}>
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr' }}>
                <input name="name" placeholder="Nom" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <textarea name="message" placeholder="Votre message" rows="5" style={{ marginTop: 10, width: '100%' }} required></textarea>
              <button className="cta" type="submit" style={{ marginTop: 10 }}>Envoyer</button>
            </form>
          </Card>

          {/* --- QR Code at bottom --- */}
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <img
              src={profile.qr}
              alt="QR vers profil professionnel"
              style={{ width: '130px', height: '130px', opacity: 0.9 }}
            />
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 6 }}>
              Scannez pour accéder à mon profil professionnel
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { profile, skills, projects } from '../data.js'

export default function App(){
  return (
    <>
      <Header />
      <main className="container">
        <section id="accueil" className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.tagline}</p>
            <div className="badges" style={{marginTop: 10}}>
              <Badge>Flutter</Badge><Badge>React Native</Badge><Badge>Docker</Badge><Badge>Kubernetes</Badge>
            </div>
            <div style={{marginTop: 18, display:'flex', gap:12}}>
              <a className="cta" href="#projets">Voir mes projets</a>
              <a className="cta" href="#contact" style={{opacity:.9}}>Me contacter</a>
            </div>
          </div>
          <div>
            <Card>
              <img alt={profile.linkedin} src={profile.qr} />
              <div style={{color:'var(--muted)', fontSize:12, marginTop:8}}>Scannez pour accéder à mon profil pro</div>
            </Card>
          </div>
        </section>

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
                <ul>{skills.techniques.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
                <h3>Soft skills</h3>
                <ul>{skills.soft.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
              </Card>
            </div>
          </div>
        </section>

        <section id="projets">
          <h2>Projets</h2>
          <div className="grid">
            {projects.map((p, idx)=>(
              <div className="col-6" key={idx}>
                <Card>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                    <h3 style={{margin:0}}>{p.title}</h3>
                    <span style={{color:'var(--muted)', fontSize:12}}>{p.period}</span>
                  </div>
                  <p style={{color:'var(--muted)'}}>{p.description}</p>
                  <div className="badges" style={{margin:'8px 0 12px'}}>
                    {p.stack.map((t,i)=>(<Badge key={i}>{t}</Badge>))}
                  </div>
                  <p><strong>Résultats :</strong> {p.results}</p>
                  <div style={{display:'flex', gap:10}}>
                    <a className="cta" href={p.links.demo}>Démo</a>
                    <a className="cta" href={p.links.github}>Code</a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <Card>
            <p>Intéressé par une collaboration ou un entretien ?</p>
            <ul>
              <li>Email : <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li>GitHub : <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
              <li>LinkedIn : <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></li>
            </ul>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div style={{display:'grid', gap:10, gridTemplateColumns:'1fr 1fr'}}>
                <input name="name" placeholder="Nom" required/>
                <input type="email" name="email" placeholder="Email" required/>
              </div>
              <textarea name="message" placeholder="Votre message" rows="5" style={{marginTop:10, width:'100%'}} required></textarea>
              <button className="cta" type="submit" style={{marginTop:10}}>Envoyer</button>
            </form>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  )
}

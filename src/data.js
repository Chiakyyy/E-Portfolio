import avatar from './assets/Chia.png'
import qr from './assets/Amr_Agouriane_LinkedIn_QR.png'

export const profile = {
  name: "Amr AGOURIANE",
  tagline: "Apprendre, s’adapter, et créer des solutions utiles.",
  location: "Béni-Mellal, Maroc",
  email: "agouriane.amr@gmail.com",
  github: "https://github.com/Chiakyyy",
  linkedin: "https://www.linkedin.com/in/amr-agouriane-521120283/",
  photo: avatar,
  qr: qr
}

export const skills = {
  techniques: [
    "Langages: Dart, JavaScript, Python, Java",
    "Frameworks: Flutter, React Native, Spring Boot, NativeWind",
    "Outils mobiles: TensorFlow Lite (TFLite), Camera API, Geolocation, REST APIs",
    "Bases de données: SQLite, MySQL",
    "DevOps: Docker, Minikube, Kubernetes, Zabbix, Dynatrace",
    "Contrôle de version: Git, GitHub, GitLab",
    "Qualité logicielle: SonarQube, JUnit5, JMock",
    "Environnements: Android Studio, VS Code, IntelliJ IDEA"
  ],
  soft: [
    "Capacité d’adaptation",
    "Esprit analytique et rigoureux",
    "Travail en équipe et communication claire",
    "Apprentissage autonome et continu",
    "Gestion du temps et des priorités"
  ]
}

export const projects = [
  {
    title: "Analyse de plantes par IA embarquée",
    period: "Stage (2025)",
    stack: ["React Native", "Flutter", "TFLite", "REST API"],
    description: "Application mobile permettant de prendre une photo d’une plante et d’obtenir une analyse des maladies. Feedback en temps réel sur la distance et la qualité de l’image.",
    results: "Fiabilité accrue de l’analyse et simplification de l’accès à l’IA.",
    links: { github: "#", demo: "#" }
  },
  {
    title: "PlantAI Connector – Plugin Flutter",
    period: "Stage (2025)",
    stack: ["Flutter", "Dart", "REST API"],
    description: "Développement d’un plugin Flutter interne servant d’interface entre l’application d’analyse de plantes et l’API d’intelligence artificielle de l’entreprise. Le module encapsule les appels HTTP, la gestion des erreurs et la conversion JSON ↔ modèles métier.",
    results: "Standardisation de la communication API entre plusieurs projets mobiles Flutter et réduction du code dupliqué.",
    links: { demo: "#", github: "#" }
  },
  {
    title: "PlantAI SDK – Bibliothèque React Native",
    period: "Stage (2025)",
    stack: ["React Native", "TypeScript", "REST API"],
    description: "Conception d’une bibliothèque React Native légère regroupant les classes, types et fonctions nécessaires aux appels vers l’API d’analyse d’images de plantes. L’objectif était d’offrir une couche d’abstraction commune et réutilisable pour les futurs produits mobiles.",
    results: "Amélioration de la maintenabilité du code et facilitation de l’intégration de nouvelles fonctionnalités IA dans l’écosystème mobile.",
    links: { demo: "#", github: "#" }
  }
]

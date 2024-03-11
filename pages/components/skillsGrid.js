import styles from '../../styles/skillsgrid.module.css';

export default function SkillsGrid() {
  return (
    <div className={styles.skillGrid}>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
        <p>Python</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
        <p>Javascript</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
        <p>HTML</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
        <p>CSS</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
        <p>Node</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
        <p>Flutter</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        <p>MySQL</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" />
        <p>Godot</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <p>Git</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <p>Github</p>
      </div>
      <div className={styles.skill}>
        <img src="https://github.com/devicons/devicon/tree/v2.16.0/icons/rust/rust-original.svg" />
        <p>Rust</p>
      </div>
      <div className={styles.skill}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" />
        <p>Vuetify</p>
      </div>
    </div>
  )
}
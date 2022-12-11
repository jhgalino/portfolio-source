import Head from 'next/head'
import Navbar from "./components/navbar";
import SkillsGrid from "./components/skillsGrid";
import projectStyle from '../styles/projects.module.css';
import vaxPic from '../public/vax.webp';
import webScrapePic from '../public/web-scrape.webp';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Henry Galino</title>
        <meta name="description" content="Created by John Henry Galino"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className={'container'}>
        <Navbar></Navbar>
      </div>
      <div className={'container'}>
        <main>
          <section>
            <h1>John Henry Galino</h1>
            <h2>Aspiring Software Engineer</h2>
          </section>
          <section>
            <p>
              Hello! I&lsquo;m an aspiring Software Engineer from the Philippines. I&lsquo;m currently on my graduating
              year in the University of the Philippines Diliman. I have experience in tech support, mobile development,
              and fullstack development, and I adapt to new tech stacks quickly.
            </p>
          </section>
          <hr/>
          <section>
            <header>
              <h3>I have used...</h3>
            </header>
            <SkillsGrid></SkillsGrid>
          </section>
          <hr />
          <section>
            <header>
              <h3>Projects</h3>
            </header>
            <div className={projectStyle.projects}>
              <div className={'terminal-card'}>
                <header>Vax</header>
                <div className={projectStyle.projectsItem}>
                  <Image src={vaxPic} alt={'Image of the main menu of the game called Vax'}></Image>
                  <p>A video game submitted as a school requirement.</p>
                  <p>Link: <a href={'https://github.com/Vax-CS192/Vax'}>Github</a></p>
                  <hr />
                  <p>Built with Godot</p>
                </div>
              </div>
              <div className={'terminal-card'}>
                <header>web-scrape-rs</header>
                <div className={projectStyle.projectsItem}>
                  <Image src={webScrapePic} alt={'Image of the code for web-scrape-rs'}></Image>
                  <p>A console application for getting the source of a website.</p>
                  <p>Link: <a href={'https://github.com/jhgalino/web-scrape-rs'}>Github</a></p>
                  <hr />
                  <p>Built with Rust</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>Copyright 2022</p>
        </footer>
      </div>
    </div>
  )
}

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
          {/*Title Section*/}
          <section>
            <h1>John Henry Galino</h1>
            <h2>Aspiring Software Engineer</h2>
          </section>

          {/*Spiel*/}
          <section>
            <p>
              Hello! I&lsquo;m an aspiring Software Engineer from the Philippines. I&lsquo;m currently on my graduating
              year in the University of the Philippines Diliman. I have experience in tech support, mobile development,
              and fullstack development, and I adapt to new tech stacks quickly.
            </p>
          </section>
          <hr/>

          {/*Skills*/}
          <section>
            <header>
              <h3>I have used...</h3>
            </header>
            <SkillsGrid></SkillsGrid>
          </section>
          <hr />

          {/*Projects*/}
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
          <hr />

          {/*Previous Work*/}
          <section>
            <header>
              <h3>Experience</h3>
            </header>
            <div className={'terminal-timeline'}>
              <div className={'terminal-card'}>
                <header>University of the Philippines Diliman Computer Center</header>
                <div>
                  <h4>Student Assistant (2019-Present)</h4>
                  I am currently working part-time as a student assistant in my university&lsquo;s Computer Center,
                  where I am responsible for addressing network-related problems within the Diliman Network, in
                  addition to assisting students, faculty, and staff in their inquiries.
                </div>
              </div>
              <div className={'terminal-card'}>
                <header>D.W. Morgan</header>
                <div>
                  <h4>Backend Intern (Jun 2022 - Sept 2022)</h4>
                  I was an intern of D.W. Morgan for my internship from Jun 2022 to Sept 2022. During my internship,
                  I was able to add features and fix bugs for their Rails backend. I was also able to gain experience
                  working with the cloud environment.
                </div>
              </div>
              <div className={'terminal-card'}>
                <header>DZUP 1602</header>
                <div>
                  <h4>Website Supervisor and Technical Support (Sept 2021 - Dec 2021)</h4>
                  I worked as website supervisor and technical support for the Eskwekalikasan Project of DZUP from Sept
                  2021 to Dec 2021. I added some improvements to their website such as changing the text-spacing
                  algorithm of the pages.
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

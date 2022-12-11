import Head from 'next/head'
import Navbar from "./components/navbar";
import SkillsGrid from "./components/skillsGrid";

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
            <h2>Aspiring Software Developer</h2>
          </section>
          <hr/>
          <section>
            <header>
              <h3>About</h3>
            </header>
            <p>
              Hello! I&lsquo;m an aspiring Software Developer from the Philippines. I&lsquo;m currently on my graduating
              year in the University of the Philippines. I have experience in tech support, mobile development,
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
        </main>
      </div>
    </div>
  )
}

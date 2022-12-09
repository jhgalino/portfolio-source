import Head from 'next/head'
import Image from "next/image";
import menuPic from '../public/8678542_terminal_box_line_icon.webp';
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Henry Galino</title>
        <meta name="description" content="Created by John Henry Galino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'container'}>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

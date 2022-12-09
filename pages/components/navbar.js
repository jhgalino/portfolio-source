import HamburgerMenu from 'react-hamburger-menu';
import {useEffect, useState} from "react";
import Image from "next/image";
import menuPic from "../../public/8678542_terminal_box_line_icon.webp";
import {CSSTransition} from "react-transition-group";
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  const [isMobile, setMobile] = useState(true);
  const [isNotOpen, setNotOpen] = useState(true);
  const updateMedia = () => {
    setMobile(window.innerWidth < 900);
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div>
      {isMobile ? (
        <div className={'terminal-nav'}>
          <div className={'terminal-logo'}>
            <a href={'#'}>
              <Image src={menuPic} className={'logo'} alt={'An icon of a terminal'} width={96} height={96}/>
            </a>
            <HamburgerMenu isOpen={!isNotOpen} menuClicked={() => setNotOpen(!isNotOpen)}></HamburgerMenu>
          </div>
          <CSSTransition in={isNotOpen} appear={isNotOpen} timeout={200} classNames={{...styles}}>
            <nav className={'terminal-menu'}>
              <ul>
                <li><a className={'menu-item'} href={'#'}>About</a></li>
                <li><a className={'menu-item'} href={'#'}>Skills</a></li>
                <li><a className={'menu-item'} href={'#'}>Projects</a></li>
                <li><a className={'menu-item'} href={'#'}>Work</a></li>
              </ul>
            </nav>
          </CSSTransition>
        </div>
      ) : (
        <div className={'terminal-nav'}>
          <div className={'terminal-logo'}>
            <a href={'#'}>
              <Image src={menuPic} className={'logo'} alt={'An icon of a terminal'} width={96} height={96}/>
            </a>
          </div>
          <nav className={'terminal-menu'}>
            <ul>
              <li><a className={'menu-item'} href={'#'}>About</a></li>
              <li><a className={'menu-item'} href={'#'}>Skills</a></li>
              <li><a className={'menu-item'} href={'#'}>Projects</a></li>
              <li><a className={'menu-item'} href={'#'}>Work</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )

}
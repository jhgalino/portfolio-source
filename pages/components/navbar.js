import HamburgerMenu from 'react-hamburger-menu';
import {useEffect, useState} from "react";
import Image from "next/image";
import menuPic from "../../public/8678542_terminal_box_line_icon-2.webp";
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  const [isMobile, setMobile] = useState(null);
  const [isNotOpen, setNotOpen] = useState(true);
  const updateMedia = () => {
    setMobile(window.innerWidth < 600);
  }

  // run setMobile once to check if site is in mobile
  useEffect(() => {
    setMobile(window.innerWidth < 600);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia)
  })

  let terminalMenu = !isNotOpen ?
    <nav className={'terminal-menu'}>
      <ul>
        <li><a className={'menu-item'} href={'#'}>About</a></li>
        <li><a className={'menu-item'} href={'#'}>Skills</a></li>
        <li><a className={'menu-item'} href={'#'}>Projects</a></li>
        <li><a className={'menu-item'} href={'#'}>Work</a></li>
      </ul>
    </nav>
    : null

  if (isMobile == null) {
    return (
      <div></div>
    )
  } else {
    return (
      <div>
        {isMobile ? (
          <div className={'terminal-nav'}>
            <div className={'terminal-logo ' + styles.navMobileHeader}>
              <a href={'#'}>
                <Image src={menuPic} className={'logo'} alt={'An icon of a terminal'} width={105} height={105}/>
              </a>
              <HamburgerMenu isOpen={!isNotOpen} menuClicked={() => setNotOpen(!isNotOpen)}
                             animationDuration={0.12} height={20} width={26}></HamburgerMenu>
            </div>
            {terminalMenu}
          </div>
        ) : (
          <div className={'terminal-nav'}>
            <div className={'terminal-logo'}>
              <a href={'#'}>
                <Image src={menuPic} className={'logo'} alt={'An icon of a terminal'} width={105} height={105}/>
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

}
import React, { useState, useEffect } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

function Header({ onClick }) {

  const [widthView, setWidthView] = useState(0)
  const [show, setShow] = useState(false)

  const openModal = () => {

    setShow(true)
  }
  useEffect(() => {
    setWidthView(window.innerWidth)
  }, [])

  return (
    <>
      {/* {show &&

        <div className=" modal-fixed index " >
          <div >

            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>
                </div></button></div>
                <div className="video-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
                <p>ALL Babies can be Multilingual</p>
          <small>Research shows that a baby's brain is hardwired for ALL languages...But this ability slowly decreases month after month.So, don't wait! Immerse your baby in a multitude of sounds early on. Any foreign language will be processed and memorized easily... Boy are babies lucky!</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
      } */}
      <div className='header'>

        <div className="header__left">
          {widthView < 540 &&
            <button className="border-none-boton" onClick={() => onClick()}><MenuIcon /></button>
          }
        </div>

        <div className="header__right">
        <small>All Babies can be Multilingual</small>
          <button onClick={() => openModal()} className="block ml-auto">
            <Avatar
              alt='Tiziano'
              src='/tizi.jpg'
            />
          </button>

        </div>

      </div>
    </>
  )
}

export default Header;

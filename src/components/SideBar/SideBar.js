import React from 'react';
import SideBarRow from './../SideBarRow/SideBarRow';
import './SideBar.css';

const SideBar = ({ setIdList, widthView }) => {

    return (
        <div className={ widthView > 540? 'sidebar': 'sidebar-mobile'}> 
            <button onClick={() => setIdList('1')}>
                <SideBarRow url="https://2.bp.blogspot.com/-Tsm4oXVoYik/XEzeCFRjQ1I/AAAAAAAAHIM/VqxZ-hbI2Qcaq6llAHzGTX56jC7bmrkAwCK4BGAYYCw/s640/Flag%2BUnited%2BStates.png" title='English' />
            </button>
            <button onClick={() => setIdList('2')}>
                <SideBarRow url="https://4.bp.blogspot.com/-ESGFmY9BLNE/XEysE63C_tI/AAAAAAAAHEc/svSz8ScwXXQc-Qph_591KVteI4cq52xdACK4BGAYYCw/s1600/Argentina%2BFlag.png" title='Spanish' />
            </button>
            <button onClick={() => setIdList('3')}>
                <SideBarRow url="https://cdn.countryflags.com/thumbs/china/flag-round-250.png" title='Chinese' />
            </button>
            <button onClick={() => setIdList('4')}>
                <SideBarRow url="https://cdn.countryflags.com/thumbs/russia/flag-3d-round-250.png" title='Russian' />
            </button>
            <button onClick={() => setIdList('5')}>
                <SideBarRow url="https://2.bp.blogspot.com/-q0OooaMxa2I/XENAwabjSOI/AAAAAAAAG-g/mlQ1wpfbudQwFvseYYXfD_8Ox1UkukY6wCK4BGAYYCw/s640/France%2BFlag.png" title='French' />
            </button>


        </div>

    )
}

export default SideBar;
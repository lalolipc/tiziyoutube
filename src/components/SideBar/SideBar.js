import React, { useEffect } from 'react';
import SideBarRow from './../SideBarRow/SideBarRow';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import { useEffect, useState } from 'react';

const SideBar = () => {
    // const [option, setOption]=useState(1);
//    useEffect=()=>{

//    }
    return (
        <div className='sidebar '>
            {/* <button onClick={()=>selectOpcion(1)}><SideBarRow url="https://2.bp.blogspot.com/-Tsm4oXVoYik/XEzeCFRjQ1I/AAAAAAAAHIM/VqxZ-hbI2Qcaq6llAHzGTX56jC7bmrkAwCK4BGAYYCw/s640/Flag%2BUnited%2BStates.png" Icon={HistoryIcon} title='English' /> */}
            <SideBarRow selected url="https://2.bp.blogspot.com/-Tsm4oXVoYik/XEzeCFRjQ1I/AAAAAAAAHIM/VqxZ-hbI2Qcaq6llAHzGTX56jC7bmrkAwCK4BGAYYCw/s640/Flag%2BUnited%2BStates.png" Icon={HistoryIcon} title='English' />
            <SideBarRow  url="https://4.bp.blogspot.com/-ESGFmY9BLNE/XEysE63C_tI/AAAAAAAAHEc/svSz8ScwXXQc-Qph_591KVteI4cq52xdACK4BGAYYCw/s1600/Argentina%2BFlag.png" Icon={HomeIcon} title='Spanish' />            
            <SideBarRow url="https://cdn.countryflags.com/thumbs/china/flag-round-250.png" Icon={WhatshotIcon} title='Chinese' />
            <SideBarRow url="https://cdn.countryflags.com/thumbs/russia/flag-3d-round-250.png" Icon={SubscriptionsIcon} title='Russian' />
            <hr />
            <SideBarRow url="https://2.bp.blogspot.com/-q0OooaMxa2I/XENAwabjSOI/AAAAAAAAG-g/mlQ1wpfbudQwFvseYYXfD_8Ox1UkukY6wCK4BGAYYCw/s640/France%2BFlag.png" Icon={VideoLibraryIcon} title='French' />
            {/*<SideBarRow url="" Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow url="" Icon={WatchLaterIcon} title='Watch later' />
            <SideBarRow url="" Icon={ThumbUpIcon} title='Liked vides' /> */}
            <hr />
        </div>
    )
}

export default SideBar;
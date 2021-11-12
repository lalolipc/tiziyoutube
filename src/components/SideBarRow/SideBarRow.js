import React from 'react';
import './SideBarRow.css';

const SideBarRow = ({selected, url, Icon, title}) => {
    return (
        <div className={` sidebarrow ${selected ? 'selected': ''}`}>
            {/* <Icon className='sidebarrow__icon'/> */}
            <img className='header__logo' src={url} alt=""></img>

            <h6 className='sidebarrow__title'>{title}</h6>
        </div>
    )
}

export default SideBarRow;

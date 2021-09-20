import React, { useState } from 'react'

import {
    SidebarLink,
    SidebarContainer,
    Icondiv,
    CloseIcon,
    SideMenu,
    SideBtn,
    SidebarRoute,
   
     } from './Sidebar.js'

const Sidebar = ({isOpen,toggle}) => {

   

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icondiv onClick={toggle}>
            <CloseIcon />
            </Icondiv>
            <SideMenu>
                <SidebarLink to="/">Філадельфія</SidebarLink>
                <SidebarLink to="/">Спайсі гункан</SidebarLink>
                <SidebarLink to="/">Кунсей рол</SidebarLink>
            </SideMenu>
            <SideBtn>
                <SidebarRoute>
                    Order Now
                </SidebarRoute>
            </SideBtn>
            
        </SidebarContainer>
    )
}

export default Sidebar
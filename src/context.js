import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const  AppProvider = ({children}) => {
const [isSidebardOpen, setSidebarOpen] = useState(false);
const [isSubmenuOpen, setSubmenuOpen] = useState(false);
const [location, setLocation] = useState({})
const [page, setPage] = useState({page:'', links:[]})


const openSidebar = () => {
    setSidebarOpen(true)
}

const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link)=>link.page === text);
    setPage(page)
    setLocation(coordinates)
    setSubmenuOpen(true)
}

const closeSidebar = () => {
    setSidebarOpen(false)
}

const closeSubmenu = () => {
    setSubmenuOpen(false)
}


    return (<AppContext.Provider 
    value={{isSidebardOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page,
        }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = ()=>{
return useContext(AppContext)
}


import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import Sidebar from './Sidebar'

const Drawer = ({ toggleDrawer, isDrawerOpen }: any) => {
    const dispatch = useAppDispatch();
    const handleTheme = () => {
        dispatch(toggleDrawer())
    }
    return (
        <>
            {isDrawerOpen && <div
                // id="drawer-create-product-default"
                // className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                className='bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
                // tabIndex={-1}
                // aria-labelledby="drawer-label"
                // aria-hidden="true"
                onClick={handleTheme}
            />}

            <Sidebar />
        </>
    )
}

export default Drawer
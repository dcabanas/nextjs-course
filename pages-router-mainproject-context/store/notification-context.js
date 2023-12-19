import { createContext, useEffect, useState } from 'react'

 export const NotificationContext = createContext({
    notification: null,
    showNotification: (notificationData) => {},
    hideNotification: () => {}
})

export default function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState()

    useEffect(() => {
        if ( activeNotification &&
            (activeNotification.status === 'success' || activeNotification.status === 'error')
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(null)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeNotification])
    
    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData)
    }
    
    function hideNotificationHandler() {
        setActiveNotification(null)
    }

    const ctx = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }
    
    return (
        <NotificationContext.Provider value={ctx}>
            {props.children}
        </NotificationContext.Provider>
    )
}
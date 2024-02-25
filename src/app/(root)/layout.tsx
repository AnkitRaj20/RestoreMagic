import Footer from '@/components/shared/Footer'
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
      {/* Sidebar */}
      <Sidebar />
      {/* MobileNavigation */}
      <MobileNav />
       <div className="root-container">
        <div className="wrapper">
            {children}
        </div>
       <Footer />
       </div>
       <Toaster />
    </main>
  )
}

export default layout
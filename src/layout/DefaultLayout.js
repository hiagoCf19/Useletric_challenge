import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div className="d-flex vh-100 ">
      <div className="d-none d-lg-block ">
        <AppSidebar />
      </div>

      <div className="w-100 d-flex flex-column hide-scrollbar ">
        <AppHeader />
        <div className="body flex-grow-1 ">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout

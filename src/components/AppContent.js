import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CSpinner } from '@coreui/react'
import routes from '../routes'
import DeviceItem from './DeviceItem'

const AppContent = () => {
  return (
    <div className="mx-2">
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.device.device.id}
              path={route.path}
              element={<DeviceItem device={route.device} />}
            />
          ))}
          <Route path="/" element={<Navigate to="/devices/smartemp" replace />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default React.memo(AppContent)

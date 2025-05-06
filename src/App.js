import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './admin/scss/style.scss'
import './admin/scss/examples.scss'

// Containers
const StoreLayout = React.lazy(() => import('../src/storefront/layouts/StoreLayout'))
const AdminLayout = React.lazy(() => import('../src/admin/layouts/AdminLayout'))

// Pages
const Login = React.lazy(() => import('./admin/views/pages/login/Login'))
const Register = React.lazy(() => import('./admin/views/pages/register/Register'))
const Page404 = React.lazy(() => import('./admin/views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./admin/views/pages/page500/Page500'))

// Private Route Protection
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  return isLoggedIn ? children : <Navigate to="/login" />
}

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }
    if (!isColorModeSet()) {
      setColorMode(storedTheme)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Public Storefront */}
          <Route path="/" element={<StoreLayout />} />

          {/* Public Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />

          {/* Admin Dashboard (Protected) */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          />

          {/* Fallback 404 */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App

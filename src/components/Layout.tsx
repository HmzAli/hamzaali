import { ReactNode, useEffect } from 'react'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
  }, []);

  return (
    <div className={`main-content ${isHomePage ? 'home-page' : 'not-homepage'}`}>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 
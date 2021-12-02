import Navbar from './NavBar';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
  
    <Navbar/>
    <main className="container py-4">
    {children}
    </main>
  </>
)
export default Layout;

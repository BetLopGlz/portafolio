import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar.js";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";


const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
       <footer className="bg-dark text-light text-center">
       <div className="row">
         <div className="col-6 col-md">
          
             <a   href="https://www.facebook.com/bettyluboop" className="btn btn-block btn-social btn-facebook">
               <span className="bi bi-facebook"></span>
             </a> 
             <a   href="https://www.linkedin.com/in/beatriz-lpz-glz/" className="btn btn-block btn-social btn-linkedin">
               <span className="bi bi-linkedin"></span>
             </a> 
             <a   href="https://twitter.com/Bettylu_Boop" className="btn btn-block btn-social btn-twitter">
               <span className=" bi bi-twitter"></span>
             </a> 
             
         
           <small className="d-block mb-3 text-muted">© 2021 Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</small>
         </div>
        
         
        
       </div>
     </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;
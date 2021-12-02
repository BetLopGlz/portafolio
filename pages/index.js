import LayOut from "../components/Layout";
import Link from "next/link";

const Index = ()=>(
    <LayOut>
         {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/Beatriz.jpg" alt="" width="300" height="300" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Beatriz López González</h1>
              <h3>Full Stack Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>
              <Link href="/hireme">
                <a className="btn btn-primary">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    

    </LayOut>
);

export default Index;
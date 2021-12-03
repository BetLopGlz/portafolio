import LayOut from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects} from "../profile";

const Index = ()=>(
    <LayOut>
         {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/Beatriz.jpg" alt="" width="200" height="200" className="img-fluid" />
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
    
    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to,description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, image,url }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href={url}>Visita el Sitio!</a>
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </section>

  </LayOut>

);

export default Index;
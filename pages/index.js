import LayOut from "../components/Layout";
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
                Programador con 4 años de experiencia en el campo laboral. He colaborado como consultor de  en empresas de banca como BBVA y HSBC , me desempeñe como consultor fullstack en Grupo Avante Textil.
                Me gusta mantenerme al día en  tecnologías emergentes recientemente he tomado cursos de Microsoft Azure y AWS.
                Adicional cuento con una certificación como Scrum Master. 
              </p>
              
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
                      <a
                        href={url}
                        target="_blank"
                        className="btn btn-light"
                      >
                      Ir al Proyecto  
                      <span class="bi bi-arrow-right-square"></span>
                      </a>
                      
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
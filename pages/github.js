import Layout from "../components/Layout.js";
import Error from "./_error.js";
import Image from "next/image";

const GitHub = ({user, statusCode})=>{
    if (statusCode) {
        return <Error statusCode={statusCode} />;
      }
    return(
        <Layout title="My Github" footer={false} dark>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center">
              <h1>{user.name}</h1>
              <Image src="/avatar-git.jpg" alt="" width={300}  height={300}  />
              <p>{user.bio}</p>
              
              <a
                href={user.html_url}
                
                className="btn btn-light"
              >
                Ir a Github
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  };

export async function getServerSideProps() {
    const res = await fetch(
      "https://api.github.com/users/BetLopGlz"
    );
    const data = await res.json();
    
    const statusCode = res.status > 200 ? res.status : false;
  
    return {
      props: {
        user: data,
        statusCode,
      },
    };
  }

export default GitHub;
import Layout from "../components/Layout";
import Error from "./_error";
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
              <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
              <p>{user.bio}</p>
              
              <a
                href={user.html_url}
                target="_blank"
                className="btn btn-light"
              >
                Go to Github
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
    console.log(data);
    const statusCode = res.status > 200 ? res.status : false;
  
    return {
      props: {
        user: data,
        statusCode,
      },
    };
  }

export default GitHub;
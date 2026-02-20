import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content text-center">
        <div className="max-w-md lg:max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to E-Bazaar</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link className="btn bg-slate-800 text-white" to={'/products'}>See all items</Link>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

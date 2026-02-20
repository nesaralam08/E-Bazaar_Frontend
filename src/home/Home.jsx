import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content text-center">
        <div className="max-w-md lg:max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to E-Bazaar</h1>
          <span className="text-rotate text-7xl leading-[2]">
            <span className="justify-items-center">
              <span>📐 DESIGN</span>
              <span>⌨️ DEVELOP</span>
              <span>🌎 DEPLOY</span>
              <span>🌱 SCALE</span>
              <span>🔧 MAINTAIN</span>
              <span>♻️ REPEAT</span>
            </span>
          </span>
          {/* <Link className="btn bg-slate-800 text-white" to={"/products"}>
            See all items
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

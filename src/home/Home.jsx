import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-base-200 min-h-screen w-full">
      <figure className="diff aspect-16/9 min-h-screen" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <div className="bg-slate-800 text-primary-content grid place-content-center  text-6xl md:text-9xl  font-black">
            E-Bazaar
            <span className="text-rotate text-4xl lg:text-7xl leading-[2]">
            <span className="justify-items-center">
              <span>📐 DESIGN</span>
              <span>⌨️ DEVELOP</span>
              <span>🌎 DEPLOY</span>
              <span>🌱 SCALE</span>
              <span>🔧 MAINTAIN</span>
              <span>♻️ REPEAT</span>
            </span>
          </span>
          </div>
        </div>
        <div className="diff-item-2" role="img">
          <div className="bg-base-200 grid place-content-center text-6xl md:text-9xl font-black">
            E-Bazaar
            <span className="text-rotate text-4xl md:text-7xl leading-[2]">
            <span className="justify-items-center">
              <span>📐 DESIGN</span>
              <span>⌨️ DEVELOP</span>
              <span>🌎 DEPLOY</span>
              <span>🌱 SCALE</span>
              <span>🔧 MAINTAIN</span>
              <span>♻️ REPEAT</span>
            </span>
          </span>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </figure>
      {/* <div className="hero-content text-center">
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
        {/* </div> */}
      {/* </div>  */}
    </div>
  );
}

export default Home;

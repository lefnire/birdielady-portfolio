import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Martha Musselman's Portfolio" },
    { name: "Professional portfolio", content: "" },
  ];
};

export default function Index() {
  return <div 
  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-display font-medium">Martha Musselman</h1>
      <p className="py-6 font-body">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Download CV</button>
    </div>
  </div>
</div>
}


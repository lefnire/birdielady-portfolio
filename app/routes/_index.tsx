import type { MetaFunction } from "@remix-run/node";
import TypeIt from "typeit-react";
import Martha_Hero from "../images/Martha_Hero.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Martha Musselman's Portfolio" },
    { name: "Professional portfolio", content: "" },
  ];
};


export default function Index() {
  return <div
    className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={Martha_Hero} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-7xl font-display text-lime-950 font-medium">Martha Musselman</h1>
        <div className="App font-body text-2xl font-semibold text-lime-600">
          <TypeIt options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance.type("Programmer").pause(850).delete(10).pause(750).type("Marketer").pause(850).delete(8).pause(750).type("Educator").pause(850).delete(8);

              // Remember to return it! .type("Programmer, Marketer, & Educator")
              return instance;
            }} />

        </div>
        <p className="py-6 font-body">Hello! I'm a dynamic professional with a rich background in Education, Marketing, and Frontend Engineering, specializing in bridging the gap between product development and market fit. With hands-on experience in startup ecosystems and a proven track record in diverse fields, I'm passionate about leveraging technology and data-driven strategies to create impactful solutions.</p>
        <button className="inline-block cursor-pointer rounded-md bg-stone-500 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Download CV</button>
      </div>
    </div>
  </div>;
}

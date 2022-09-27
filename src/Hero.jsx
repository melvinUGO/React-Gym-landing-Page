import React from "react";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main>
      <div className="hero-container" onMouseOver={closeSubmenu}>
        <h3>build up your</h3>
        <h1>Strength</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae
          eius minus ab aliquam tempora debitis aliquid voluptates, laudantium
          alias dicta, velit sed autem, ut dolor id fuga asperiores itaque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cupiditate veniam similique eveniet error dicta modi voluptate
          voluptas, est repellendus sunt.
        </p>
        <button className="btn">Register</button>
      </div>
    </main>
  );
};

export default Hero;

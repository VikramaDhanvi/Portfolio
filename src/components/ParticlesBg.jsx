import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";   // slim engine → no engine.checkVersion

const options = {
  fullScreen: { enable: false },              // stays inside <header>
  background : { color: "#0d0d14" },
  particles  : {
    number : { value: 60, density: { enable: true, value_area: 900 } },
    color  : { value: "#ffffff" },
    opacity: { value: 0.15 },
    size   : { value: 2 },
    move   : { enable: true, speed: 0.4 },
    links  : { enable: false },
  },
};

export default function ParticlesBg() {
  const init = useCallback(async (engine) => { await loadSlim(engine); }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={options}
      className="particles-bg"          /* z-index handled in CSS */
    />
  );
}

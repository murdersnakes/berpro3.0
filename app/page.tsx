import React from "react";
import Benefits from "./components/Benefits";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

import Testimonials from "./components/Testimonials";
import WhatIsBer from "./components/WhatIsBer";

export default function page() {
  return (
    <div>
      <Hero />
      <WhatIsBer />
      <CTA />
      <Pricing />
      <Benefits />
      <Testimonials Autoplay={undefined} />
      <Blog />
    </div>
  );
}

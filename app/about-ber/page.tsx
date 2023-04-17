import React from "react";
import CTA from "../components/CTA";
import CalculatingBer from "./CalculatingBer";
import CalcVsMeasured from "./CalcVsMeasured";
import FactorsEffectingBer from "./FactorsEffectingBer";
import Hero from "./Hero";
import Optimise from "./Optimise";
import Prepare from "./Prepare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Building Energy Ratings (BER) | An Essential Guide",
  description:
    "Explore the essentials of Building Energy Ratings (BER) and their importance in promoting energy-efficient homes. Learn about the rating system, the assessment process, and the key factors that contribute to a property's energy performance.",
};

export default function page() {
  return (
    <>
      <Hero />
      <CalcVsMeasured />
      <CalculatingBer />
      <CTA />
      <FactorsEffectingBer />
      <Prepare />
      <Optimise />
    </>
  );
}

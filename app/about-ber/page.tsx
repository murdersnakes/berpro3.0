import React from 'react';
import CTA from '../components/CTA';
import CalculatingBer from './CalculatingBer';
import CalcVsMeasured from './CalcVsMeasured';
import FactorsEffectingBer from './FactorsEffectingBer';
import FamiliarScale from './FamiliarScale';
import Hero from './Hero';
import Optimise from './Optimise';
import Prepare from './Prepare';

export default function page() {
	return (
		<>
			<Hero />
			<FamiliarScale />
			<CalcVsMeasured />
			<CalculatingBer />
			<CTA />
			<FactorsEffectingBer />
			<Prepare />
			<Optimise />
		
		</>
	);
}

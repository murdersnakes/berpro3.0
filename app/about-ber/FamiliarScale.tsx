import Image from 'next/image';
import React from 'react';
import aIcon from '../../public/a_rating_icon_1.svg';
import gIcon from '../../public/g_rating_icon_1.svg';

export default function FamiliarScale() {
	return (
		<div className="bg-[var(--text-color)] text-[var(--body-color)]">
			<div className="cont py-24">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<h2 className="max-w-lg mb-4 h2 md:mx-auto">
						A Familiar Rating Scale
					</h2>
					<p className="p1">
						Similar to the energy rating labels found on household appliances,
						the BER scale rates homes from A to G, where:
					</p>
				</div>
				<div className="p-10 border border-[var(--body-color)] rounded-xl bg-neutral-200 grid gap-8 row-gap-12 lg:grid-cols-2">
					<div className="max-w-md sm:mx-auto sm:text-center">
						<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
							<Image
								src={aIcon}
								alt="a rating icon for BER"
                                
                               
							/>
						</div>

						<p className="mb-3 p2">
							A-rated homes are the most energy-efficient and comfortable,
							generally having the lowest energy bills.
						</p>
					</div>
					<div className="max-w-md sm:mx-auto sm:text-center">
						<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
							<Image
								src={gIcon}
								alt="g rating icon for BER"
							/>
						</div>

						<p className="mb-3 p2">
							G-rated homes are the least energy-efficient, typically requiring
							a significant amount of energy for heating and resulting in the
							highest energy bills.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

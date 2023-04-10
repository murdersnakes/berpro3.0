import React from 'react';
import Sidebar from './components/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col md:flex-row-reverse md:items-start md:justify-end md:cont gap-12">
			{children}
			<Sidebar />
		</div>
	);
}

import { useState, useEffect } from 'react';
import Header from './Header.tsx';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	// Dark mode management
	useEffect(() => {
		const savedDarkMode = localStorage.getItem('darkMode');
		if (savedDarkMode === 'true') {
			setDarkMode(true);
		}
	}, []);
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
		}
	}, [darkMode]);

	return (
		<>
			<Header darkMode={darkMode} onDarkModeChange={() => setDarkMode(!darkMode)} />
		</>
	);
}

export default App;

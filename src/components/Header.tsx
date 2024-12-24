function Header({ darkMode, onDarkModeChange }: { darkMode: boolean; onDarkModeChange: () => void }) {
	return (
		<>
			<header className="flex h-[136px] w-full justify-between bg-mobile-pattern-header bg-cover bg-center p-8 md:bg-tablet-pattern-header lg:bg-desktop-pattern-header lg:pl-40 lg:pr-40">
				<div className="h-8 w-32 bg-logo bg-no-repeat"></div>
				<Switch onToggle={onDarkModeChange} darkMode={darkMode} />
			</header>
		</>
	);
}

function Switch({ darkMode, onToggle }: { darkMode?: boolean; onToggle?: () => void }) {
	return (
		<div className="flex items-baseline justify-center gap-4">
			<div className="h-4 w-4 bg-icon-sun bg-cover bg-no-repeat"></div>
			<div
				className="flex h-[24px] w-[50px] cursor-pointer items-center rounded-full bg-pureWhite p-1"
				onClick={onToggle}
			>
				<div
					className={`h-4 w-4 transform rounded-full bg-blue-thick transition-all duration-300 ${darkMode ? 'translate-x-[26px]' : ''}`}
				></div>
			</div>
			<div className="h-4 w-4 bg-icon-moon bg-cover bg-no-repeat"></div>
		</div>
	);
}

export default Header;

function Header({ darkMode, onDarkModeChange }: { darkMode: boolean; onDarkModeChange: () => void }) {
	return (
		<>
			<header className="bg-mobile-pattern-header md:bg-tablet-pattern-header lg:bg-desktop-pattern-header flex h-[136px] w-full justify-between bg-cover bg-center p-8 lg:pl-40 lg:pr-40">
				<div className="bg-logo h-8 w-32 bg-no-repeat"></div>
				<Switch onToggle={onDarkModeChange} darkMode={darkMode} />
			</header>
		</>
	);
}

function Switch({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) {
	return (
		<div className="flex items-baseline justify-center gap-4">
			<div className="bg-icon-sun h-4 w-4 bg-cover bg-no-repeat"></div>
			<div
				className="bg-pureWhite flex h-[24px] w-[50px] cursor-pointer items-center rounded-full p-1"
				onClick={onToggle}
			>
				<div
					className={`bg-blue-thick h-4 w-4 transform rounded-full transition-all duration-300 ${darkMode ? 'translate-x-[26px]' : ''}`}
				></div>
			</div>
			<div className="bg-icon-moon h-4 w-4 bg-cover bg-no-repeat"></div>
		</div>
	);
}

export default Header;

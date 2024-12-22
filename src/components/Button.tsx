import { ButtonProps } from '../Types.ts';

function Button({ typeButton, classes, children }: ButtonProps) {
	return (
		<button type={typeButton} className={`${classes} bg-center bg-no-repeat`}>
			<span className="hidden font-bold text-pureWhite sm:block">{children}</span>
		</button>
	);
}

export default Button;

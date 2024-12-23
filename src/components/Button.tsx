import { ButtonProps } from '../Types.ts';

function Button({ typeButton, classes, children, onSmash }: ButtonProps) {
	return (
		<button onClick={onSmash} type={typeButton} className={`${classes} bg-center bg-no-repeat`}>
			{children}
		</button>
	);
}

export default Button;

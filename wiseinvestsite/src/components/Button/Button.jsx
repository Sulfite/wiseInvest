import "./button.css"

const Button = ({typeStyle, children, ...rest}) => {
	return (
		<>
			<button className={typeStyle} {...rest}>
				{children}
			</button>
		</>
	)
}

export default Button;
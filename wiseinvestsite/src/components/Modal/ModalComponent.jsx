
import Modal from 'react-modal';

import "./modalComponent.css";

export const ModalComponent = (props) => {
	return (
		<Modal
			isOpen={props.open}
			// onAfterOpen={afterOpenModal}
			onRequestClose={props.close}
			className='defaultModal'
			style={props.customStyles}
            contentLabel='Example Modal'
		>
			{props.children}
		</Modal>
	)
}
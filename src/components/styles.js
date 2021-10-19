import styled from 'styled-components';
import bgdesktoplight from '../asserts/images/bgdesktoplight.jpg';
// header
export const HeaderContainer = styled.header`
	background-image: url(${bgdesktoplight});
	background-position: center center;
	height: 280px;
	padding: 4rem;
	& > div:nth-of-type(1) {
		display: flex;
		text-align: center;
		justify-content: center;
	}
	& h1 {
		color: #fafafa;
		margin-right: 25rem;
		letter-spacing: 4px;
		font-size: 3rem;
	}
`;
export const FormContainer = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
`;
export const Form = styled.form`
	margin-top: 2rem;
	display: flex;
	width: 570px;
	height: 40px;
	padding: 25px;
	background: #fff;
	align-items: center;
	border-radius: 7px;
	border: none;
`;
export const Input = styled.input`
	width: 95%;
	font-size: 1.2rem;
	color: #9394a5;
	font-family: 'Josefin Sans', sans-serif;
	padding-top: 4px;
	border: none;
	&:focus {
		outline: none;
	}
`;
export const CheckBox = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50% !important;
	border: 1px solid #ccc;
	background: #fff;
	margin-right: 0.7rem;
	&:hover {
		border: 1px solid hsl(220, 98%, 61%);
	}
`;
export const TodoCheckBox = styled(CheckBox)`
	background-image: ${(props) =>
		props.completed === true
			? 'linear-gradient( to right top, #57ddff,#00c9ff,#03afff,#7a8cff,#c058f3);'
			: ''};
`;
export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	margin-top: 2rem;
	margin-left: 20rem;
	box-shadow: 2px 4px 10px hsl(236, 33%, 92%);
	width: 590px;

	& > div:nth-of-type(1) {
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	// & > div:last-child {
	// 	border-top-left-radius: 0;
	// 	border-top-right-radius: 0;
	// 	border-bottom-left-radius: 17px;
	// 	border-bottom-right-radius: 17px;
	// }
`;
export const CancelButton = styled.img`
	width: 12px;
	position: absolute;
	right: 25px;
	visibility: hidden;
	cursor: pointer;
`;
export const ListItem = styled.div`
	background: hsl(0, 0%, 98%);
	display: flex;
	width: 100%;
	height: 40px;
	padding: 25px;
	background: #fff;
	align-items: center;
	position: relative;
	text-decoration: ${(props) =>
		props.completed === true ? 'line-through' : ''};

	border: none;
	border-bottom: 1px solid hsl(233, 11%, 84%);

	font-size: 18px;
	cursor: pointer;
	color: ${(props) =>
		props.completed === true ? '#E4E5F1' : 'hsl(235, 19%, 35%)'};
	&:hover ${CancelButton} {
		visibility: visible;
	}
	p {
		margin-top: 5px;
	}
`;
export const TabsWrapper = styled.div`
	// background: hsl(0, 0%, 98%);
	display: flex;
	width: 100%;
	height: 40px;
	padding: 25px;
	background: #fff;
	align-items: center;
	color: hsl(236, 9%, 61%);
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 17px;
	border-bottom-right-radius: 17px;
`;
export const ButtonWrapper = styled.div`
	margin-left: 5rem;
	margin-right: 5rem;
`;
export const Button = styled.button`
	font-family: inherit;
	border: none;
	margin-left: 1rem;
	color: hsl(236, 9%, 61%);
	background: transparent;
	cursor: pointer;
	&:hover {
		color: hsl(235, 19%, 35%);
	}
	color: ${(props) =>
		props.active === true ? '#5a94f4' : 'hsl(235, 19%, 35%)'};
`;
export const Message = styled.div`
	background: #fff;
	height: 5rem;
	padding: 3rem;
	border-bottom: 1px solid hsl(233, 11%, 84%);
	color: hsl(235, 19%, 35%);
`;
// export const AllButton = styled(button)`
// 	font-family: inherit;
// 	border: 0;
// `;
// export const ActiveButton = styled(button)`
// 	font-family: inherit;
// 	border: 0;
// 	margin-left: 1rem;
// `;
// export const CompletedButton = styled(button)`
// 	font-family: inherit;
// 	border: 0;
// 	margin-left: 1rem;
// `;
// export const ClearButton = styled(button)`
// 	font-family: inherit;
// 	border: 0;
// 	margin-left: 1rem;
// `;

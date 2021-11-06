import styled from 'styled-components';
import bgdesktoplight from '../asserts/images/bgdesktoplight.jpg';
export const AppWrapper = styled.div`
	background: ${({ theme }) => theme.background};
	height: 100vh;
`;
// header
export const HeaderContainer = styled.header`
	background-image: ${({ theme }) => theme.backgroundImage};
	background-position: center center;
	height: 280px;
	padding: 4rem;
	margin-bottom: 0;
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
	width: 590px;
	height: 40px;
	padding: 25px;
	background: ${({ theme }) => theme.listItemBackground};
	align-items: center;
	border-radius: 7px;
	border: none;
`;
export const Input = styled.input`
	background: ${({ theme }) => theme.listItembBackground};
	width: 95%;
	font-size: 1.2rem;
	color: #9394a5;
	font-family: 'Josefin Sans', sans-serif;
	padding-top: 4px;
	border: none;
	&:focus {
		outline: none;
	}
	background: ${({ theme }) => theme.listItemBackground};
`;
export const CheckBox = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50% !important;
	border: ${({ theme }) => theme.borderBottom};
	background: ${({ theme }) => theme.listItemBackground};
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
	text-align: center;
`;
export const Check = styled.img`
	display: ${(props) => (props.completed === false ? 'none' : 'inline')};
`;
export const Main = styled.main`
	width: 100vw;
	z-index: 1;
`;
export const ListContainer = styled.div`
	display: flex;
	width: 590px;
	flex-direction: column;
	margin-left: 24rem;
	margin-top: -4.2rem;

	z-index: 2;
	box-shadow: ${({ theme }) => theme.boxShadow};

	& > div:nth-of-type(1) {
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
`;
export const CancelButton = styled.img`
	width: 12px;
	position: absolute;
	right: 25px;
	visibility: hidden;
	cursor: pointer;
`;
export const ListItem = styled.div`
	background: ${({ theme }) => theme.listItemBackground};
	display: flex;
	width: 590px;
	height: 40px;
	padding: 25px;
	// background: #fff;
	align-items: center;
	position: relative;

	text-decoration: ${(props) =>
		props.completed === true ? 'line-through' : ''};

	border: none;
	border-bottom: ${({ theme }) => theme.borderBottom};

	font-size: 18px;
	cursor: pointer;
	color: ${(props) =>
		props.completed === true ? 'hsl(235, 19%, 35%)' : 'hsl(235, 19%, 35%)'};
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
	width: 590px;
	height: 40px;
	padding: 25px;
	background: ${({ theme }) => theme.listItemBackground};
	align-items: center;
	color: hsl(236, 9%, 61%);
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 17px;
	border-bottom-right-radius: 17px;
	// margin-left: 24.1rem;
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
		color: ${({ theme }) => theme.hover};
	}
	color: ${(props) => (props.active === true ? '#5a94f4' : 'hsl(236,9%,61%)')};
`;
export const Message = styled.div`
	background: ${({ theme }) => theme.listItemBackground};
	height: 5rem;
	padding: 3rem;
	border-bottom: ${({ theme }) => theme.borderBottom};
	color: ${({ theme }) => theme.text};
	width: 590px;
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

export const ThemeButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
`;

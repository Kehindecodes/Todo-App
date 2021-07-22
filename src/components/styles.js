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
`;
export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	margin-top: 2rem;
	// margin-left: 50%;
	// margin-right: 50%;
`;
export const ListItem = styled.div`
	background: hsl(0, 0%, 98%);
	display: flex;
	width: 570px;
	height: 40px;
	padding: 25px;
	background: #fff;
	align-items: center;
	// border-radius: 7px;
	border: none;
	border-bottom: 1px solid hsl(233, 11%, 84%);
    border-top-left-radius:7px
    border-top-right-radius:7px
    border-bottom-left-radius:0px
    border-bottom-right-radius:0px
`;

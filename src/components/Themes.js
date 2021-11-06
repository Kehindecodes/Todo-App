import bgdesktoplight from '../asserts/images/bgdesktoplight.jpg';
import bgdesktopdark from '../asserts/images/bgdesktopdark.jpg';
export const lightTheme = {
	text: 'hsl(235, 19%, 35%)',
	backgroundImage: `url(${bgdesktoplight})`,
	background: 'hsl(0, 0%, 98%)',
	listItemBackground: '#fff',
	boxShadow: '2px 4px 10px hsl(236, 33%, 92%)',
	borderBottom: '1px solid hsl(233, 11%, 84%)',
	hover: 'hsl(235, 19%, 35%)',
};
export const darkTheme = {
	text: 'hsl(236, 33%, 92%)',
	backgroundImage: `url(${bgdesktopdark})`,
	background: 'hsl(235, 21%, 11%)',
	listItemBackground: ' hsl(235, 24%, 19%)',
	boxShadow: '2px 4px 10px hsl(235, 24%, 19%)',
	borderBottom: '1px solid  hsl(237, 14%, 26%)',
	hover: 'hsl(236, 33%, 92%)',
};

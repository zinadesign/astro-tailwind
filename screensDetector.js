module.exports = function ({ addBase, theme }) {
	if (process.env.NODE_ENV === 'production') return;

	const screens = theme('screens', {});
	const breakpoints = Object.keys(screens);
	// https://tailwindcss.com/docs/customizing-colors
	const colors = [
		'#475569', // slate-600
		'#dc2626', // red-600
		'#d97706', // amber-600
		'#16a34a', // green-600
		'#2563eb', // blue-600
		'#9333ea', // purple-600
		'#db2777', // pink-600
		'#4d7c0f', // lime-700
		'#0369a1', // sky-700
		'#a21caf', // fuchsia-700
	];

	const removePxSuffix = (value) => {
		return parseInt(value, 10);
	};

	addBase({
		'body::after': {
			content: `"< ${screens[breakpoints[0]]}"`,
			position: 'fixed',
			right: '5px',
			bottom: '5px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '2px 10px',
			borderRadius: '7px',
			background: colors[0], // Используем первый цвет из массива для начального цвета
			color: '#fff',
			fontSize: '1rem',
			fontWeight: '400',
			textAlign: 'center',
			zIndex: '99999',
		},
		...breakpoints.reduce((acc, current, index) => {
			acc[`@media (min-width: ${screens[current]})`] = {
				'body::after': {
					content: `'${current} ${removePxSuffix(screens[current])}'`,
					background: colors[(index + 1) % colors.length], // Используем следующий цвет из массива, пропуская первый цвет
				},
			};
			return acc;
		}, {}),
	});
};
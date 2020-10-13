export default (str) =>
	str
		.split('-')
		.map((frag, i) =>
			i ? frag : `${frag.slice(0, 1).toUpperCase()}${frag.slice(1)}`
		)
		.join(' ')

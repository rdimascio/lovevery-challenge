/**
 * Convert a class case string to camel case.
 * @param {string} str
 * @returns {string}
 */
export default (str) =>
	str
		.split('-')
		.map((frag, i) =>
			i ? `${frag.slice(0, 1).toUpperCase()}${frag.slice(1)}` : frag
		)
		.filter(Boolean)
		.join('')

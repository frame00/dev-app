import { html } from '../lib/html'
import { style } from '../lib/style'
import { large } from '../style/large'

const className = 'container'

export const container = async (content: string) => html`
	${await style`
		.${className} {
			max-width: 900px;
			margin: auto;
			padding: 2rem;
			${large(`
				padding: 5rem;
			`)}
		}
	`}
	<div class='${className}'>
		${content}
	</div>
`
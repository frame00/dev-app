import { amp as html } from '../lib/amp'
import { DistributionTarget, AddressBalance } from 'dev-distribution/src/types'
import { packageInfo } from '../template/package-widget'
import { IncomingMessage } from 'http'
import { style } from '../lib/style'
import { header } from '../template/header'
import { whats } from '../template/whats'
import { footer } from '../template/footer'

interface Opts {
	readonly request: IncomingMessage
	readonly package: DistributionTarget
	readonly account: AddressBalance
}

const section = 'section__'
const classNames = {
	header: 'header',
	packageInfo: 'package-info',
	whats: 'whats',
	footer: 'footer'
}

export const packagePage = async ({
	package: pkg,
	account,
	request
}: Opts) => html`
<!doctype html>
<html ⚡>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
		<link rel="canonical" href="${request.url}">
		<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700" rel="stylesheet">
		${await style`
			body {
				background: black;
				color: white;
				font-family: 'Montserrat Alternates', sans-serif;
			}
			section {
				&:not(:first-child) {
					border-top: 0.5px solid #ffffff80;
				}
			}
		`}
	</head>
	<body>
		${await header({ className: classNames.header })}
		<main>
			<section class='${section}${classNames.packageInfo}'>
				${await packageInfo({
					package: pkg,
					account,
					className: classNames.packageInfo
				})}
			</section>
			<section class='${section}${classNames.whats}'>
				${await whats({ className: classNames.whats })}
			</section>
		</main>
		${await footer({ className: classNames.footer })}
	</body>
</html>
`

import Head from 'next/head'

import '../public/css/style.css'

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

//add fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { AppProps } from 'next/app'
config.autoAddCss = false

function MyApp({ Component, pageProps }:AppProps) {

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/images/title.png" />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp

import Head from "next/head"

const TITLE = "Dazzle Icons – SVG icons for everyone"
const DESCRIPTION = "New MIT open source SVG icon library designed by Temuujin. Solid and stroke variants, one-click copy-paste, and Figma file."

const SEO = () => (
	<Head>

		<meta
			charSet="utf-8"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		/>
		<link
			rel="icon"
			href="https://heroicons.dev/static/favicon.ico"
		/>
		<title>
			{TITLE}
		</title>
		<meta
			name="title"
			content={TITLE}
		/>
		<meta
			name="description"
			content={DESCRIPTION}
		/>

		{/* Facebook */}
		<meta
			property="og:type"
			content="website"
		/>
		<meta
			property="og:url"
			content="https://dazzleui.com"
		/>
		<meta
			property="og:title"
			content={TITLE}
		/>
		<meta
			property="og:description"
			content={DESCRIPTION}
		/>
		<meta
			property="og:image"
			content="https://dazzleui.com/static/social.png"
		/>

		{/* Twitter */}
		<meta
			property="twitter:card"
			content="summary_large_image"
		/>
		<meta
			property="twitter:url"
			content="https://dazzleui.com"
		/>
		<meta
			property="twitter:title"
			content={TITLE}
		/>
		<meta
			property="twitter:description"
			content={DESCRIPTION}
		/>
		<meta
			property="twitter:image"
			content="https://dazzleui.com/static/social.png"
		/>

		{/* New */}
		<meta
			name="twitter:creator"
			content="@acepmon"
		/>

	</Head>
)

export default SEO

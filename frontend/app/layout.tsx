import './globals.css'
import  { Suspense } from 'react'
import Loading from 'loading'

export const metadata = {
	title: 'NextJS + Electron Boilerplate',
	description:
		'A neat boilerplate for building Electron apps, with NextJS at the frontend and pre-configured with a bunch of handy development tools.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Suspense fallback={<Loading />}>
				<body>{children}</body>
			</Suspense>
		</html>
	)
}

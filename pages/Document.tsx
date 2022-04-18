import { Html, Head } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Lee Lazarecky</title>
                <meta name="description" content="A portfolio for Lee Lazarecky" />
                <link rel="icon" href="/public/favicon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin={"true"}
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </Html>
    )
}
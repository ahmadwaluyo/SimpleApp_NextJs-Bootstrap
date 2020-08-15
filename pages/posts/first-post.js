import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <div>
            render to Home <Link href="/">Home</Link>
        </div>
      </>
    )
  }
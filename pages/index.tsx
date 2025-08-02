import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>StackedUp Dashboard</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">📈 Welcome to StackedUp</h1>
        <p className="text-gray-600 text-lg">Your full investor dashboard is live.</p>
      </main>
    </>
  )
}

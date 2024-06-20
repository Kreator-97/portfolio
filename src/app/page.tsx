import { Metadata } from 'next'
import { Footer, Header, Main, Navbar, Sidebar } from '../components'

export const metadata: Metadata = {
  description: 'Desarrollador de sitios y aplicaciones web',
  title: 'Donato Monzón - Desarrollador Web Full Stack',
  authors: [{ name: 'Donato Monzón' }],
  keywords: ['donato', 'monzón', 'donato monzón', 'desarrollar web', 'developer', 'react developer', 'frontend developer', 'fullstack developer', 'tuxtla gutierrez', 'monzon'],
}

export default function Home() {
  return (
    <div className="App mx-auto" id='home'>
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <Sidebar />
    </div>
  )
}

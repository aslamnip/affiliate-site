import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Page from './blog/page'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  return (
    <main>
      <div>
        <Page />
      </div>
    </main>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Layout from "../layaut/Layaut.js"
import ContentMain from '../components/ContentMain/ContentMain'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout className="home">
        <ContentMain/>
      </Layout>
  )
}

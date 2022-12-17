import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image";
import brush from "../../public/BRUSH.svg";
import heroImage from "../../public/hero.png";



export default function Header() {
  return (
    <section className='hero'>
      {/* <Navbar /> */}
      <div className='content'>
        <div className="container">
          <div className='wrapper'>
            <h1 className='title'>El Secreto de tu cocina</h1>
             <Image src={brush} alt="Pintura" className='brush' /> 
          </div>
        </div>
      </div>
      <div className='background' />
      <Image
        src={heroImage}
        alt="Mesa de cubiertos con polvos mágicos"
        className='background'
      />
      <div className='veil' />
    </section>
  );
}

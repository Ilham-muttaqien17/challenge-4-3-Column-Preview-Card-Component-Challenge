import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>3-Column Preview Card Component Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:grid md:grid-cols-3 mx-4 items-center my-10 md:w-8/12 md:mx-0">
        <Card
          className="bg-orange rounded-t-lg md:rounded-l-lg md:rounded-tr-none" 
          icon="/sedans.svg"
          title="SEDANS"
          paragraph="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          txtButton="text-orange active:bg-orange active:text-white active:ring-white active:ring-1"
        />
        <Card
          className="bg-cyan-100" 
          icon="/suvs.svg"
          title="SUVS"
          paragraph="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          txtButton="text-cyan-100 active:bg-cyan-100 active:text-white active:ring-white active:ring-1"
        />
        <Card
          className="bg-cyan-200 rounded-b-lg md:rounded-r-lg md:rounded-bl-none" 
          icon="/luxury.svg"
          title="LUXURY"
          paragraph="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          txtButton="text-cyan-200 active:bg-cyan-200 active:text-white active:ring-white active:ring-1"
        />
      </div>
      
    </div>
  )
}

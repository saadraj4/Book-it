import React from 'react'
import Header from '../components/Header';
import BusBanner from '../components/BusBanner';
import BusRoutes from '../components/BusRoutes';
import Download from '../components/Download';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Partners from '../components/Partners';

export default function Bus() {
  return (
    <div>
    <Header/>
    <BusBanner />
    <BusRoutes />
    <Download />
    <Partners />
    <Features />
    <Footer />
    </div>
  )
}


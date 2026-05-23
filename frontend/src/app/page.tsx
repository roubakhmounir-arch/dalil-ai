'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compass, Zap, MapPin } from 'lucide-react';

/**
 * Landing Page Component
 * Showcases Turath-AI with authentic Moroccan design
 * Features: Hero section, feature highlights, CTA buttons
 */
export default function Home() {
  return (
    <main className="zellige-bg-section">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-moroccan-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold heading-decorative">Turath-AI</h1>
            <div className="hidden md:flex gap-6">
              <Link href="/scanner" className="text-moroccan-primary hover:text-moroccan-secondary transition">
                Scanner
              </Link>
              <Link href="/map" className="text-moroccan-primary hover:text-moroccan-secondary transition">
                Heritage Map
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-decorative mb-6 text-5xl md:text-6xl">
            Discover Moroccan Heritage
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-inter">
            Explore the rich cultural landscape of Morocco through AI-powered analysis of traditional mosaics
            and interactive historical maps. Uncover the stories behind Zellige patterns, ancient fountains,
            and medina water networks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-moroccan px-8 py-3 text-lg"
            >
              <Link href="/scanner">Start Scanning</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg border-2 border-moroccan-primary text-moroccan-primary rounded-moorish-md hover:bg-moroccan-primary/5 transition"
            >
              <Link href="/map">Explore Map</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-moroccan-background/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl heading-decorative text-center mb-16">Our Features</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Zellige Scanner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-moroccan"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-moroccan rounded-full arch-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-moroccan-primary mb-3 text-center">
                Zellige AI Scanner
              </h4>
              <p className="text-gray-600 text-center">
                Upload images of Moroccan mosaics and discover their styles, geometric patterns,
                and regional origins using advanced AI analysis.
              </p>
            </motion.div>

            {/* Feature 2: Heritage Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-moroccan"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-accent rounded-full arch-full">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-moroccan-primary mb-3 text-center">
                Heritage GIS Map
              </h4>
              <p className="text-gray-600 text-center">
                Explore interactive maps showing historical sites, traditional water fountains (Seqqayas),
                and medina water distribution networks across all Moroccan provinces.
              </p>
            </motion.div>

            {/* Feature 3: Cultural Explorer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-moroccan"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-moroccan-secondary text-white rounded-full arch-full">
                  <Compass className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-moroccan-primary mb-3 text-center">
                Cultural Explorer
              </h4>
              <p className="text-gray-600 text-center">
                Immerse yourself in Moroccan heritage with detailed information about historical sites,
                traditional architecture, and cultural significance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl heading-decorative mb-6">Authentic Moroccan Design</h3>
              <p className="text-gray-600 mb-4">
                Every element of Turath-AI is inspired by Morocco's rich architectural heritage.
                From Zellige geometric patterns to Moorish arches, our interface celebrates traditional
                design principles while delivering modern functionality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-moroccan-primary rounded-full"></span>
                  <span className="text-gray-700">Majorelle Blue & Terracotta Color Palette</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-moroccan-primary rounded-full"></span>
                  <span className="text-gray-700">Zellige Mosaic Background Patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-moroccan-primary rounded-full"></span>
                  <span className="text-gray-700">Moorish Arch-Inspired Interfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-moroccan-primary rounded-full"></span>
                  <span className="text-gray-700">Arabic & Modern Typography Blend</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-moroccan rounded-moorish-lg opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-moroccan-primary text-center text-xl font-amiri">
                  فن الزليج<br/><span className="text-sm text-gray-600">Art of Zellige</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-moroccan text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore?</h3>
          <p className="text-lg mb-8 text-white/90">
            Begin your journey through Moroccan heritage. Upload a mosaic image or explore the interactive map.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-moroccan-primary font-bold rounded-moorish-md hover:bg-moroccan-background transition"
            >
              <Link href="/scanner">Try Scanner Now</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white rounded-moorish-md hover:bg-white/10 transition"
            >
              <Link href="/map">View Heritage Map</Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-moroccan-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Turath-AI</h4>
              <p className="text-gray-400">
                Celebrating Moroccan cultural heritage through AI and interactive exploration.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/scanner" className="hover:text-white transition">Zellige Scanner</Link></li>
                <li><Link href="/map" className="hover:text-white transition">Heritage Map</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-gray-400">
                Made with ❤️ for Moroccan Heritage
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Turath-AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

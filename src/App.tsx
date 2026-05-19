/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Story from './components/Story';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { GALLERY_ITEMS } from './constants';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-studio-accent/30">
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio onSelectImage={setSelectedImage} />
        <Story />
        <Exhibitions />
        <Contact />
      </main>

      <Footer />
      
      <ImageModal 
        selectedImage={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}

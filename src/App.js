import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Trainers from './components/Trainers';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Forum from './components/forum';
import Footer from './components/Footer';
import CheckoutForm from './components/CheckoutForm';
import Step1Form from './components/Step1Form';
import CalendarPage from './components/Calendar';
import Completed from './components/Completed';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import FAQ from './components/faq'; 

import './App.css';
import { TranslationProvider } from './go.js';

function App() {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="process">
                  <Process />
                </section>
                <section id="trainers">
                  <Trainers />
                </section>
                <section id="reviews">
                  <Reviews />
                </section>
                <section id="pricing">
                  <Pricing />
                </section>
                <Footer />
              </>
            } />
            <Route path="/step1" element={<Step1Form />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/signup" element={<Step1Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </Router>
    </TranslationProvider>
  );
}

export default App;

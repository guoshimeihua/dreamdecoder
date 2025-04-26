<template>
  <div class="home-page">
    <Hero />
    <Features id="features" />
    <HowItWorks id="how-it-works" />
    <NightmareForm id="nightmare-form" />
    <Testimonials id="testimonials" />
    <!-- <Pricing id="pricing" /> -->
    <FAQ id="faq" />
  </div>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import Features from '../components/sections/Features.vue'
import HowItWorks from '../components/sections/HowItWorks.vue'
import NightmareForm from '../components/nightmare/NightmareForm.vue'
import Testimonials from '../components/sections/Testimonials.vue'
// import Pricing from '../components/sections/Pricing.vue'
import FAQ from '../components/sections/FAQ.vue'
</script>
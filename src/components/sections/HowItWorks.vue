<template>
  <section :id="id" class="how-it-works-section section">
    <div class="container">
      <h2 class="section-title">How It Works</h2>
      <p class="section-subtitle">
        DreamDecoder uses a simple four-step process to help you understand and overcome your nightmares
      </p>
      
      <div class="steps">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
          <div class="step-image">
            <img :src="step.image" :alt="step.title" />
          </div>
        </div>
      </div>
      
      <div class="cta-container">
        <a href="#nightmare-form" class="btn btn-primary btn-lg">Start Your Analysis Now</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  id: String
})

const steps = [
  {
    title: "Document Your Nightmare",
    description: "Fill out our comprehensive form with details about your nightmare, including frequency, timing, emotions, plot, and physical reactions.",
    image: "https://images.pexels.com/photos/3807693/pexels-photo-3807693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "AI-Powered Analysis",
    description: "Our advanced AI processes your input, analyzing patterns, symbols, and psychological factors using cutting-edge techniques.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Receive Professional Interpretation",
    description: "Get a detailed report explaining the meaning behind your nightmare, including potential triggers and psychological insights.",
    image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Personalized Recommendations",
    description: "We provide customized strategies and techniques to help reduce nightmare frequency and improve your sleep quality.",
    image: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]
</script>

<style scoped>
.how-it-works-section {
  background-color: var(--color-gray-50);
  position: relative;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  margin-top: var(--spacing-12);
}

.step {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: calc(-1 * var(--spacing-8));
  left: 24px;
  width: 2px;
  height: var(--spacing-8);
  background-color: var(--color-primary-light);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.step-content {
  padding-left: var(--spacing-12);
}

.step-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-3);
  color: var(--color-gray-900);
}

.step-description {
  color: var(--color-gray-600);
  line-height: 1.6;
}

.step-image {
  display: none;
}

.step-image img {
  border-radius: var(--radius);
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 300px;
  box-shadow: var(--shadow);
}

.cta-container {
  text-align: center;
  margin-top: var(--spacing-16);
}

@media (min-width: 768px) {
  .step {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  .step-image {
    display: block;
  }
  
  .step:nth-child(even) {
    direction: rtl;
  }
  
  .step:nth-child(even) .step-content,
  .step:nth-child(even) .step-image {
    direction: ltr;
  }
  
  .step:nth-child(even) .step-number {
    left: auto;
    right: 0;
  }
  
  .step:nth-child(even) .step-content {
    padding-left: 0;
    padding-right: var(--spacing-12);
  }
  
  .step:not(:last-child)::after {
    left: 50%;
    width: 2px;
    height: var(--spacing-12);
    transform: translateX(-50%);
  }
}
</style>
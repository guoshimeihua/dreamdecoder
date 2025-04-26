<template>
  <section :id="id" class="features-section section">
    <div class="container">
      <h2 class="section-title">Powerful Features</h2>
      <p class="section-subtitle">
        Our advanced platform combines AI technology with psychological expertise to provide you with accurate nightmare interpretations and actionable solutions.
      </p>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  id: String
})

const features = [
  {
    icon: '🧠',
    title: 'AI-Powered Analysis',
    description: 'Our sophisticated AI engine interprets your nightmare details using the latest psychological research and dream analysis methods.'
  },
  // {
  //   icon: '📊',
  //   title: 'Comprehensive Reports',
  //   description: 'Receive detailed reports explaining the symbolism, psychological factors, and potential triggers behind your nightmares.'
  // },
  {
    icon: '🛠️',
    title: 'Personalized Solutions',
    description: 'Get customized strategies and techniques to address the root causes of your nightmares and improve sleep quality.'
  },
  {
    icon: '📱',
    title: 'User-Friendly Interface',
    description: 'Our intuitive form makes it easy to document your nightmare experiences with detailed guidance at each step.'
  },
  {
    icon: '🔒',
    title: 'Privacy-Focused',
    description: 'Your sensitive information is encrypted and protected. We never share your personal data with third parties.'
  },
  // {
  //   icon: '📈',
  //   title: 'Progress Tracking',
  //   description: 'Monitor your improvement over time with our tracking tools that show reduction in nightmare frequency and intensity.'
  // },
  // {
  //   icon: '🏆',
  //   title: 'Expert-Backed',
  //   description: 'Our interpretation engine is developed in consultation with sleep specialists and psychological experts.'
  // },
  // {
  //   icon: '📚',
  //   title: 'Educational Resources',
  //   description: 'Access a rich library of articles and guides about nightmares, sleep disorders, and mental wellness strategies.'
  // }
]
</script>

<style scoped>
.features-section {
  background-color: var(--color-white);
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  margin-top: var(--spacing-12);
}

.feature-card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: var(--spacing-6);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-4);
}

.feature-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-3);
  color: var(--color-gray-900);
}

.feature-description {
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 0;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
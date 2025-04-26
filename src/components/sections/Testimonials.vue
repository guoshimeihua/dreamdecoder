<template>
  <section :id="id" class="testimonials-section section">
    <div class="container">
      <h2 class="section-title">Success Stories</h2>
      <p class="section-subtitle">
        Hear from people who have used DreamDecoder to understand their nightmares and improve their sleep quality
      </p>
      
      <div class="testimonials-slider" ref="slider">
        <div class="testimonials-track" :style="trackStyle">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="testimonial-card"
          >
            <div class="testimonial-content">
              <div class="testimonial-rating">
                <span v-for="i in 5" :key="i" class="star" :class="{ 'filled': i <= testimonial.rating }">★</span>
              </div>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-title">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="slider-controls">
        <button class="slider-arrow prev" @click="prevSlide" aria-label="Previous testimonial">
          ←
        </button>
        <div class="slider-dots">
          <button 
            v-for="(_, index) in dots" 
            :key="index"
            :class="['slider-dot', { 'active': currentSlide === index }]"
            @click="goToSlide(index)"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
        <button class="slider-arrow next" @click="nextSlide" aria-label="Next testimonial">
          →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineProps } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
  id: String
})

const slider = ref(null)
const currentSlide = ref(0)
const autoplayInterval = ref(null)
const { width } = useWindowSize()

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Teacher, 34",
    text: "After months of recurring nightmares about falling, DreamDecoder helped me understand the connection to my fear of failure at work. The personalized techniques they suggested have reduced my nightmares by 80% in just three weeks!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Michael Chen",
    title: "Software Engineer, 29",
    text: "I was skeptical at first, but the analysis I received was surprisingly accurate. My nightmares about being chased were linked to deadline anxiety. The cognitive exercises recommended have made a huge difference in both my sleep and work life.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Emily Rodriguez",
    title: "Healthcare Worker, 41",
    text: "As a nurse, my PTSD-related nightmares were affecting my ability to function. DreamDecoder's interpretation helped me understand my triggers and recommended therapies that complemented my professional treatment. I'm finally sleeping better.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "James Wilson",
    title: "Marketing Director, 36",
    text: "The recurring nightmare about speaking gibberish in public was affecting my confidence. DreamDecoder connected it to imposter syndrome and offered practical techniques that helped me overcome both the nightmares and my work anxiety.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Aisha Patel",
    title: "Graduate Student, 26",
    text: "My thesis defense anxiety was manifesting in nightmares about being unprepared. The analysis was spot-on, and the mindfulness techniques they suggested not only helped with sleep but improved my overall academic performance!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

const slidesPerView = computed(() => {
  if (width.value >= 1024) return 3
  if (width.value >= 768) return 2
  return 1
})

const totalSlides = computed(() => testimonials.length - slidesPerView.value + 1)
const dots = computed(() => Array(totalSlides.value).fill(null))

const trackStyle = computed(() => {
  const translateX = `-${currentSlide.value * 100 / slidesPerView.value}%`
  return {
    transform: `translateX(${translateX})`,
    gridTemplateColumns: `repeat(${testimonials.length}, ${100 / slidesPerView.value}%)`
  }
})

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
  resetAutoplay()
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = totalSlides.value - 1
  }
  resetAutoplay()
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const resetAutoplay = () => {
  clearInterval(autoplayInterval.value)
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  clearInterval(autoplayInterval.value)
})
</script>

<style scoped>
.testimonials-section {
  background-color: var(--color-gray-50);
  position: relative;
  overflow: hidden;
}

.testimonials-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: var(--spacing-8);
}

.testimonials-track {
  display: grid;
  transition: transform 0.5s ease;
}

.testimonial-card {
  padding: var(--spacing-3);
}

.testimonial-content {
  background-color: var(--color-white);
  border-radius: var(--radius);
  padding: var(--spacing-6);
  box-shadow: var(--shadow);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-rating {
  margin-bottom: var(--spacing-4);
}

.star {
  color: var(--color-gray-300);
  font-size: 1.25rem;
}

.star.filled {
  color: var(--color-warning);
}

.testimonial-text {
  flex: 1;
  font-style: italic;
  color: var(--color-gray-700);
  line-height: 1.6;
  margin-bottom: var(--spacing-6);
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: var(--spacing-3);
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-1);
}

.author-title {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  margin-bottom: 0;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-8);
  gap: var(--spacing-4);
}

.slider-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.25rem;
}

.slider-arrow:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.slider-dots {
  display: flex;
  gap: var(--spacing-2);
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-gray-300);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.slider-dot.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}
</style>
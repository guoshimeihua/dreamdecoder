<template>
  <section :id="id" class="faq-section section">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-subtitle">
        Find answers to common questions about nightmare analysis and our service
      </p>
      
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="faq-item"
        >
          <button 
            class="faq-question" 
            :class="{ 'active': activeIndex === index }"
            @click="toggleItem(index)"
            :aria-expanded="activeIndex === index"
          >
            {{ item.question }}
            <span class="toggle-icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </button>
          <div 
            class="faq-answer" 
            :class="{ 'active': activeIndex === index }"
            :style="{ maxHeight: activeIndex === index ? answerHeight[index] + 'px' : '0' }"
          >
            <div ref="answerContent" class="answer-content">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="faq-cta">
        <p>Can't find what you're looking for? send email to guoshimeihua@gmail.com.</p>
        <!-- <a href="#contact" class="btn btn-primary">Contact Us</a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, onMounted, nextTick } from 'vue'

const props = defineProps({
  id: String
})

const activeIndex = ref(null)
const answerContent = ref([])
const answerHeight = ref([])

const faqItems = [
  {
    question: "How accurate is the nightmare analysis?",
    answer: "Our AI-powered analysis is based on the latest research in sleep psychology and dream interpretation. While no interpretation system is 100% accurate, our users report high satisfaction rates with the insights provided. The accuracy improves with the level of detail you provide in your description."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We take privacy seriously and employ industry-standard encryption to protect your data. Your nightmare descriptions and personal information are never shared with third parties. You can opt to delete your data at any time from your account settings."
  },
  {
    question: "How long does it take to receive my nightmare analysis?",
    answer: "Most analyses are delivered within minutes after submission. Complex or detailed nightmares may take up to an hour for thorough processing."
  },
  {
    question: "Can DreamDecoder help with recurring nightmares?",
    answer: "Yes, our system is especially effective for recurring nightmares. By identifying patterns and potential triggers, we can provide targeted recommendations to address the root causes of persistent nightmares. Many users report significant reduction in recurring dream frequency within 2-4 weeks."
  },
  {
    question: "Is DreamDecoder a substitute for therapy?",
    answer: "No, DreamDecoder is not a substitute for professional mental health treatment. While our service can provide valuable insights and self-help strategies, individuals with severe nightmare disorders, PTSD, or other mental health conditions should consult with qualified healthcare providers."
  },
  {
    question: "Can I use DreamDecoder for positive dreams too?",
    answer: "While our system is optimized for nightmare analysis, it can also interpret positive dreams. However, the recommendations and insights are specifically designed to address distressing dream content. We're developing a separate module for positive dream enhancement that will be available soon."
  },
  {
    question: "What if I'm not satisfied with my analysis?",
    answer: "If you're not satisfied with your analysis, you can provide additional details about your nightmare for a refined interpretation at no extra cost."
  },
  {
    question: "How does the Google AI model work for dream interpretation?",
    answer: "Our system utilizes Google's advanced natural language processing AI to analyze the narrative elements, emotional content, and symbolic patterns in your nightmare descriptions. The AI has been specifically trained on psychological research about dreams and nightmares, allowing it to identify relevant themes and potential meanings that might not be immediately obvious."
  }
]

const toggleItem = async (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
    await nextTick()
    if (answerContent.value[index]) {
      answerHeight.value[index] = answerContent.value[index].scrollHeight
    }
  }
}

onMounted(async () => {
  answerHeight.value = new Array(faqItems.length).fill(0)
  await nextTick()
  
  answerContent.value.forEach((el, index) => {
    if (el) {
      answerHeight.value[index] = el.scrollHeight
    }
  })
})
</script>

<style scoped>
.faq-section {
  background-color: var(--color-gray-50);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  margin-top: var(--spacing-10);
}

.faq-item {
  background-color: var(--color-white);
  border-radius: var(--radius);
  margin-bottom: var(--spacing-4);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: var(--shadow);
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: var(--spacing-5) var(--spacing-6);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-gray-800);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.faq-question:hover {
  color: var(--color-primary);
}

.faq-question.active {
  color: var(--color-primary);
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  transition: transform 0.3s ease;
}

.faq-question.active .toggle-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.answer-content {
  padding: 0 var(--spacing-6) var(--spacing-6);
  color: var(--color-gray-700);
  line-height: 1.6;
}

.faq-cta {
  text-align: center;
  margin-top: var(--spacing-12);
}

.faq-cta p {
  margin-bottom: var(--spacing-4);
  font-size: 1.125rem;
  color: var(--color-gray-700);
}
</style>
<template>
  <section :id="id" class="nightmare-form-section section">
    <div class="container">
      <h2 class="section-title">Analyze Your Nightmare</h2>
      <p class="section-subtitle">
        Complete the form below with details about your nightmare experience. The more information you provide, 
        the more accurate our analysis will be.
      </p>
      
      <div class="form-container">
        <div class="form-navigation">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            :class="['nav-step', { 'active': currentStep === index, 'completed': currentStep > index }]"
            @click="goToStep(index)"
          >
            <div class="step-indicator">
              <span v-if="currentStep <= index">{{ index + 1 }}</span>
              <span v-else class="check-icon">✓</span>
            </div>
            <span class="step-name">{{ step.name }}</span>
          </div>
        </div>
        
        <div class="form-content">
          <form @submit.prevent="submitForm">
            <!-- Step 1: Basic Information -->
            <div v-if="currentStep === 0" class="form-step">
              <h3 class="form-step-title">Nightmare Basics</h3>
              
              <div class="form-group">
                <label class="form-label">How often do you experience nightmares?</label>
                <div class="checkbox-group">
                  <label class="checkbox-label" v-for="option in frequencyOptions" :key="option">
                    <input 
                      type="checkbox" 
                      :value="option" 
                      v-model="formData.frequency"
                      class="checkbox-input" 
                    />
                    <span class="checkbox-text">{{ option }}</span>
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">When do your nightmares typically occur?</label>
                <div class="checkbox-group">
                  <label class="checkbox-label" v-for="option in timingOptions" :key="option">
                    <input 
                      type="checkbox" 
                      :value="option" 
                      v-model="formData.timing"
                      class="checkbox-input" 
                    />
                    <span class="checkbox-text">{{ option }}</span>
                  </label>
                </div>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn btn-primary" @click="nextStep">Continue</button>
              </div>
            </div>
            
            <!-- Step 2: Emotional Content -->
            <div v-if="currentStep === 1" class="form-step">
              <h3 class="form-step-title">Emotional Content</h3>
              
              <div class="form-group">
                <label class="form-label">What emotions did you experience in the nightmare?</label>
                <div class="checkbox-group">
                  <label class="checkbox-label" v-for="option in emotionOptions" :key="option">
                    <input 
                      type="checkbox" 
                      :value="option" 
                      v-model="formData.emotions"
                      class="checkbox-input" 
                    />
                    <span class="checkbox-text">{{ option }}</span>
                  </label>
                </div>
                <div class="other-option">
                  <label class="form-label">Other emotions:</label>
                  <input 
                    type="text" 
                    v-model="formData.otherEmotions" 
                    class="form-control"
                    placeholder="Describe any other emotions you felt"
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Physical reactions upon waking:</label>
                <div class="checkbox-group">
                  <label class="checkbox-label" v-for="option in physicalReactionOptions" :key="option">
                    <input 
                      type="checkbox" 
                      :value="option" 
                      v-model="formData.physicalReactions"
                      class="checkbox-input" 
                    />
                    <span class="checkbox-text">{{ option }}</span>
                  </label>
                </div>
                <div class="other-option">
                  <label class="form-label">Other reactions:</label>
                  <input 
                    type="text" 
                    v-model="formData.otherReactions" 
                    class="form-control"
                    placeholder="Describe any other physical reactions"
                  />
                </div>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn btn-secondary" @click="prevStep">Back</button>
                <button type="button" class="btn btn-primary" @click="nextStep">Continue</button>
              </div>
            </div>
            
            <!-- Step 3: Nightmare Details -->
            <div v-if="currentStep === 2" class="form-step">
              <h3 class="form-step-title">Nightmare Details</h3>
              
              <div class="form-group">
                <label class="form-label">Describe your nightmare in detail:</label>
                <textarea 
                  v-model="formData.nightmareDescription" 
                  class="form-control textarea"
                  rows="6"
                  placeholder="Please describe the scenario, characters, actions, and any other details you remember. The more specific you can be, the better the analysis will be."
                ></textarea>
                <p class="form-helper">Include details about the setting, people, objects, actions, and any dialogue you remember.</p>
              </div>
              
              <div class="form-group">
                <label class="form-label">How clearly do you remember the nightmare?</label>
                <div class="radio-group">
                  <label class="radio-label" v-for="option in clarityOptions" :key="option">
                    <input 
                      type="radio" 
                      :value="option" 
                      v-model="formData.clarity"
                      class="radio-input" 
                    />
                    <span class="radio-text">{{ option }}</span>
                  </label>
                </div>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn btn-secondary" @click="prevStep">Back</button>
                <button type="button" class="btn btn-primary" @click="nextStep">Continue</button>
              </div>
            </div>
            
            <!-- Step 4: Context & Background -->
            <div v-if="currentStep === 3" class="form-step">
              <h3 class="form-step-title">Context & Background</h3>
              
              <div class="form-group">
                <label class="form-label">Is this nightmare related to any recent events in your life?</label>
                <div class="radio-group">
                  <label class="radio-label" v-for="option in relatedOptions" :key="option">
                    <input 
                      type="radio" 
                      :value="option" 
                      v-model="formData.isRelatedToEvents"
                      class="radio-input" 
                    />
                    <span class="radio-text">{{ option }}</span>
                  </label>
                </div>
              </div>
              
              <div class="form-group" v-if="formData.isRelatedToEvents === 'Yes'">
                <label class="form-label">Please describe the related events:</label>
                <textarea 
                  v-model="formData.relatedEvents" 
                  class="form-control textarea"
                  rows="4"
                  placeholder="Describe any recent events, stressors, or changes that might be related to your nightmare"
                ></textarea>
              </div>
              
              <div class="form-group">
                <label class="form-label">Optional background information:</label>
                <p class="privacy-note">This information helps provide better analysis but is completely optional. Your privacy is important to us.</p>
                <textarea 
                  v-model="formData.backgroundInfo" 
                  class="form-control textarea"
                  rows="4"
                  placeholder="You may provide relevant background information such as recent life changes, stress sources, sleep habits, or any other context that might help with interpretation"
                ></textarea>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn btn-secondary" @click="prevStep">Back</button>
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading">Analyzing...</span>
                  <span v-else>Submit for Analysis</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate, useWindowSize } from '@vueuse/core'
import { analyzeDream } from '../../lib/gemini.js'

const props = defineProps({
  id: String
})

const router = useRouter()
const { width } = useWindowSize()

const currentStep = ref(0)
const loading = ref(false)

const steps = [
  { name: 'Basics' },
  { name: 'Emotions' },
  { name: 'Details' },
  { name: 'Context' }
]

const frequencyOptions = ['Daily', 'Several times a week', 'Weekly', 'A few times a month', 'Rarely']
const timingOptions = ['Just after falling asleep', 'Middle of the night', 'Early morning', 'Not sure']
const emotionOptions = ['Fear', 'Anxiety', 'Anger', 'Sadness', 'Helplessness', 'Shame', 'Disgust']
const physicalReactionOptions = ['Rapid heartbeat', 'Sweating', 'Shortness of breath', 'Dizziness', 'Feeling depressed', 'Lingering anxiety', 'Trembling']
const clarityOptions = ['Very clear', 'Somewhat clear', 'Fuzzy', 'Barely remember']
const relatedOptions = ['Yes', 'No', 'Not sure']

const formData = reactive({
  frequency: [],
  timing: [],
  emotions: [],
  otherEmotions: '',
  physicalReactions: [],
  otherReactions: '',
  nightmareDescription: '',
  clarity: '',
  isRelatedToEvents: '',
  relatedEvents: '',
  backgroundInfo: ''
})

onMounted(() => {
	let localFormData = localStorage.getItem("nightmareData") || "{}"
	console.log("localFormData is : " + localFormData)
	localFormData = JSON.parse(localFormData)
	formData.frequency = localFormData.frequency || []
	formData.timing = localFormData.timing || []
	formData.emotions = localFormData.emotions || []
	formData.otherEmotions = localFormData.otherEmotions || []
	formData.physicalReactions = localFormData.physicalReactions || []
	formData.otherReactions = localFormData.otherReactions || []
	formData.nightmareDescription = localFormData.nightmareDescription || []
	formData.clarity = localFormData.clarity || []
	formData.isRelatedToEvents = localFormData.isRelatedToEvents || []
	formData.relatedEvents = localFormData.relatedEvents || []
	formData.backgroundInfo = localFormData.backgroundInfo || []
})

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
    scrollToTop()
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    scrollToTop()
  }
}

const goToStep = (stepIndex) => {
  if (stepIndex < currentStep.value) {
    currentStep.value = stepIndex
    scrollToTop()
  }
}

const scrollToTop = () => {
  if (width.value < 768) {
    const formContainer = document.querySelector('.form-container')
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const submitForm = async () => {
  loading.value = true
  
  try {
	console.log("nightmareData : ", JSON.stringify(formData))
	localStorage.setItem('nightmareData', JSON.stringify(formData))
	const result = await analyzeDream(formData)
	console.log("ai result : ", JSON.stringify(result))
	
	localStorage.setItem('dreamsResultData', JSON.stringify(result))
	
    // Redirect to analysis page
    router.push('/analysis')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error analyzing your nightmare. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<script>
	
</script>

<style scoped>
.nightmare-form-section {
  background-color: var(--color-white);
}

.form-container {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  margin-top: var(--spacing-8);
}

.form-navigation {
  display: flex;
  border-bottom: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-50);
  padding: 0 var(--spacing-4);
  overflow-x: auto;
}

.nav-step {
  display: flex;
  align-items: center;
  padding: var(--spacing-4);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  color: var(--color-gray-500);
}

.nav-step.active {
  color: var(--color-primary);
  font-weight: 500;
}

.nav-step.completed {
  color: var(--color-success);
}

.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: var(--spacing-2);
  background-color: var(--color-gray-200);
  color: var(--color-gray-700);
  font-size: 0.8rem;
  font-weight: 700;
  transition: all 0.2s ease;
}

.nav-step.active .step-indicator {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.nav-step.completed .step-indicator {
  background-color: var(--color-success);
  color: var(--color-white);
}

.check-icon {
  font-size: 0.8rem;
}

.form-content {
  padding: var(--spacing-8);
}

.form-step-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-6);
  color: var(--color-gray-900);
}

.checkbox-group, .radio-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3);
  margin-top: var(--spacing-2);
}

.checkbox-label, .radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input, .radio-input {
  margin-right: var(--spacing-2);
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-text, .radio-text {
  font-size: 1rem;
  color: var(--color-gray-800);
}

.other-option {
  margin-top: var(--spacing-4);
}

.textarea {
  min-height: 120px;
  resize: vertical;
}

.form-helper {
  font-size: 0.875rem;
  color: var(--color-gray-500);
  margin-top: var(--spacing-2);
}

.privacy-note {
  font-size: 0.875rem;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-2);
  font-style: italic;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-8);
}

.form-actions button {
  min-width: 120px;
}

@media (min-width: 640px) {
  .form-content {
    padding: var(--spacing-10);
  }
  
  .checkbox-group, .radio-group {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .form-step-title {
    font-size: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .checkbox-group, .radio-group {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
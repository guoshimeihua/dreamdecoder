<template>
  <div class="analysis-page">
    <div class="container">
      <div class="analysis-container" ref="pdfContent">
        <h1 class="analysis-title">Your Nightmare Analysis</h1>
        
        <div class="analysis-summary">
          <h2>Summary</h2>
          <p>{{ analysis.summary }}</p>
        </div>
        
        <div class="analysis-sections">
          <div class="analysis-section">
            <h3>Nightmare Interpretation</h3>
            <p v-html="analysis.interpretation"></p>
          </div>
          
          <div class="analysis-section">
            <h3>Psychological Factors</h3>
            <ul class="factors-list">
              <li v-for="(factor, index) in analysis.psychologicalFactors" :key="index">
                <span class="factor-name">{{ factor.name }}:</span> {{ factor.description }}
              </li>
            </ul>
          </div>
          
          <div class="analysis-section">
            <h3>Key Symbols</h3>
            <div class="symbols-grid">
              <div v-for="(symbol, index) in analysis.symbols" :key="index" class="symbol-card">
                <h4>{{ symbol.name }}</h4>
                <p>{{ symbol.meaning }}</p>
              </div>
            </div>
          </div>
          
          <div class="analysis-section recommendations">
            <h3>Personalized Recommendations</h3>
            <div class="recommendations-grid">
              <div v-for="(rec, index) in analysis.recommendations" :key="index" class="recommendation-card">
                <div class="recommendation-icon">{{ rec.icon }}</div>
                <h4>{{ rec.title }}</h4>
                <p>{{ rec.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	  
	  <div class="action-buttons">
	    <router-link to="/" class="btn btn-secondary" @click="backToHome">Back to Home</router-link>
	    <button class="btn btn-primary" :disabled="loading" @click="saveAnalysis">
			<span v-if="loading">Saving...</span>
			<span v-else>Save Analysis as Image</span>
		</button>
	  </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// This would normally come from an API call
const analysis = reactive({
  summary: "Your nightmare appears to be related to unresolved anxiety about professional performance and fear of judgment. The recurring elements suggest subconscious processing of recent workplace stress and upcoming evaluations.",
  
  interpretation: "The chase sequence in your nightmare represents avoidance of confronting professional insecurities, while the inability to scream symbolizes a feeling of voicelessness in your current environment. The dark, maze-like setting reflects confusion about your career path and difficulty seeing a clear way forward.<br><br>Your reported physical reactions upon waking (heart racing, sweating) indicate significant stress activation during the dream state, suggesting this nightmare is processing genuine emotional concerns rather than random neural activity.",
  
  psychologicalFactors: [
    {
      name: "Performance Anxiety",
      description: "Your nightmare strongly correlates with concerns about being evaluated or judged negatively in professional settings."
    },
    {
      name: "Communication Barriers",
      description: "The inability to call for help in your dream suggests difficulties expressing needs or concerns in waking life."
    },
    {
      name: "Control Issues",
      description: "The maze-like environment reflects feelings of being trapped in situations where you lack agency or decision-making power."
    },
    {
      name: "Unprocessed Stress",
      description: "Recent work pressures appear to be manifesting in your dream content as your mind attempts to process and integrate these experiences."
    }
  ],
  
  symbols: [
    {
      name: "Being Chased",
      meaning: "Represents avoidance of issues or responsibilities that require your attention. The pursuer often embodies aspects of yourself or situations you're reluctant to confront."
    },
    {
      name: "Darkness",
      meaning: "Symbolizes uncertainty, the unknown, or aspects of yourself that remain unconscious or unexamined."
    },
    {
      name: "Maze/Labyrinth",
      meaning: "Reflects feelings of confusion, complex problems without obvious solutions, or difficulty finding direction in life."
    },
    {
      name: "Voice Loss",
      meaning: "Indicates perceived powerlessness, inability to express yourself, or feeling that your opinions are not valued or heard."
    }
  ],
  
  recommendations: [
    {
      icon: "🧘",
      title: "Pre-Sleep Relaxation",
      description: "Practice progressive muscle relaxation for 10 minutes before bedtime to reduce physical tension that contributes to nightmare intensity."
    },
    {
      icon: "📝",
      title: "Nightmare Rewriting",
      description: "Spend 5 minutes each morning writing down your nightmare, then consciously rewrite the ending with a positive resolution to reprogram your subconscious."
    },
    {
      icon: "🗣️",
      title: "Assertiveness Practice",
      description: "Address the communication themes in your nightmare by practicing direct communication in low-stakes situations to build confidence."
    },
    {
      icon: "🌙",
      title: "Image Rehearsal Therapy",
      description: "Visualize the nightmare scenario while awake but imagine it ending positively. Practice this visualization daily for 5-10 minutes to reduce nightmare recurrence."
    },
    {
      icon: "⏰",
      title: "Sleep Schedule Consistency",
      description: "Maintain consistent sleep and wake times to stabilize your sleep architecture and reduce REM disruptions that contribute to nightmares."
    },
    {
      icon: "🍎",
      title: "Evening Nutrition Adjustment",
      description: "Avoid caffeine after 2pm and reduce sugar intake in the evening, as these can intensify dream activity and emotional reactivity during sleep."
    }
  ]
})

const pdfContent = ref(null)
const loading = ref(false)

const exportToPDF = async () => {
  loading.value = true
  const element = pdfContent.value;
  try {
	  const canvas = await html2canvas(element, {
	    scale: 2, // 提高分辨率
	    useCORS: true, // 允许跨域图片
	    logging: false // 关闭日志
	  })
	  
	  //创建下载链接
	  const link = document.createElement('a')
	  let fileName = "repot_" + (new Date()).getTime() + ".png"
	  link.download = fileName
	  link.href = canvas.toDataURL('image/png')
	  link.click();
	  
	  console.log("下载png图片成功")
  } catch (error) {
	  console.log('Error generating image: ', error)
	  alert("Save Analysis as image failed!")
  } finally {
    loading.value = false
  }
}

const saveAnalysis = () => {
  // In a real app, this would save to a database
  // alert('Analysis saved successfully!')
  exportToPDF()
}

const backToHome = () => {
	console.log("clear local storage")
	localStorage.removeItem("nightmareData")
	localStorage.removeItem("dreamsResultData")
}

onMounted(() => {
  // Simulate loading the data based on the form inputs
  // In a real app, this would be an API call
  let nightmareData = localStorage.getItem('dreamsResultData') || '{}'
  nightmareData = JSON.parse(nightmareData)
  if (nightmareData.summary && nightmareData.summary.length > 0) {
    // Here we would use the data to customize the analysis
	console.log("替换为AI的回答")
	analysis.summary = nightmareData.summary || '';
	analysis.interpretation = nightmareData.interpretation || ''
	analysis.psychologicalFactors = nightmareData.psychologicalFactors || []
	analysis.symbols = nightmareData.symbols || []
	analysis.recommendations = nightmareData.recommendations || []
  }
  
  // Scroll to top of the page
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.analysis-page {
  padding-top: 120px;
  padding-bottom: var(--spacing-16);
}

.analysis-container {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-8);
  max-width: 1000px;
  margin: 0 auto;
}

.analysis-title {
  text-align: center;
  margin-bottom: var(--spacing-8);
  color: var(--color-primary);
}

.analysis-summary {
  background-color: var(--color-primary-light);
  padding: var(--spacing-6);
  border-radius: var(--radius);
  margin-bottom: var(--spacing-8);
}

.analysis-summary h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
  font-size: 1.5rem;
}

.analysis-summary p {
  color: var(--color-gray-800);
  line-height: 1.6;
  margin-bottom: 0;
}

.analysis-sections {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.analysis-section {
  padding: var(--spacing-6);
  border-radius: var(--radius);
  background-color: var(--color-gray-50);
}

.analysis-section h3 {
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-4);
  font-size: 1.25rem;
}

.factors-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.factors-list li {
  padding: var(--spacing-3);
  background-color: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.factor-name {
  font-weight: 600;
  color: var(--color-primary);
}

.symbols-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

.symbol-card {
  background-color: var(--color-white);
  border-radius: var(--radius);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-sm);
}

.symbol-card h4 {
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
  font-size: 1.1rem;
}

.recommendations {
  background-color: var(--color-secondary-light);
}

.recommendations h3 {
  color: var(--color-secondary);
}

.recommendations-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

.recommendation-card {
  background-color: var(--color-white);
  border-radius: var(--radius);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.recommendation-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-2);
}

.recommendation-card h4 {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-2);
  color: var(--color-gray-900);
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);
}

@media (min-width: 640px) {
  .analysis-container {
    padding: var(--spacing-10);
  }
  
  .symbols-grid,
  .recommendations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .recommendations-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
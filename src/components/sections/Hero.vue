<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Decode Your Nightmares.</span>
          <br>Reclaim Peaceful Sleep.
        </h1>
        <p class="hero-subtitle">
          DreamDecoder uses advanced AI to analyze your nightmares, provide professional interpretations, 
          and deliver personalized strategies to reduce their frequency for better mental wellness.
        </p>
        <div class="hero-cta">
          <a href="#nightmare-form" class="btn btn-primary btn-lg">Analyze Your Nightmare</a>
          <a href="#how-it-works" class="btn btn-secondary btn-lg">Learn How It Works</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">User Satisfaction</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10k+</span>
            <span class="stat-label">Nightmares Analyzed</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">83%</span>
            <span class="stat-label">Report Fewer Nightmares</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
             alt="Peaceful sleeping environment" 
             class="main-image" />
      </div>
    </div>
    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L48 8.875C96 17.75 192 35.5 288 53.25C384 71 480 88.75 576 80.125C672 71.5 768 35.5 864 26.875C960 17.75 1056 35.5 1152 44.125C1248 53.25 1344 53.25 1392 53.25L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, #f0f7ff 100%);
  padding: 160px 0 120px;
  overflow: hidden;
}

.hero-content {
  max-width: 640px;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: var(--spacing-6);
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-8);
  max-width: 540px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-10);
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-6);
  margin-top: var(--spacing-6);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  margin-top: var(--spacing-1);
}

.hero-image {
  display: none;
  position: relative;
  z-index: 1;
}

.main-image {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
  height: 100%;
  max-height: 500px;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-8);
    align-items: center;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-image {
    display: block;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}
</style>
<template>
  <section :id="id" class="pricing-section section">
    <div class="container">
      <h2 class="section-title">Pricing Plans</h2>
      <p class="section-subtitle">
        Choose the plan that fits your needs. All plans include our core nightmare analysis technology.
      </p>
      
      <div class="pricing-toggle">
        <span :class="['toggle-option', { 'active': !isAnnual }]">Monthly</span>
        <label class="toggle-switch">
          <input type="checkbox" v-model="isAnnual">
          <span class="toggle-slider"></span>
        </label>
        <span :class="['toggle-option', { 'active': isAnnual }]">
          Annual
          <span class="save-badge">Save 20%</span>
        </span>
      </div>
      
      <div class="pricing-cards">
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          :class="['pricing-card', { 'popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="popular-badge">Most Popular</div>
          <h3 class="plan-name">{{ plan.name }}</h3>
          <div class="plan-price">
            <span class="currency">$</span>
            <span class="amount">{{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
            <span class="period">/ {{ isAnnual ? 'year' : 'month' }}</span>
          </div>
          <p class="plan-description">{{ plan.description }}</p>
          <ul class="plan-features">
            <li v-for="(feature, idx) in plan.features" :key="idx">
              <span class="feature-icon">✓</span>
              {{ feature }}
            </li>
          </ul>
          <a :href="plan.link" class="btn" :class="plan.popular ? 'btn-primary' : 'btn-secondary'">
            Get Started
          </a>
        </div>
      </div>
      
      <div class="pricing-note">
        <p>All plans come with a 14-day money-back guarantee. No questions asked.</p>
        <p>Need a custom solution for your organization? <a href="#contact">Contact us</a> for enterprise pricing.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  id: String
})

const isAnnual = ref(true)

const plans = [
  {
    name: "Basic",
    monthlyPrice: 9.99,
    annualPrice: 7.99,
    description: "Perfect for individuals seeking occasional nightmare analysis",
    features: [
      "5 nightmare analyses per month",
      "Basic interpretation report",
      "General recommendations",
      "Email support"
    ],
    link: "#nightmare-form",
    popular: false
  },
  {
    name: "Premium",
    monthlyPrice: 19.99,
    annualPrice: 15.99,
    description: "Comprehensive analysis and personalized solutions for frequent nightmares",
    features: [
      "Unlimited nightmare analyses",
      "Detailed interpretation reports",
      "Personalized recommendations",
      "Pattern recognition across dreams",
      "Priority support",
      "Sleep tracking integration"
    ],
    link: "#nightmare-form",
    popular: true
  },
  {
    name: "Professional",
    monthlyPrice: 39.99,
    annualPrice: 31.99,
    description: "Advanced features for therapists and sleep specialists",
    features: [
      "All Premium features",
      "Client management tools",
      "Advanced clinical insights",
      "Professional resources library",
      "Exportable reports for clients",
      "Integration with clinical systems",
      "Dedicated account manager"
    ],
    link: "#nightmare-form",
    popular: false
  }
]
</script>

<style scoped>
.pricing-section {
  background-color: var(--color-white);
}

.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-10);
  gap: var(--spacing-4);
}

.toggle-option {
  color: var(--color-gray-500);
  font-weight: 500;
  position: relative;
}

.toggle-option.active {
  color: var(--color-gray-900);
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-300);
  transition: .4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: var(--color-primary);
}

input:checked + .toggle-slider:before {
  transform: translateX(24px);
}

.save-badge {
  position: absolute;
  top: -8px;
  right: -40px;
  background-color: var(--color-accent);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: var(--radius-full);
  font-weight: 600;
}

.pricing-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  margin-top: var(--spacing-6);
}

.pricing-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius);
  padding: var(--spacing-8);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-light);
}

.pricing-card.popular {
  border-color: var(--color-primary);
  box-shadow: var(--shadow);
  z-index: 1;
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.plan-name {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-2);
  text-align: center;
}

.plan-price {
  text-align: center;
  margin-bottom: var(--spacing-4);
}

.currency {
  font-size: 1.5rem;
  vertical-align: top;
  position: relative;
  top: 0.5rem;
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: var(--color-gray-500);
}

.plan-description {
  text-align: center;
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

.plan-features {
  list-style: none;
  margin-bottom: var(--spacing-8);
  flex: 1;
}

.plan-features li {
  margin-bottom: var(--spacing-3);
  display: flex;
  align-items: flex-start;
}

.feature-icon {
  color: var(--color-success);
  margin-right: var(--spacing-2);
  font-weight: 700;
}

.pricing-card .btn {
  width: 100%;
  display: block;
  text-align: center;
}

.pricing-note {
  margin-top: var(--spacing-12);
  text-align: center;
  color: var(--color-gray-500);
  font-size: 0.9rem;
}

.pricing-note p {
  margin-bottom: var(--spacing-2);
}

.pricing-note a {
  color: var(--color-primary);
  font-weight: 500;
}

@media (min-width: 768px) {
  .pricing-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
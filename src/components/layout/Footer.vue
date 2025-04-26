<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-logo">DreamDecoder</h3>
          <p class="footer-tagline">Transforming nightmares into insights for better sleep and mental wellbeing.</p>
          <div class="social-links">
            <a href="#" aria-label="Twitter"><i class="social-icon">X</i></a>
            <a href="#" aria-label="Facebook"><i class="social-icon">fb</i></a>
            <a href="#" aria-label="Instagram"><i class="social-icon">ig</i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <!-- <li><a href="#pricing">Pricing</a></li> -->
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <!-- <div class="footer-links-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#sleep-tips">Sleep Tips</a></li>
              <li><a href="#nightmare-guide">Nightmare Guide</a></li>
              <li><a href="#research">Research</a></li>
            </ul>
          </div> -->
          
          <div class="footer-links-column">
            <h4>About Us</h4>
            <ul>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms of Service</router-link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} DreamDecoder. All rights reserved. Created by Bruce Mei Hua.</p>
        <p class="contact-email">Contact: <a href="mailto:guoshimeihua@gmail.com">guoshimeihua@gmail.com</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  background-color: var(--color-gray-100);
  padding: var(--spacing-16) 0 var(--spacing-8);
  margin-top: var(--spacing-16);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  margin-bottom: var(--spacing-10);
}

.footer-brand {
  margin-bottom: var(--spacing-6);
}

.footer-logo {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
}

.footer-tagline {
  color: var(--color-gray-600);
  max-width: 350px;
  margin-bottom: var(--spacing-4);
}

.social-links {
  display: flex;
  gap: var(--spacing-4);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-gray-200);
  color: var(--color-gray-700);
  transition: all 0.2s ease;
}

.social-links a:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.social-icon {
  font-style: normal;
  font-size: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--spacing-8);
}

.footer-links-column h4 {
  font-size: 1rem;
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

.footer-links-column ul {
  list-style: none;
}

.footer-links-column li {
  margin-bottom: var(--spacing-2);
}

.footer-links-column a {
  color: var(--color-gray-600);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links-column a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid var(--color-gray-200);
  padding-top: var(--spacing-6);
  color: var(--color-gray-500);
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.contact-email a {
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
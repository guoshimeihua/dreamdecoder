<template>
  <header :class="['site-header', { 'scrolled': isScrolled }]">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <span class="logo-text">DreamDecoder</span>
      </router-link>
      
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <!-- <li><a href="#pricing">Pricing</a></li> -->
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <a href="#nightmare-form" class="btn btn-primary">Analyze Your Nightmare</a>
      </div>
      
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
    <div :class="['mobile-menu', { 'active': mobileMenuOpen }]">
      <nav>
        <ul class="mobile-nav-links">
          <li><a href="#features" @click="closeMobileMenu">Features</a></li>
          <li><a href="#how-it-works" @click="closeMobileMenu">How It Works</a></li>
          <li><a href="#testimonials" @click="closeMobileMenu">Testimonials</a></li>
          <!-- <li><a href="#pricing" @click="closeMobileMenu">Pricing</a></li> -->
          <li><a href="#faq" @click="closeMobileMenu">FAQ</a></li>
          <li><a href="#nightmare-form" class="mobile-cta" @click="closeMobileMenu">Analyze Your Nightmare</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-50);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: var(--spacing-4) 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.site-header.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-left: var(--spacing-2);
}

.desktop-nav {
  display: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-6);
}

.nav-links a {
  color: var(--color-gray-800);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.header-actions {
  display: none;
}

.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--color-gray-800);
  transition: all 0.3s ease;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  z-index: var(--z-40);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  padding-top: 80px;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-nav-links {
  list-style: none;
  padding: var(--spacing-8);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.mobile-nav-links a {
  color: var(--color-gray-800);
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  display: block;
  padding: var(--spacing-2) 0;
}

.mobile-cta {
  margin-top: var(--spacing-6);
  color: var(--color-primary) !important;
  font-weight: 700 !important;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  
  .header-actions {
    display: block;
  }
  
  .mobile-menu-btn {
    display: none;
  }
}
</style>
<template>
  <AppHeader></AppHeader>
  <div class="ml-48 mr-48">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"  :key="$route.path"/>
        </transition>
      </router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

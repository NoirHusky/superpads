<template>
    <header class="py-4 mb-4 flex justify-between items-center gap-4 bg-gray-800">
        <div></div>
        <nav class="navslinks flex gap-4">
            <router-link :to="{ name: 'Home' }" class="text-xl hover:text-yellow-600 text-yellow-500">Home</router-link>
            <router-link :to="{ name: 'Pads' }" class="text-xl hover:text-yellow-600 text-yellow-500">Pads</router-link>
            <router-link :to="{ name: 'MyPads' }" class="text-xl hover:text-yellow-600 text-yellow-500">My pads</router-link>

        </nav>
       <router-link v-if="isSignedIn" :to="{ name: 'MyPads' }" class="mr-4 text-xl hover:text-yellow-600 text-yellow-500">Login</router-link>
       <router-link v-else :to="{ name: 'MyPads' }" class="mr-4 text-xl hover:text-yellow-600 text-yellow-500">Sign up</router-link>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['isSignedIn'])
    }
}
</script>

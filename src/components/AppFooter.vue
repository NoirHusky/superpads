<template>
    <footer class="py-4 bottom-0 flex justify-center items-center gap-4 bg-gray-800" style="margin-top: calc(100vh - 4em)">
        <div class="navslinks flex gap-4 text-white">
            Made with LoVe by <span class="text-yellow-500">@NoirHusky
</span>
        </div>
    </footer>
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

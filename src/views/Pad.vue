<template>
    <div class="pad mb-8">
        <div class="flex border border-black bg-gray-200 py-2 px-4 mt-4 rounded-t">
            Title
        </div>
        <div class="border flex border-black bg-white py-2 px-4 rounded-b border-t-0">
            <div class="float-left mr-4">
                <div>(+)</div>
                <div>(-)</div>
            </div>
            This is the pad page {{ $route.params.id }}
        </div>
        <div class="flex border border-black bg-gray-200 py-2 px-4 mt-4 rounded-t">
            Comments (4)
            <button @click="toggleModal()" class="text-green-900 font-bold ml-auto" title="Add comment">(+)</button>
        </div>
        <div class="border border-black bg-white py-2 px-4 rounded-b border-t-0">
            <div class="comment">
                <span class="text-blue-900 font-semibold">Amir:</span> hello world
            </div>
            <div class="comment">
                <span class="text-blue-900 font-semibold">Amir:</span> hello world
            </div>
        </div>
        <!-- modal --> 
        <transition name="fade">
            <div v-if="showCommentModal" class="fixed top-10 right-4 mt-8 w-full" style="width: 40%">
                <div class="flex border border-black bg-gray-200 py-2 px-4 mt-4 rounded-t">
                    Add comment
                    <button @click="toggleModal()" class="text-green-900 font-bold ml-auto" title="Close">X</button>
                </div>
                <div class="border border-black bg-white py-2 px-4 rounded-b border-t-0">
                    <textarea id="" name="" class="w-full border border-black rounded bg-gray-200"></textarea>
                    <button class="bg-yellow-700 rounded text-gray-300 text-center w-full">Comment</button>
                </div>
            </div>
        </transition>
    </div>
  </template>

<script>
export default {
    name: 'Pad',
    data() {
        return {
            showCommentModal: false
        }
    },
    methods: {
        toggleModal() {
            this.showCommentModal = !this.showCommentModal
        }
    }
}
</script>

<style>

</style>

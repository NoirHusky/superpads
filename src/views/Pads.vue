<template>
    <div class="pads">
         <div class="flex border border-black bg-gray-200 py-2 px-4 mt-4 rounded-t">
            Pads
            <button class="text-green-900 font-bold ml-auto" title="Add a pad">(+)</button>
        </div>
        <div class="border flex border-black bg-white py-2 px-4 rounded-b border-t-0">
            <div class="links">
             <div class="py-2 flex items-center"
                v-for="pad in pads"
                :key="pad.id"
              > 
                <router-link class="hover:text-yellow-800"
                    :to="{ name: 'Pad', params: { id: pad.id } }">
                    <span class="italic">2022-06-11 10:20 &mdash;</span>
                    {{ pad.title }}   
                </router-link>
              </div>

            </div>
        
        </div>
    </div>
</template>

<script>
export default {
  name: 'Pads',
  data() {
    return {
        pads: [
            { title: 'hello world 1', id: 0 },
            { title: 'hello world 2', id: 1 },
            { title: 'hello world 3', id: 2 },
            { title: 'hello world 4', id: 3 },
        ]
    }
  }
}
</script>

<style>

</style>

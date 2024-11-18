- Tencent Gradle Mirrors
  - https://mirrors.cloud.tencent.com/gradle/<input type="text" v-model="version">
  - <code>{{ target }}</code><button :class="$style.button" @click="copyToClipboard">copy</button>

<script setup>
import { ref, computed } from 'vue'
const version = ref('')
const t_uri = 'https://mirrors.cloud.tencent.com/gradle/'
const target = computed(() => {
    return version.value ? `${t_uri}${version.value}/` : t_uri
})
const copyToClipboard = async () => {
    await navigator.clipboard.writeText(target.value);
};
</script>

<style module>
.button {
  color: black;
  font-weight: bold;
}
input[type="text"] {
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 10px;
}

input[type="text"]:focus {
    border-color: #4CAF50;
    outline: none;
}
</style>

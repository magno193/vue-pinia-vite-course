import { reactive, ref, computed, watch, onMounted, nextTick } from 'vue';

/**
 * Contador global
 * <pois está fora da function composable>
 */
const counterData = reactive({
    counter: 0,
    title: 'Meu contador'
})

export function useCounter() {
    const accAmount = ref(1)

    const oddOrEvenFunc = () => {
        return counterData.counter % 2 === 0
            ? 'Este contador é par'
            : 'Este contador é ímpar'
    }
    const oddOrEven = computed(oddOrEvenFunc)

    const increaseCounter = async (amount = 1) => {
        counterData.counter += amount

        /**
         * Mesmo que o this.$nextTick
         * Executado após um update em DOM
         * Pode ser assíncorno
         */

        await nextTick(() => {
            console.log("Faça algo relacionado ao increaseCounter");
        })
    }
    const decreaseCounter = (amount = 1) => {
        counterData.counter -= amount
    }

    const countSource = () => counterData.counter,
        countHandler = (counter, old) => counter === 20 ? alert('Você atingiu o marco 20!') : null
    watch(countSource, countHandler)

    onMounted(() => {
        console.log('Coisas relacionadas ao contador.');
    })
    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
        accAmount
    }
}
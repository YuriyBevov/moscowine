<template>
    <div class="d-flex flex-column col-12 col-lg-8 col-xxl-6">
        <form>
            <div class="mb-2">
                <div class="calc__field">
                    <label for="percentRange" 
                        class="calc__label form-label d-flex align-items-center 
                        justify-content-between bg-white p-1 py-3 p-sm-3 mb-0"
                    >
                        <span class="text-deep-purple fs-5">Доля в капитале</span> 
                        <span class="text-deep-purple fs-3 ">{{this.formData.percent}}%</span>
                    </label>

                    <input 
                        v-model="formData.percent" 
                        type="range" 
                        class="form-range position-relative"
                        style="top: -16px;"
                        id="percentRange" 
                        min="1" max="15"
                        @input="setCalcData()"
                    >
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <span class="text-white">1%</span>
                    <span class="text-white">15%</span>
                </div>
            </div>

            <div class="mb-2">
                <div class="calc__field">
                    <label for="costRange" 
                        class="calc__label form-label d-flex align-items-center 
                        justify-content-between bg-white p-1 py-3 p-sm-3 mb-0"
                    >
                        <span class="text-deep-purple calc__field-title">Начальная стоимость доли</span> 
                        <span class="text-deep-purple calc__field-value">{{this.formData.currentCost}}$</span>
                    </label>

                    <input 
                        v-model="formData.currentCost" 
                        type="range" 
                        class="form-range position-relative disable"
                        style="top: -16px;"
                        id="costRange" 
                        :min="formData.costFrom" :max="formData.costTo"
                        @input="setCalcData()"
                        disabled
                    >
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <span class="text-white">{{this.formData.costFrom}} $</span>
                    <span class="text-white">{{this.formData.costTo}} $</span>
                </div>
            </div>

            <div class="mb-3">
                <div class="calc__field">
                    <label for="investTime" 
                        class="calc__label form-label d-flex align-items-center 
                        justify-content-between bg-white p-1 py-3 p-sm-3 mb-0"
                    >
                        <span class="text-deep-purple calc__field-title">Срок инвестирования</span> 
                        <span class="text-deep-purple calc__field-value">
                            {{this.formData.time}} 

                            {{ 
                                this.formData.time === '1' ? 'год' :
                                this.formData.time === '2' || this.formData.time === '3' || this.formData.time === '4' ? 'годa' : 'лет'
                            }}

                        </span>
                    </label>

                    <input 
                        v-model="formData.time" 
                        type="range" 
                        class="form-range position-relative"
                        style="top: -16px;"
                        id="investTime" 
                        min="1" max="5"
                        @input="setCalcData()"
                    >
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <span class="text-white">1 год</span>
                    <span class="text-white">5 лет</span>
                </div>
            </div>

            <button
                type="button"
                class="col-12 text-uppercase btn btn-purple rounded-0 border border-white p-2 p-sm-3 mb-2"
                @click.stop="sendFormData()"
            >
                Рассчитать ожидаемый доход
            </button>
        </form>

        <div class="d-flex align-items-center row">
            <div class="d-flex flex-row flex-sm-column col-12 col-sm-6 mb-3 mb-sm-0">
                <span class="text-white fs-5 col-6 col-sm-12">Итоговая стоимость доли</span>
                <span class="text-white text-end text-sm-start fs-3 fw-bold col-6 col-sm-12">{{ costTotal }} $</span>
            </div>

            <div class="d-flex flex-row flex-sm-column col-12 col-sm-6">
                <span class="text-white fs-5 col-6 col-sm-12">Процент годовой  доходности</span>
                <span class="text-white text-end text-sm-start fs-3 fw-bold col-6 col-sm-12">{{ percentTotal }}%</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { calcData } from './data/calc-data.js'
    export default {
        name: 'app',

        data() {
            return {
                

                formData: {
                    percent: 1,
                    currentCost: null,
                    costFrom: null,
                    costTo: null,
                    time: 1,
                },

                costTotal: 'XX XXX',
                percentTotal: 'XX',
            }
        },

        methods: {
            sendFormData() {
                console.log('sendFormData', this.formData)

                this.costTotal = String(Math.floor(2678 * Math.random(1, 10))),
                this.percentTotal=  String(Math.floor(100 * Math.random(1, 10)))
            },

            getCalcData(arrayName, time, percent = null) {
                if(arrayName === 'totalPercent') {
                    return calcData[arrayName][time - 1]
                } else {
                    return calcData[arrayName][time - 1][percent - 1]
                }
            },

            setCalcData() {
                let percent = Number(this.formData.percent)
                let time = Number(this.formData.time)
                
                this.percentTotal = this.getCalcData('totalPercent', time)
                this.costTotal = this.getCalcData('totalCost', time, percent )

                this.formData.costFrom = this.getCalcData('start', time , 1 )
                this.formData.costTo = this.getCalcData('start', time, 15 )
                this.formData.currentCost = this.getCalcData('start', time, percent )
            },

            initCalc() {
                this.formData.costFrom = this.getCalcData('start', 1, 1)
                this.formData.costTo = this.getCalcData('start', 1, 15);
                this.formData.currentCost = this.formData.costFrom;
            }
        },

        mounted() {
            this.initCalc()
        }
    }
</script>
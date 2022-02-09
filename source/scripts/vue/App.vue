<template>
    <div class="d-flex flex-column col-12 col-lg-8 col-xxl-6">
        <form>
            <div class="mb-2">
                <div class="calc__field">
                    <label for="percentRange" 
                        class="calc__label d-flex align-items-center 
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
                        class="calc__label d-flex align-items-center 
                        justify-content-between bg-white p-1 py-3 p-sm-3 mb-0"
                    >
                        <span class="text-deep-purple calc__field-title">Начальная стоимость доли</span> 
                        <span class="text-deep-purple calc__field-value">{{this.formData.currentCost | format}}$</span>
                    </label>

                    <input 
                        v-model="formData.currentCost" 
                        type="range" 
                        class="form-range position-relative"
                        style="top: -16px;"
                        id="costRange" 
                        :min="formData.costFrom" :max="formData.costTo"
                        @input="setCalcData()"
                        disabled
                    >
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <span class="text-white">{{this.formData.costFrom | format}} $</span>
                    <span class="text-white">{{this.formData.costTo | format}} $</span>
                </div>
            </div>

            <div class="mb-3">
                <div class="calc__field">
                    <label for="investTime" 
                        class="calc__label d-flex align-items-center 
                        justify-content-between bg-white p-1 py-3 p-sm-3 mb-0"
                    >
                        <span class="text-deep-purple calc__field-title">Срок инвестирования</span> 
                        <span class="text-deep-purple calc__field-value">
                            {{ this.formData.time - 1 === 0 ? '-' : this.formData.time - 1 }} 

                            {{ 
                                this.formData.time - 1 === 0 ? '' :
                                this.formData.time - 1 === 1 ? 'год' :
                                this.formData.time - 1 === 2 || this.formData.time - 1 === 3 || this.formData.time - 1 === 4 ? 'годa' : 'лет'
                            }}
                        </span>
                    </label>

                    <input 
                        v-model="formData.time" 
                        type="range" 
                        class="form-range position-relative"
                        style="top: -16px;"
                        id="investTime" 
                        min="1" max="6"
                        @input="setCalcData()"
                    >
                </div>

                <div class="d-flex align-items-center justify-content-end">
                    <span class="text-white">5 лет</span>
                </div>
            </div>

            <button
                type="button"
                class="col-12 text-uppercase btn btn-purple rounded-pill p-2 p-sm-3 mb-3"
                @click.stop="sendFormData()"
            >
                Рассчитать ожидаемый доход
            </button>
        </form>

        <div class="d-flex align-items-center row mb-3 mb-xl-4">
            <div class="d-flex flex-row flex-sm-column col-12 col-sm-6 mb-3 mb-sm-0">
                <span class="text-white fs-5 col-6 col-sm-12">Итоговая стоимость доли</span>

                <span class="text-white text-end text-sm-start fs-3 fw-bold col-6 col-sm-12" v-if="isResultShowed">{{ this.costTotal | format }}$</span>
                <span class="text-white text-end text-sm-start fs-3 fw-bold col-6 col-sm-12" v-else>XX XXX $</span>
            </div>

            <div class="d-flex flex-row flex-sm-column col-12 col-sm-6">
                <span class="text-white fs-5 col-6 col-sm-12">Процент годовой  доходности</span>
                <span class="text-white text-end text-sm-start fs-3 fw-bold col-6 col-sm-12">
                    {{ 
                        isResultShowed && this.percentTotal > 0 ? this.percentTotal + '%'  : isResultShowed && this.percentTotal === 0 ? '-' : 'XX%' 
                    }}
                </span>
            </div>
        </div>

        <span class="text-white fs-6 col-12">* Прогноз строится на основе аналогичных показателей компаний электронной коммерции и не является обязательством по выплате в подобном размере.</span>
    </div>
</template>

<script>
    import { calcData } from './data/calc-data.js'
    export default {
        name: 'app',

        data() {
            return {
                
                isResultShowed: false,

                formData: {
                    percent: 1,
                    currentCost: null,
                    costFrom: null,
                    costTo: null,
                    time: 1,
                },

                costTotal: 'XX XXX',
                percentTotal: 0,
            }
        },

        filters: {
            format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
        },

        methods: {
            sendFormData() {
                // console.log('sendFormData', this.formData)
                this.isResultShowed = true
            },

            getCalcData(arrayName, time, percent = null) {
                if(arrayName === 'totalPercent') {
                    return calcData[arrayName][time]
                } else {
                    return calcData[arrayName][time][percent - 1]
                }
            },

            setCalcData() {
                this.isResultShowed = false
                
                let percent = Number(this.formData.percent)
                let time = Number(this.formData.time) - 1
                
                this.percentTotal = this.getCalcData('totalPercent', time)
                this.costTotal = this.getCalcData('totalCost', time, percent )

                this.formData.costFrom = this.getCalcData('start', time , 1 )
                this.formData.costTo = this.getCalcData('start', time, 15 )
                this.formData.currentCost = this.getCalcData('start', time, percent )


            },

            initCalc() {
                this.formData.costFrom = this.getCalcData('start', 0, 1);
                this.formData.costTo = this.getCalcData('start', 0, 15);
                this.costTotal = this.getCalcData('totalCost', 0, 1 );
                this.formData.currentCost = this.formData.costFrom;
            }
        },

        mounted() {
            this.initCalc()
        }
    }
</script>
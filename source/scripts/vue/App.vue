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
                        <span class="text-deep-purple calc__field-value">{{this.formData.cost}}$</span>
                    </label>

                    <input 
                        v-model="formData.cost" 
                        type="range" 
                        class="form-range position-relative"
                        style="top: -16px;"
                        id="costRange" 
                        min="100" max="1000000"
                    >
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <span class="text-white">100 $</span>
                    <span class="text-white">1000000 $</span>
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
    export default {
        name: 'app',

        data() {
            return {
                formData: {
                    percent: '8',
                    cost: '300000',
                    time: '2',
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
        }
    }
</script>
<template>
    <div id="page-wrap">
        <h1>Seminar <span>Registration</span></h1>
        <form action="#" method="post" @submit.prevent="formReset">
            <fieldset id="step_1">
                <legend>Step 1</legend>
                <label for="num_attendees">
                    How many people will be attending?
                </label>
                <select id="num_attendees" v-model="numAttenders">
                    <option id="opt_0" :value=0>Please Choose</option>
                    <option v-for="i in maxAttenders" :key=i  :id="'opt_' + i" :value=i>{{ i }}</option>
                </select>
                <br>
                <div id="attendee_container" v-show="numAttenders > 0">
                    <template v-for="i in numAttenders">
                        <div v-bind:key="i" :id="'attendee_' + i + '_wrap'">
                            <h3 v-if="i == 1">Please provide full names:</h3>
                            <label :for="'name_attendee_' + i">
                                Attendee {{ i }} Name:
                            </label>
                            <input type="text" :id="'name_attendee_' + i" v-model="attenders[(i - 1)]" />
                        </div>
                    </template>
                    <div id="step1_result" v-show="steps['step-1'].valid()">
                        <SlideComplete :pose="steps['step-1'].valid() ? 'visible' : 'hidden'">
                            <img alt="Step complete" src="../assets/logo.png">
                        </SlideComplete>
                    </div>
                </div>
            </fieldset>
            
            <fieldset id="step_2" :disabled="!steps['step-1'].valid()" :class="{'step-disabled': !steps['step-1'].valid()}">
                <legend :class="{'step-disabled': !steps['step-1'].valid()}">Step 2</legend>
                <p>
                    Would you like your company name on your badges?
                </p>
                <input type="radio" id="company_name_toggle_on" name="company_name_toggle_group" value="yes" v-model="companyRadio">
                <label for="company_name_toggle_on">Yes</label>
                &emsp;
                <input type="radio" id="company_name_toggle_off" name="company_name_toggle_group" value="no" v-model="companyRadio">
                <label for="company_name_toggle_off">No</label>
                <div id="company_name_wrap" v-show="companyYes">
                    <SlideInput :pose="companyYes ? 'visible' : 'hidden'">
                        <label for="company_name">
                            Company Name:
                        </label>
                        <input type="text" id="company_name" v-model="company" />
                    </SlideInput>
                </div>
                <div>			
                    <p>
                        Will anyone in your group require special accommodations?
                    </p>
                    <input type="radio" id="special_accommodations_toggle_on" name="special_accommodations_toggle" value="yes" v-model="accomodationRadio">
                    <label for="special_accommodations_toggle_on">Yes</label>
                    &emsp;
                    <input type="radio" id="special_accommodations_toggle_off" name="special_accommodations_toggle" value="no" v-model="accomodationRadio">
                    <label for="special_accommodations_toggle_off">No</label>
                </div>
                <div id="special_accommodations_wrap" v-show="accomodationYes">
                    <SlideInput :pose="accomodationYes ? 'visible' : 'hidden'">
                        <label for="special_accomodations_text">
                            Please explain below:
                        </label>
                        <div>
                            <textarea rows="10" id="special_accomodations_text" v-model="accomodation"></textarea>
                        </div>
                    </SlideInput>
                </div>
                <div id="step2_result" v-show="steps['step-2'].valid()">
                    <SlideComplete :pose="steps['step-2'].valid() ? 'visible' : 'hidden'">
                        <img alt="Step complete" src="../assets/logo.png">
                    </SlideComplete>
                </div>
            </fieldset>

            <fieldset id="step_3" :disabled="!steps['step-2'].valid()" :class="{'step-disabled': !steps['step-2'].valid()}">
                <legend :class="{'step-disabled': !steps['step-2'].valid()}">Step 3</legend>
                <label for="rock">
                    Are you ready to rock?
                </label>
                <input type="checkbox" id="rock" v-model="readyCheck">
                <input type="submit" id="submit_button" value="Complete Registration" :disabled="!readyCheck">
            </fieldset>
        </form>
    </div>
</template>

<style>
#page-wrap {
    width: 100%;
}

#page-wrap > h1 > span {
    color: cadetblue;
}

fieldset {
    float: left;
    color: black;
    border: 0px;
}

@media only screen and (min-width: 991px) {
  fieldset {
    width: 30%;
  }
}

@media only screen and (max-width: 991px) {
  fieldset:not(:first-child) {
    margin-top: 1%;
  }
}

fieldset p,
fieldset label {
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
}

legend {
    padding: 2%;
    border-radius: 10px;
    background-color: white;
    font-weight: bold;
    white-space: nowrap;
    min-width: 60px;
}

#step_1 {
    background-color: lightgreen;
}

#step_2 {
    background-color: lightblue;
}

#step_3 {
    background-color: lightcoral;
}

#step1_result,
#step2_result {
    text-align: center;
}

#step1_result img,
#step2_result img {
    margin-top: 1%;
}

.step-disabled {
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .6);
}

#special_accomodations_text {
    width: 100%;
}
</style>

<script>
import posed from 'vue-pose';

export default {
    name: "Registration",
    components: {
        FadeList: posed.div({
            visible: {opacity: 1},
            hidden: {opacity: 0}
        }),
        SlideComplete: posed.div({
            visible: {y: 0},
            hidden: {y: -100}
        }),
        SlideInput: posed.div({
            visible: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: -20}
        })
    },
    data() {
        const _vue = this

        return {
            maxAttenders: 5,
            numAttenders: 0,
            attenders: [],
            companyRadio: "",
            company: "",
            accomodationRadio: "",
            accomodation: "",
            readyCheck: false,
            steps: {
                "step-1": {
                    valid() {
                        return _vue.numAttenders && _vue.attenders.filter(attender => !!attender).length === _vue.numAttenders
                    }
                },
                "step-2": {
                    valid() {
                        if(!_vue.steps["step-1"].valid()) return false

                        const companyValid = _vue.companyRadio && (_vue.companyRadio !== 'yes' || (_vue.companyRadio === 'yes' && !!_vue.company))
                        const accomodationValid = _vue.accomodationRadio && (_vue.accomodationRadio !== 'yes' || (_vue.accomodationRadio === 'yes' && !!_vue.accomodation))

                        return companyValid && accomodationValid
                    }
                }
            }
        }
    },
    watch: {
        numAttenders: function(newNumber) {
            // note: as second parameter you can have the old value
            this.attenders.length = newNumber
        },
        companyRadio: function(newRadio) {
            if(newRadio !== 'yes') this.company = ''
        },
        accomodationRadio: function(newRadio) {
            if(newRadio !== 'yes') this.accomodation = ''
        }
    },
    computed: {
        companyYes() {
            return this.companyRadio === 'yes'
        },
        accomodationYes() {
            return this.accomodationRadio === 'yes'
        }
    },
    methods: {
        formReset() {
            this.numAttenders = 0
            this.companyRadio = ''
            this.accomodationRadio = ''
            this.readyCheck = false
        }
    }
}
</script>

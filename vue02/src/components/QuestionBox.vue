<template>
    <div class="question-box-container mt-5">
        <b-jumbotron>
            <template #lead>
                {{ currentQuestion.question }}
            </template>

            <!-- use key to identify each answer  -->
            <ul class="list-group">
                <li class="list-group-item hover-pointer"
                    v-for="(answer, index) in answers" 
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="[selectedIndex === index ? 'selected' : '']"
                >
                    {{ answer }}
                </li>
            </ul>

            <div class="mt-5">
                <b-button variant="light" class="mr-3" href="#">Submit</b-button>
                <b-button @click="next" variant="dark" href="#">Next Question</b-button>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    props: {
        currentQuestion: Object,
        next: Function
    },
    data(){
        return {
            selectedIndex: null,
            shuffledAnswers: []
        }
    },
    computed: {
        answers() {
            // make a copy of the array to "answers"
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers;
        }
    },
    watch: {
        currentQuestion() {
            this.selectedIndex = null,
            this.shuffleAnswers()
        }
    },
    methods: {
        selectAnswer(index) {
            this.selectedIndex = index
        },
        shuffleAnswers(){
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers);
        }
    },
    mounted(){
        this.shuffleAnswers()
    }
}
</script>

<style scoped>
    .hover-pointer:hover {
        cursor: pointer;
        background-color: #eee;
    }

    .selected {
        background-color:#9DA0AC;
    }

    .correct {
        background-color: #B7CC98;
    }

    .incorrect {
        background-color: #D69298;
    }
</style>
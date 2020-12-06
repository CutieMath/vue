<template>
    <div class="question-box-container mt-5">
        <b-jumbotron>
            <template #lead>
                {{ currentQuestion.question }}
            </template>

            <hr class="my-4">

            <!-- use key to identify each answer  -->
            <p v-for="(answer, index) in answers" :key="index">
                {{ answer }}
            </p>

            <div class="mt-5">
                <b-button variant="light" class="mr-3" href="#">Submit</b-button>
                <b-button @click="next" variant="dark" href="#">Next Question</b-button>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        currentQuestion: Object,
        next: Function
    },
    computed: {
        answers() {
            // make a copy of the array to "answers"
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers;
        }
    }
}
</script>
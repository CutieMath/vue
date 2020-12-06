<template>
    <div class="question-box-container mt-5">
        <b-jumbotron>
            <template #lead>
                {{ currentQuestion.question }}
            </template>

            <hr class="my-4">

            <p>
                List of Answers 
            </p>

            <b-button variant="light" class="mr-3" href="#">Submit</b-button>
            <b-button variant="dark" href="#">Next Question</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        currentQuestion: Object
    }
}
</script>
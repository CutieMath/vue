<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row container">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox 
            :currentQuestion="questions[index]"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from './components/QuestionBox.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    QuestionBox,
    Header
  },
  data(){
    return {
      questions: [],
      index: 0
    }
  },
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

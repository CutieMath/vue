// outsource the function outside of Vue
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// vue
const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    computed: {
        monsterBar(){
            return {width: this.monsterHealth + '%'}
        },
        playerBar(){
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster(){
            // fomular to get random value between 5 to 12
            const monsterDamage = getRandomValue(5, 15);
            this.monsterHealth -= monsterDamage;
            this.attackPlayer();
        },
        attackPlayer(){
            const playerDamage = getRandomValue(5, 15);
            this.playerHealth -= playerDamage;
        }
    }
});

app.mount("#game");
// outsource the function outside of Vue
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// vue
const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterBar(){
            if (this.monsterHealth < 0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBar(){
            if (this.playerHealth < 0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'}
        },
        canUseSpecialAttack(){
            return this.currentRound % 3 !== 0 || this.currentRound === 0;
        }
    },
    methods: {
        attackMonster(){
            this.currentRound ++;
            // fomular to get random value between 5 to 12
            const monsterDamage = getRandomValue(5, 15);
            this.monsterHealth -= monsterDamage;
            this.attackPlayer();
        },
        attackPlayer(){
            const playerDamage = getRandomValue(5, 15);
            this.playerHealth -= playerDamage;
        },
        specialAttackMonster(){
            this.currentRound ++;
            const monsterDamage = getRandomValue(10, 25);
            this.monsterHealth -= monsterDamage;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(5, 20);
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        startNew(){
            this.currentRound = 0;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
        }
    }
});

app.mount("#game");
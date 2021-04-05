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
        };
    },
    computed: {
        monsterBar(){
            return {width: this.monsterHealth + '%'}
        },
        playerBar(){
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
        }
    }
});

app.mount("#game");
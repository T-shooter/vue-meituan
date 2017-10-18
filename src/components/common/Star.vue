<template>
    <div class="star">
        <span v-for="itemStar in itemClasses" :key="itemStar.id" :class="itemStar" class="itemStar"></span>
    </div>
</template>

<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props:['score'],
        computed: {
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !== 0;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hasDecimal) {
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .star {
        display: inline-block;
        .itemStar {
            display: inline-block;
            width: .5rem;
            height: .45rem;
            background-size: .5rem;
            &:last-child {
                margin-right: 0;
            }
            &.on {
                background-image: url(../../assets/img/starOn.png);
            }
            &.half {
                background-image: url(../../assets/img/starHalf.png);
            }
            &.off {
                background-image: url(../../assets/img/starOff.png);
            }
        }
    }

</style>

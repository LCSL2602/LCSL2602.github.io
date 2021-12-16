const app = new Vue({
    el: '#app',
    data: {
      flagMsg: true,
      num:'',
      list_addend:[],
      time: new Date(),
      countMark:0
    },
    methods:{
        clean(){
            this.list_addend = []
            this.num = 0
        },
        add_random(){
            this.countMark++
            this.flagMsg = false
            this.time = new Date()
            if(this.countMark === 20){
                this.num = 5
                this.countMark = 0
            }else{
                if(this.list_addend.length == 4){
                    this.clean()
                }
                while(this.list_addend.length < 4){
                    let numRandom = Math.floor(Math.random() * (5 - 1) + 1)
                    if(this.list_addend.indexOf(numRandom) == -1){
                        this.num = numRandom
                        this.list_addend.push(numRandom)
                        break
                    }
                }
            }
        }
    },
})
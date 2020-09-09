var timerResource = {
    init: function(container){
        this.container = container;
        this.resetProps();
    },
    resetProps: function(){
        this.timeout = false;
        this.seconds = this.minutes = this.hours = 0;
    },
    secondsPlus: function() {
        return new Promise((resolve)=>{
            this.seconds++;
            if(this.seconds < 60){
                resolve('increase timer');
            }else{
                this.seconds = 0;
                this.minutesPlus(resolve);
            }
        });
    },
    minutesPlus: function(resolve){
        this.minutes++;
        if(this.minutes < 60){
            resolve('increase timer');
        }else{
            this.minutes = 0;
            this.hoursPlus(resolve);
        }
    },
    hoursPlus: function(resolve){
        this.hours++;
        if(this.hours < 24){
            resolve('increase timer');
        }else{
            this.hours = 0;
            let errorMsg = "one days spend! time's up";
            console.error(errorMsg);
            return errorMsg;
        }
    },
    render: function(){
        if(false == this.container.length){
            console.error('html selector is invalid');
        }
        let timer = this.hours + " : " + this.minutes + " : " + this.seconds;
        this.container.html(timer);
    },
    start: function(){
        this.timeout = setTimeout(()=>{
            let increaseTimer = this.secondsPlus();
            increaseTimer.then(
                (onSuccess) => {
                    this.render(); 
                    this.start();
                }
            ).catch(
                (onError) => { console.log(onError); }
            );
        },1000);
    },
    stop: function(){
        clearTimeout(this.timeout);
    },
    reset: function(){
        this.stop();
        this.resetProps();
    }
}
define([],function(){
    function Observer(target){
        this.target=target;
        this.listeners=[];
    }
    Observer.prototype={
        constructor:Observer,
        addListener(listener){
            this.listeners.push(listener);
        },
        trigger(index){
            var one =this.listeners[index]
            if(one){
                this.target.push(one);
            }
        }
    }

    return Observer;
})
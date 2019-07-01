define(["parentObserver"],function(parentObserver){

    return function(){
        console.log('第二个子模块');
        parentObserver.trigger(0);
    }
})
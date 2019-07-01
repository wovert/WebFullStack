define([],function(){
    function Parent(){

    }
    Parent.prototype={
        push(v){
            v();
        }
    };

    return Parent;
})
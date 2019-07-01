define(["Observer","parent","child","child2"],function(Observer,Parent,child,child2){
    var obs=new Observer(new Parent());
    obs.addListener(child);
    obs.addListener(child2);
    return obs;
})
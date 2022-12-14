class MyEvent{
    constructor(){
        this.events={}
    }
    on(eventType,...listener){
        if (!(eventType in this.events)){
            this.events[eventType]=[...listener]
        }
        else{
            this.events[type].push(listener)
        }        
    }
    emit(eventType,...arg){       
        if(this.events[eventType]){
           for(let i=0;i<this.events[eventType].length;i++){
                 this.events[eventType][i](...arg)
           }
           
        }
    }
}
export default MyEvent;
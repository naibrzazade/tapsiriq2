
let newArray = [];

class Message{
    constructor(name,message){
        this.name = name;
        this.message = message;
    }
    
}


class Messenger extends Message{
    constructor(name,message){
        super(name,message);
        
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    
    send(name,message){
        this.name = name;
        this.message = message;
        newArray.push(this.gettime()+" "+ this.name + ":" + " "+ this.message);
        
    }
    show_history(){
        console.log(newArray)
    }
    
}

let messenger = new Messenger();
messenger.send('Adil','ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()


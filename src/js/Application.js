import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    document.getElementById("emojis").firstChild.textContent = this.emojis;
  }

  addBananas(){
   var bananaMonkers = this.emojis.map(x => x += this.banana);
   document.getElementById("emojis").firstChild.textContent = bananaMonkers;
   }
 
    
   
}



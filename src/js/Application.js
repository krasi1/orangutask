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
    let z = document.createElement("p");
    document.getElementById("emojis").appendChild(z);
    this.emojis = emojis;
    z.textContent = this.emojis;
  }

  addBananas() {
    var bananaMonkers = this.emojis.map((x) => (x += this.banana));
    document.querySelector("p").textContent = bananaMonkers; 
  }
}

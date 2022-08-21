// Class instance.
class Globals {
  toastMessage: string;

  constructor() {
    this.toastMessage = "Here we go!";
  }
}

// Global variable.
export const singleton = new Globals();

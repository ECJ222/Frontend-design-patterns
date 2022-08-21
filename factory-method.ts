// Abstraction of code based on method parameters.

class Toast {
  toast: string;
  deviceType: string;
  [key: string]: any;

  constructor(message: string, deviceType: string) {
    this.toast = message;
    this.deviceType = deviceType;
  }

  showToast() {
    return this[this.deviceType]();
  }

  desktop() {
    return 'Desktop: ' + this.toast;
  }

  mobile() {
    return 'Mobile: ' + this.toast;
  }
}

// Factory Method.
function getToast(deviceType: string) {
  return new Toast('Testing toast functionality', deviceType).showToast();
}

console.log(getToast('desktop'));

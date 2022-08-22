// It's similar to a finite state machine.
// Behaves like the Strategy pattern.
// Depending on the state of the program using IF/ELSE statements can behave differently.

class Article {
  state: Draft | Moderation | Publish;

  constructor(draft: string) {
    this.state = new Draft(draft);
  }

  save() {
    this.state.action();
  }

  changeState(state: Draft | Moderation | Publish) {
    this.state = state;
  }
}

class Draft {
  draft: string;

  constructor(draft: string) {
    this.draft = draft;
  }

  action() {
    if (this.check(this.draft)) {
      console.log('Saving the document in draft state');
    } else {
      console.log('Opps something went wrong draft did not save');
    }
  }

  check(draft: string) {
    if (draft == 'is clean') return true;
    return false;
  }
}

class Moderation {
  draft: string;

  constructor(draft: string) {
    this.draft = draft;
  }

  action() {
    if (this.check(this.draft)) {
      console.log('Saving the document in moderation state');
    } else {
      console.log('Opps something went wrong returning back to draft state');
    }
  }

  check(draft: string) {
    if (draft == 'is clean') return true;
    return false;
  }
}

class Publish {
  action() {
    console.log('Saving the document in Publish state');
  }
}

const article = new Article('is not clean');

article.save();
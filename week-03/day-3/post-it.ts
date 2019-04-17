'use strict'

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroudColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroudColor;
    this.text = text;
    this.textColor = textColor;
  }

  postItInfos(): void {
    console.log(`This is a(n) ${this.backgroundColor} colored Post it with ${this.textColor} text color, which said: ${this.text}.`)
  }
}

const Example1: PostIt = new PostIt ('orange', 'Idea 1', 'blue')
const Example2: PostIt = new PostIt ('pink', 'Awesome', 'black')
const Example3: PostIt = new PostIt ('yellow', 'Superb!', 'green')

Example1.postItInfos();
Example2.postItInfos();
Example3.postItInfos();

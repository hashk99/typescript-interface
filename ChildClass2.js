"use strict";
class AbstractClass2 {
}
class ChildClass2 extends AbstractClass2 {
    constructor() {
        super(...arguments);
        this.getMyString = () => (`updated - ${this.myString}`);
        this.setMyString = (newText) => { this.myString = newText; };
    }
}
const child2 = new ChildClass2();
child2.setMyString("new");
console.log(child2.getMyString());

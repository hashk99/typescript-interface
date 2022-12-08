"use strict";
class MyInterfaceProps {
}
class AbstractClass extends MyInterfaceProps {
}
class ChildClass extends AbstractClass {
    constructor() {
        super(...arguments);
        this.getMyString = () => (`updated - ${this.myString}`);
        this.setMyString = (newText) => { this.myString = newText; };
    }
}
const child = new ChildClass();
child.setMyString("new");
console.log(child.getMyString());

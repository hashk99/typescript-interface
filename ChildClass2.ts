

interface MyInterface2{
     setMyString(newText: string | undefined):void
     getMyString(): string | undefined 
}
abstract class AbstractClass2 implements MyInterface2 {
    protected  myString?: string;
    abstract setMyString(newText: string | undefined):void
    abstract getMyString(): string | undefined 
}

class ChildClass2 extends AbstractClass2{
    protected myString?: string | undefined;
    getMyString = () => (`updated - ${this.myString}`)
     setMyString =  (newText: string | undefined):void => {this.myString = newText}
}

const child2 = new ChildClass2()
child2.setMyString("new")
console.log(child2.getMyString())

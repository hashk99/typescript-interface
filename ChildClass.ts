
class MyInterfaceProps {
    protected myString?: string
}
interface MyInterface extends MyInterfaceProps {

}
abstract class AbstractClass extends MyInterfaceProps implements MyInterface {
    protected  myString?: string;
    abstract setMyString(newText: string | undefined):void
    abstract getMyString(): string | undefined 
}

class ChildClass extends AbstractClass{
    protected myString?: string | undefined;
    getMyString = () => (`updated - ${this.myString}`)
     setMyString =  (newText: string | undefined):void => {this.myString = newText}
}

const child = new ChildClass()
child.setMyString("new")
console.log(child.getMyString())

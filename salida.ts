/**=============let String ===============*/
let varString : string = "hello world-";
varString.replace("!", "-");
console.log(`Value: ${varString} type: ${typeof(varString)}`);
/**=============let mumber ===============*/
let varNumber : number = 22;
varNumber.toFixed();
console.log(`Value: ${varNumber} type: ${typeof(varNumber)}`);
/**=============let boolean ===============*/

let varBoolean : boolean = false;
varBoolean.valueOf();
console.log(`Value: ${varBoolean} type: ${typeof(varBoolean)}`);
/**============= let Any ===============*/
//This variable can asignee any type value
let varAny : any = "Hello";
varAny = 22;
varAny = false;
console.log(`Value: ${varAny} type: ${typeof(varAny)}`);
/**=============Array any ===============*/
let varArrayAny: any[] = ["", "", ""];
varArrayAny = [true, 2, ""];
console.log(`Value: ${varArrayAny} type: ${typeof(varArrayAny)}`);
/**=============Array string ===============*/
let varArrayString: string[] = ["","",""];
//ERROR
//varArrayString = [1,2,3];
varArrayString = ["Hello", "World", "!"];
console.log(`Value: ${varArrayString} type: ${typeof(varArrayString)}`);
/**=============Array number ===============*/
let varArrayNumber: number[] = [1, 2, 3 ,4];
//Error
//varArrayNumber = ["","","",""];
varArrayNumber = [5, 6, 7, 8];
console.log(`Value: ${varArrayNumber} type: ${typeof(varArrayNumber)}`);
/**=============Array boolean ===============*/
let varArrayBoolean: boolean[] = [false, true, false ,true];
//Error
//varArrayNumber = ["","","",""];
varArrayBoolean = [true, false, true, false];
console.log(`Value: ${varArrayBoolean} type: ${typeof(varArrayBoolean)}`);
/**=============Tupla ===============*/
let varTupla: [string, boolean];
varTupla = ["asdas", false];
//ERROR
//varTupla = ["asdas", false, [], ""];
console.log(`Value: ${varTupla} type: ${typeof(varTupla)}`);
/**=============undifined, null ===============*/
//undifined, null
let myNull: null = null;
let myUndifines: undefined = undefined;
console.log(`Value: ${myNull} type: ${typeof(myNull)}`);
console.log(`Value: ${myUndifines} type: ${typeof(myUndifines)}`);

/**=============function specific return type number===============*/
function getSum(number1:number, number2:number, number3:number):number {
    return number1 + number2 + number3;
}
console.log(`Value: ${getSum} type: ${typeof(getSum)}`);

/**=============function parameters string | number ===============*/
let sum = function(num1: number | string, num2: number | string)
{
    if(typeof(num1) === 'string')
    {
        num1 = parseInt(num1);
    }

    if(typeof(num2) === 'string')
    {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}
console.log(`Value: ${sum} type: ${typeof(sum)}`);

/**=============function ? (No required)===============*/
function getName(firstName: string, lastName?: string): string {
    if(lastName == undefined)
    {
        return `${firstName}`
    }
    return `${firstName} ${lastName}`
}
console.log(`Value: ${getName} type: ${typeof(getName  )}`);

/**=============function not returned value (:void)===============*/
function myVoidFunction():void {

}
console.log(`Value: ${myVoidFunction} type: ${typeof(myVoidFunction)}`);

/**=============Interfaze ===============*/
interface ITodo{
    title: string,
    text: string
}

function showTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`)
}

/**=============Object declared type interfaze ===============*/
let myTodo: ITodo = {title: 'Title', text:"Text"};

/**============= Object oriented programming ===============*/
/**============= class ===============*/



class User
{
    private name: String;
    private email: String;
    private age: number;

    public constructor(name: string, email: string, age: number)
    {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    public register():void
    {
        console.log(`${this.name} is registered`)
    }

    public showMeAge():void
    {
        console.log(`${this.age}`)
    }

    public ageInYears():void
    {
        console.log(`${this.age} years`)
    }

    protected payInvoice()
    {
        console.log(`${this.name} paide invoice`)
    }
}

class Member extends User
{
    private id: number;

    constructor(id:number, name:string, email:string, age:number)
    {
        super(name, email, age);
        this.id = id;
    }

    public payInvoice()
    {
        super.payInvoice();
    }
}

var user = new Member(1, 'Roberto', 'm.austin14.00@gmail.com', 23);
console.log(user.payInvoice());
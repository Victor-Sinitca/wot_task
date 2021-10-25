import {} from '../index';

// для примера структуры объекта
const man = {
    height: 180,
    weight: 70,
    age: 29,
    purchases: {
        apple: 10,
        orange: 5
    }
}
type ManType = typeof man
type  ArrayMenType = Array<Array<ManType>>
//для примера структура изменяемого массива
const arrayMen = [
    [returnNewMen(man,190, 20), returnNewMen(man), returnNewMen(man), returnNewMen(man), returnNewMen(man)],
    [returnNewMen(man), returnNewMen(man, undefined,20), returnNewMen(man), returnNewMen(man), returnNewMen(man)],
    [returnNewMen(man), returnNewMen(man), returnNewMen(man), returnNewMen(man), returnNewMen(man)],
    [returnNewMen(man), returnNewMen(man, 175), returnNewMen(man), returnNewMen(man), returnNewMen(man)],
    [returnNewMen(man), returnNewMen(man), returnNewMen(man), returnNewMen(man), returnNewMen(man)],
] as ArrayMenType

//получить нового измененного человека прямой деструктуризацией
function returnNewMen  (men:ManType, height?:number, apple?:number ):ManType{
    return {...men, height: height? height : men.height,
        purchases: {...men.purchases, apple: apple? apple : men.purchases.apple}}
}

type AddNewManType={
    position:{
        x:number,
        y:number
    },
    data:ManType
}
// получить новый измененный массив людей
function returnNewArray  (array: ArrayMenType, {data:man, position:{x,y} }:AddNewManType ):ArrayMenType {
    const [...newArray] = array
    newArray[y] = [...array[y]]
    newArray[y][x] = {...array[y][x], ...man,}
    return newArray
}
// получить новый измененный массив людей прямой деструктуризацией, как с объектом
function returnNewArrayExample  (array: ArrayMenType ,{data:man, position:{x,y} }:AddNewManType ):ArrayMenType  {
    return [
        ...array,
        //как-то обратиться к элементу деструктуризованого массива, для изменения его состояния
        // например:
        /*
        [y]:[...array[y],
              [x]:{...array[y][x], ...man}
        ]
        */
    ]
}
const changedManData={
    position:{ y:2, x:3},
    data:returnNewMen(man, 168, )
} as AddNewManType
const newChangeArray=returnNewArray(arrayMen,changedManData)

// с объектами изменение свойств внутри деструктуризации работает, а вот с
// массивами такой реализации не обнаружил.
// понимаю, что это не такой и частый случай, поэтому хотелось бы услышать компетентное мнение о необходимости такой реализации.




import {} from './';

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
const arrayMen = [
    [{...man}, {...man}, {...man}, {...man}, {...man}],
    [{...man}, {...man}, {...man}, {...man}, {...man}],
    [{...man}, {...man}, {...man}, {...man}, {...man}],
    [{...man}, {...man}, {...man}, {...man}, {...man}],
    [{...man}, {...man}, {...man}, {...man}, {...man}],
] as ArrayMenType
//получить нового измененного человека прямой деструктуризацией
const returnNewMen = (men: ManType) => {
    return {...men, height: 160, purchases: {...men.purchases, apple: 11}}
}
// получить новый измененный массив людей
const returnNewArray = (array: ArrayMenType) => {
    const [...newArray] = array
    newArray[0] = [...array[0]]
    newArray[0][1] = {...array[0][1], height: 160, purchases: {...array[0][1].purchases, apple: 11}}
    return newArray
}
// получить новый измененный массив людей прямой деструктуризацией, как с объектом
const returnNewArrayExample = (array: Array<Array<typeof man>>) => {
    return [
        ...array,
        //как-то обратиться к элементу деструкторизованного массива, для изменения его состояния
        // например
        /*
        [0]:[...array[0],
              [1]:{...array[0][1], height: 160, purchases: {...array[0][1].purchases, apple: 11}}
        ]
        */
    ]
}
// с объектами изменение свойств внутри деструктуризации работает, а вот с
// массивами не получилось



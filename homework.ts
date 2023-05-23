// Question1

// type CTStudent = {
//     id:string,
//     name:string,
//     age:number,
//     isTired:boolean,
//     projectsCompleted:[...string:any]
//     pet?:string
// }

// const student1:CTStudent={
//     id: 'GMK435&g62L00',
//     name: 'John Smith',
//     age: 24,
//     isTired: true,
//     projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//     pet: 'dog'
// }


// const student2:CTStudent={
//     id: '6KGS%54GmlY76',
//     name: 'Jenny Hawthorne',
//     age: 28,
//     isTired: false,
//     projectsCompleted:["HTML Portfolio"],
// }

// const student3:CTStudent ={
//     id: '6KGS%54GmlY76',
//     name: 'Neo',
//     age: 57,
//     isTired: true,
//     projectsCompleted:["Matrix","Biological Interface Program"],
//     pet:'cat'
// }

// type fruit={
//     color:string,
//     shape:string
// }
// function ifFruit(obj:fruit|null): void{
//         if(obj !== null){
//         console.log(obj.color)}else{
//             console.log('already eaten')
//         }
        
// }





// let apple:fruit={color:"red", shape:"sphere"}
// let eaten:fruit|null=null

// ifFruit(apple)



// Question #3
// Create a Union Type named Ebook for Book and DigitalBook and create one instance of the new union type


type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

type Ebook = Book & DigitalBook


const bookybook: Ebook = {
    isbn:'what is an isbn',
    title:'hardy boys',
    author:'r,l, stein',
    fileType:'fileType'

}

console.log(bookybook.fileType)


// Question #4
// Create a Type to represent a ShopItem that will fit the following rules. You may need to create additional structures

// All ShopItems have an numeric id that can not be edited
// All ShopItems have a price
// All ShopItems have a description
// Some ShopItems have a color
// All ShopItems have a Category represented with an enum
// Possible Categories are Shirts Shoes Pants Hats
// All ShopItems have a list of keywords used to help search for the ShopItem
// For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
// After Creating the ShopItem type create 3 items using this type

enum Categories {
    pants,
    shirts,
    shoes
}

type ShopItems={
    readonly id:number,
    price: number,
    desc: string,
    color?: string,
    category: Categories,
    keywords:string[]
}


const shoe1:ShopItems = {
    id:12,
    price:79.99,
    desc: 'airforce 1',
    color: 'white',
    category:Categories.shoes,
    keywords:['shoes','nike','check','white']

}
const pant1:ShopItems = {
    id:13,
    price:40.99,
    desc: 'carhardt',
    category:Categories.pants,
    keywords:['chino','jeans','longpants','carhardt']

}
const shirt1:ShopItems = {
    id:14,
    price:60.00,
    desc: 'urban outfitters',
    color: 'tan',
    category:Categories.shirts,
    keywords:['knitted','longsleeve','collar','crop']

}


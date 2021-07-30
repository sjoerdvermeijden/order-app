import ImageOne from './images/hamburger.jpg';
import ImageTwo from './images/panckes.jpg';
import ImageThree from './images/spaghetti.jpg';

const recipes = [
    {
        recipe: "Hamburger",
        image: ImageOne,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ipsum!',
        price: 9.99,
        id: 0,
        extras: [
            {
                ingredient: 'Blueberry',
                price: '€0.50'
            },
            {
                ingredient: 'Strawberry',
                price: '€0.50'
            },
            {
                ingredient: 'Banana',
                price: '€0.50'
            }
        ]
    },
    {
        recipe: "Pancakes",
        image: ImageTwo,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ipsum!',
        price: 9.99,
        id: 1,
        extras: [
            {
                ingredient: 'Blueberry',
                price: '€0.50'
            },
            {
                ingredient: 'Strawberry',
                price: '€0.50'
            },
            {
                ingredient: 'Banana',
                price: '€0.50'
            }
        ]
    },
    {
        recipe: "Spaghetti",
        image: ImageThree,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ipsum!',
        price: 9.99,
        id: 2,
        extras: [
            {
                ingredient: 'Blueberry',
                price: '€0.50'
            },
            {
                ingredient: 'Strawberry',
                price: '€0.50'
            },
            {
                ingredient: 'Banana',
                price: '€0.50'
            }
        ]
    },
    {
        recipe: "Pizza",
        image: ImageThree,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ipsum!',
        price: 12.99,
        id: 3,
        extras: [
            {
                ingredient: 'Blueberry',
                price: '€0.50'
            },
            {
                ingredient: 'Strawberry',
                price: '€0.50'
            },
            {
                ingredient: 'Banana',
                price: '€0.50'
            }
        ]
    }
]

export default recipes
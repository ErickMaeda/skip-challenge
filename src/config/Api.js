export const getRestaurantList = () => {
    return [
        {
            id: 1,
            name: 'Restaurant 1',
            description: 'Description 1',
            address: 'Address 1',
            image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png',
            dishes: [
                {
                    id: 1,
                    name: 'test',
                }
            ]
        },
        {
            id: 2,
            name: 'Restaurant 2',
            description: 'Description 2',
            address: 'Address 2',
            image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
        },
        {
            id: 3,
            name: 'Restaurant 3',
            description: 'Description 3',
            address: 'Address 3',
            image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
        },
        {
            id: 4,
            name: 'Restaurant 4',
            description: 'Description 4',
            address: 'Address 4',
            image: 'https://www.designhill.com/uploads/cache/uploads/pagefile/1496308857-463804936592fdc79049fb7-77232378-500x500.png'
        }
    ];
}

export const getOrderList = () => {
    return [
        {
            id: 1,
            idRestaurant: 1,
            value: 155.50,
            date: '04/25/2018 12:30',
            dishes: [
                {
                    id: 1,
                    name: 'Delicious dish 1',
                    value: 12.90
                }
            ]
        },
        {
            id: 1,
            idRestaurant: 1,
            value: 30.00,
            date: '04/27/2018 12:30',
            dishes: [
                {
                    id: 2,
                    name: 'Strawberry',
                    value: 12.90
                },
                {
                    id: 3,
                    name: 'banana',
                    value: 15.90
                }
            ]
        },
        {
            id: 1,
            idRestaurant: 1,
            date: '04/25/2018 12:40',
            value: 155.50,
            dishes: [
                {
                    id: 4,
                    name: 'Dish dish',
                    value: 12.90
                }
            ]
        }
    ];
}
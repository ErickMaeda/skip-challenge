export const signIn = (user) => {
    
    let request = {};

    console.log('email', user.getEmail());
    
    if (user.getEmail().toLowerCase() == 'costumer@plusfood.com' && user.getPassword() == '123') {
        request = {
            status: true,
            route: 'CostumerRoleScreen'
        };
    } else if (user.getEmail().toLowerCase() == 'courier@plusfood.com' && user.getPassword() == '123') {
        request = {
            status: true,
            route: 'CourierRoleScreen'
        };
    } else if (user.getEmail().toLowerCase() == 'restaurant@plusfood.com' && user.getPassword() == '123') {
        request = {
            status: true,
            route: 'RestaurantRoleScreen'
        };
    }

    return request;
}

export const signUp = () => {
    
}


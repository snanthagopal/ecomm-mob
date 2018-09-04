export const get = uri =>
    new Promise(resolve => {
        let response;
        switch (uri) {
            case '/products':
                response = [
                    {
                        id: 1,
                        name: 'Bronze Ganesh Seated on Mooshika Statue',
                        sculptor: 'Shiva Aadhitya',
                        img:
                            'https://www.lotussculpture.com/mm5/graphics/00000001/1-Bronze-Ganesh-Mooshika-Statue_260x370.jpg',
                        price: 1200.00,
                    },
                    {
                        id: 2,
                        name: 'Masterpiece Bronze Shiva Nataraja Statue',
                        sculptor: 'Ramcharan Shiva',
                        img:
                            'https://www.lotussculpture.com/mm5/graphics/00000001/1-Masterpiece-Shiva-Nataraja-Statue_260x370.jpg',
                        price: 2300.00,
                    },
                    
        ];
                break;
            default:
                return null;
        }
        setTimeout(() => resolve(response), 1000);
        return null;
    });

/*
export const post = (uri, data) =>
    new Promise((resolve, reject) => {
        let response;
        switch (uri) {
            case '/login':
                if (data.email === 'test@test.com' && data.password === 'test') {
                    response = {
                        email: 'test@test.com',
                        name: 'Test Testson',
                        address: '123 test street',
                        postcode: '2761XZ',
                        city: 'Testington',
                    };

                } else {
                    setTimeout(() => reject('Unauthorised'), 1000);
                    return null;
                }
                break;
            case '/pay':
                if (data.card.cvc === '123') {
                    response = true;
                } else {
                    setTimeout(() => reject('Payment not authorised'), 1000);
                    return null;
                }
                break;
            case '/register':
                response = data;
                break;
            default:
                return null;
        }
        setTimeout(() => resolve(response), 1000);
        return null;
    });
export const put = () => { };*/
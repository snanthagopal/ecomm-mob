export const get = uri =>
  new Promise(resolve => {
    let response;
    switch (uri) {
      case '/products':
        response = [
          {
            id: 1,
            name: 'Bronze Ganesh Seated on Mooshika Statue',
            sculptor: 'Nanda Gopalan',
            img:
              'https://www.lotussculpture.com/mm5/graphics/00000001/1-Bronze-Ganesh-Mooshika-Statue_260x370.jpg',
            price: 1200.00,
          },
          {
            id: 2,
            name: 'Masterpiece Bronze Shiva Nataraja Statue',
            sculptor: 'Rishi dev',
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


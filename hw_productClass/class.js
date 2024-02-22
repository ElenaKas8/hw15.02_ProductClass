// 1.Переписать функции сетевых запросов к последней практической задачи используя async/await. Добиться аналогичной работы формы. 


// 2.Решить задачи по последней теме: 
// Реализуйте класс ProductList, который будет включать 1 сво-во products с произвольным массивом следующего формата: 

// 	[
//    {id: 1, title: 'Велосипед', price: 5000, discount_price: 800},
//    {id: 2, title: 'Cамокат', price: 3000, discount_price: 2400},
//    {id: 3, title: 'Ракетки', price: 500, discount_price: 250},
//    {id: 4, title: 'Телевизор', price: 12000, discount_price: 11500},
// ]

// К классу с значением данного сво-ва реализуйте ряд методов: 
// getSumPrice - метод должен вывести в консоль итоговую сумму стоимости всех товаров
// getAvgPrice - метод должен вывести среднее значение суммы среди всех товаров
// setPercentage - метод должен перезаписать сво-во products, добавив к каждому элементу новое сво-во percentage с значение процента скидки. Значение необходимо округлить по правилам математики до целого число
// * getExpensiveProduct - метод должен вернуть в консоль объект товара с самой дорогой стоимостью



const products = [
    {id: 1, title: 'Велосипед', price: 5000, discount_price: 800},
    {id: 2, title: 'Cамокат', price: 3000, discount_price: 2400},
    {id: 3, title: 'Ракетки', price: 500, discount_price: 250},
    {id: 4, title: 'Телевизор', price: 12000, discount_price: 11500},
]

//------------Сумма стоимости всех продуктов-----------------

class ProductList {
    constructor(products) {
        this.products = products       
    }

//     async getSumPrice() {
//     let sum = 0;
//     for (const product of this.products) {
//         sum += product.price;
//     }
//     console.log('Total price of all products:', sum);
// }



//  async getAvgPrice() {
//     let sum = 0;
//     for (const product of this.products) {
//         sum += product.price;
//     }
//     const avgPrice = sum / this.products.length;
//    console.log('Average price of all products:', avgPrice);
// }


 async setPercentage() {
   this.products.forEach(product => {
     product.percentage = Math.round(product.discount_price / product.price * 100);

   })
   console.log(this.products);

}

async getExpensiveProduct() {
    let expensiveProduct = this.products[0];
    for (const product of this.products) {
        if (product.price > expensiveProduct.price) {
            expensiveProduct = product;
        }
        console.log(expensiveProduct);
    }
}

}



let cars=[
 { "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" },
 { "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" },
 { "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" },
 { "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" },
 { "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" },
 { "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" },
 { "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" },
 { "brand": "Mahindra", "model": "Thar", "price": 1600000, "color": "Black" },
 { "brand": "Honda", "model": "Amaze", "price": 850000, "color": "White" },
 { "brand": "Honda", "model": "City", "price": 1400000, "color": "Red" },
 { "brand": "Toyota", "model": "Glanza", "price": 900000, "color": "Blue" },
 { "brand": "Toyota", "model": "Innova Crysta", "price": 2200000, "color": "Silver" },
 { "brand": "Kia", "model": "Seltos", "price": 1500000, "color": "Black" },
 { "brand": "Kia", "model": "Sonet", "price": 1100000, "color": "Grey" },
 { "brand": "Renault", "model": "Kwid", "price": 550000, "color": "Yellow" },
 { "brand": "Renault", "model": "Triber", "price": 800000, "color": "White" },
 { "brand": "Skoda", "model": "Slavia", "price": 1400000, "color": "Blue" },
 { "brand": "Volkswagen", "model": "Virtus", "price": 1500000, "color": "Red" },
 { "brand": "MG", "model": "Hector", "price": 1800000, "color": "White" },
 { "brand": "Nissan", "model": "Magnite", "price": 900000, "color": "Silver" }
]
class Car{
    constructor(brand,model,price){
        this.brand=brand;
        this.model=model;
        this.price=price;
    }
}
let c1=new Car(cars[0].brand,cars[0].model,cars[0].price);
let c2=new Car(cars[1].brand,cars[1].model,cars[1].price);
let c3=new Car(cars[2].brand,cars[2].model,cars[2].price);
console.log(c1)
console.log(c2)
console.log(c3)
var Shopping = /** @class */ (function () {
    function Shopping(product_id, product_name, quantity, price) {
        this.product_id = product_id;
        this.product_name = product_name;
        if (quantity > 0) {
            this.quantity = quantity;
        }
        else {
            console.log('quantity is 0 or less than 0 .....');
        }
        this.price = price;
        this.bill = this.calculatebill();
    }
    Shopping.prototype.calculatebill = function () {
        return this.bill = this.price * this.quantity;
    };
    Shopping.prototype.display = function () {
        console.log(this.product_id + " " + this.product_name + " " + this.quantity + " " + this.price + " " + this.bill);
    };
    return Shopping;
}());
var shop = new Shopping(1, 'maggie', 34, 10);
shop.display();

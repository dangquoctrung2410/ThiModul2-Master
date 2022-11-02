"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, type, price, amount, date) {
        this._id = 0;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._date = date;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.toString = function () {
        console.log(" M\u00E3 h\u00E0ng: ".concat(this.id, ", T\u00EAn h\u00E0ng: ").concat(this.name, ", Lo\u1EA1i h\u00E0ng: ").concat(this.type, ", Gi\u00E1: ").concat(this.price, ", S\u1ED1 l\u01B0\u1EE3ng: ").concat(this.amount, ", Ng\u00E0y t\u1EA1o: ").concat(this.date, " "));
    };
    return Product;
}());
exports.Product = Product;

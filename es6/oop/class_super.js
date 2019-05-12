class Parent {
  constructor(name) {
    this.name = name; // 实例私有属性
  }

  // 属于实例的公有属性，相当于原型上的属性
  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  getAge() {
    console.log(this.age)
  }
}

let c = new Child("wovert", 18);
console.log(p.getAge());

///////////////////////////////////////////////////////

"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parent =
  /*#__PURE__*/
  function () {
    function Parent(name) {
      _classCallCheck(this, Parent);

      this.name = name; // 实例私有属性
    } // 属于实例的公有属性，相当于原型上的属性


    _createClass(Parent, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }]);

    return Parent;
  }();

var Child =
  /*#__PURE__*/
  function (_Parent) {
    _inherits(Child, _Parent);

    function Child(name, age) {
      var _this;

      _classCallCheck(this, Child);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
      _this.age = age;
      return _this;
    }

    _createClass(Child, [{
      key: "getAge",
      value: function getAge() {
        console.log(this.age);
      }
    }]);

    return Child;
  }(Parent);

var c = new Child("wovert", 18);

////////////////////////

"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) {
  // 如果父类不是函数，并且父类不等于 null
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  // 给子类的构造函数重写原型 prototype
  // 让子类的prototype等于父类的一个实例，还要覆盖constructor，让constructor指向subClass，否则constructor会指向superClass
  subClass.prototype = Object.create(
    superClass && superClass.prototype,
    {
      // 重写 constructor（不重写会subClass.constructor = superClass）
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }
  );
  if (superClass) _setPrototypeOf(subClass, superClass); 
}

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parent =
  /*#__PURE__*/
  function () {
    function Parent(name) {
      _classCallCheck(this, Parent);

      this.name = name; // 实例私有属性
    } // 属于实例的公有属性，相当于原型上的属性


    _createClass(Parent, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }]);

    return Parent;
  }();

var Child =
  /*#__PURE__*/
  function (_Parent) {
    _inherits(Child, _Parent);

    function Child(name, age) {
      var _this;

      _classCallCheck(this, Child);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
      _this.age = age;
      return _this;
    }

    _createClass(Child, [{
      key: "getAge",
      value: function getAge() {
        console.log(this.age);
      }
    }]);

    return Child;
  }(Parent);

var c = new Child("wovert", 18);
console.log(p.getAge());


////////////
function Animal (name) {
  this.name = name
}

function Person () {

}
// Person.prototype = new Animal()
Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person
let person = new Person();
console.log(person.constructor) // [Function: Animal]
console.log(person.name)
// person.__proto__.__proto__ = Animal.prototype
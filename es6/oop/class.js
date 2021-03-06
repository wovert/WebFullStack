class Parent {
  constructor(name) {
    this.name = name; // 实例私有属性
  }

  // 静态属性是类的属性
  static hello () {
    console.log('hello')
  }

  // 属于实例的公有属性，相当于原型上的属性
  getName() {
    return this.name;
  }
}

let p = new Parent("wovert");
console.log(p.getName());

///////////////////////////////////////////////////////

("use strict");

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    // 实例left在不在right构造函数中
    return left instanceof right;
  }
}
/**
 * 类的调用检查
 * @param {*} instance 类的实例 
 * @param {*} Constructor 构造函数
 */
function _classCallCheck(instance, Constructor) {
  // 这个实例不是这个构造函数的实例的花，就报错
  if (!_instanceof(instance, Constructor)) {
    // 不能把一个类当做普通函数来调用
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * 
 * @param target 目标原型对象 
 * @param props 原型上的属性对象数组
 */
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    // 属性描述器
    var descriptor = props[i];

    // 可枚举：for in 能循环出来
    descriptor.enumerable = descriptor.enumerable || false;

    // 可配置：可通过 delete 删除此属性
    descriptor.configurable = true;

    // 可修改值
    if ("value" in descriptor) descriptor.writable = true;

    // IE8一下没有这个属性
    // 向Parent类的原型对象上增加属性
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
/**
 * 
 * @param Constructor 构造函数 
 * @param protoProps 原型上的属性
 * @param pstaticProps 静态属性（类上的属性）
 */
function _createClass(Constructor, protoProps, staticProps) {
  // 如果有原型属性的话
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Parent =
  /*#__PURE__*/
  (function() {
    function Parent(name) {
      // 检测类对象
      _classCallCheck(this, Parent);

      this.name = name;
    }

    _createClass(Parent, [
      {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }
    ], [{
      key: "hello",
      value: function hello() {
        console.log('hello');
      }
    }]);

    return Parent;
  })();

var p = new Parent("wovert");
console.log(p.getName());

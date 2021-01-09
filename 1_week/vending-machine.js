/**
 * - 판매 음료를 추가 할 수 있다.
- 판매 음료의 수량을 추가 할 수 있다.
- 음료 판매가 가능하다. 
    - 판매된 음료의 수량이 줄어든다.
    - 판매 할 수 있는 음료가 없다면 매진을 출력한다.
    - 판매된 음료의 가격은 매출에 추가된다.
- 판매 목록과 수량을 출력 할 수 있다.
- 매출을 출력 할 수 있다.

    upgrade
1. 판매 순위 
2. 음료 이름 변경 
3. 음료 가격 변경
*/

/**
 * 음료 클래스
 */
class Drink {
  /**
   * @param {string} name
   * @param {number} price
   */
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

/**
 * 자판기 클래스
 */
class VendingMachine {
  constructor() {
    this.items = []
    this.totalMoney = 0
  }

  /**
   * 상품을 진열해주는 함수
   * @param {Drink} drink
   */
  displayDrink(drink) {
    this.items = [
      ...this.items,
      {
        value: drink,
        stock: 0,
      },
    ]
  }
  /**
   *
   * @param {string} name
   * @param {number} count
   */
  addDrinkStock(name, count) {
    this.items = this.items.map((item) => {
      return item.value.name === name
        ? { ...item, stock: item.stock + count }
        : item
    })
  }
  sellDrink() {}
  prinkDrinks() {}
  printTotalMoney() {}

  // addDrink(name, price) {
  //   this.list.push(new Drink(name, price));
  // }
  // increaseCount(name, num = 1) {
  //   const drink = this.list.find((item) => item.name === name);

  //   if (!drink) {
  //     console.error("판매중인 음료가 아닙니다.");
  //     return;
  //   } else {
  //     drink.count += num;
  //     return drink;
  //   }
  // }
  // sell(name) {
  //   if (this.list.findIndex((item) => item.name === name) === -1) {
  //     console.log("메뉴에 없는 음료 입니다.");
  //     return;
  //   }

  //   const item = this.list.find((item) => item.name === name);
  //   if (item.count <= 0) {
  //     console.log("매진");
  //   } else {
  //     this.total += item.price;
  //     item.count -= 1;
  //   }
  // }
  // printList() {
  //   this.list.forEach((item) => {
  //     console.log(`판매 음료: ${item.name}, 수량: ${item.count} 개`);
  //   });
  // }
  // printTotal() {
  //   console.log(`매출: ${this.total}`);
  // }
}

const vendingMachine = new VendingMachine()

vendingMachine.displayDrink(new Drink('콜라', 1000))
vendingMachine.displayDrink(new Drink('사이다', 500))

vendingMachine.addDrinkStock('콜라', 10)

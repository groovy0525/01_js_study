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

  /**
   * 음료의 이름을 바꾸는 함수
   * @param {string} newName
   */
  set setName(newName) {
    this.name = newName
  }

  /**
   * 음료의 가격을 바꾸는 함수
   * @param {number} newPrice
   */
  set setPrice(newPrice) {
    this.price = newPrice
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
        sellCount: 0,
      },
    ]
  }

  /**
   * 상품의 갯수를 더하는 함수
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

  /**
   * 상품을 판매하는 함수
   * @param {string} name
   */
  sellDrink(name) {
    this.items = this.items.map((item) => {
      if (item.value.name === name) {
        const newItem = {
          ...item,
          stock: item.stock - 1,
          sellCount: item.sellCount + 1,
        }
        this.totalMoney += newItem.value.price
        return newItem
      } else {
        return item
      }
    })
  }

  /**
   * 판매 목록과 수량을 출력하는 함수
   */
  printDrinks() {
    console.log('판매 목록과 수량')
    this.items.forEach((item) => {
      const {
        value: { name, price },
        stock,
      } = item
      console.log(
        `판매 상품: ${name}, 판매 가격: ${price}, 재고 수량: ${stock}`,
      )
    })
  }

  /**
   * 매출 출력 함수
   */
  printTotalMoney() {
    console.log(`총 매출은 ${this.totalMoney}원 입니다.`)
  }

  /**
   * 판매량 순위 출력 함수
   */
  printSalesRanking() {
    console.log('판매 순위')
    const ranking = [...this.items]
    ranking
      .sort((a, b) => {
        return b.sellCount - a.sellCount
      })
      .forEach((item, index) => {
        console.log(`${index + 1}위 = ${item.value.name}`)
      })

    // this.items
    //   .map((item) => item)
    //   .sort((a, b) => {
    //     return b.sellCount - a.sellCount
    //   })
    //   .forEach((item, index) => {
    //     console.log(`${index + 1}위 = ${item.value.name}`)
    //   })
    // 좋은 코드 같지는 않네요
  }

  /**
   * 판매 음료 이름 변경 함수
   * @param {string} name
   */
  changeDrinkName(name, newName) {
    this.items = this.items.map((item) => {
      if (item.value.name === name) {
        const newItem = { ...item }
        newItem.value.name = newName
        return newItem
      } else {
        return item
      }
    })
  }

  /**
   * 판매 음료 가격 변경 함수
   * @param {string} name
   * @param {number} price
   */
  changeDrinkPrice(name, newPrice) {
    this.items = this.items.map((item) => {
      if (item.value.name === name) {
        const newItem = { ...item }
        newItem.value.price = newPrice
        return newItem
      } else {
        return item
      }
    })
  }

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
vendingMachine.displayDrink(new Drink('비타500', 700))
vendingMachine.displayDrink(new Drink('토레타', 1200))

vendingMachine.addDrinkStock('콜라', 10)
vendingMachine.addDrinkStock('사이다', 10)
vendingMachine.addDrinkStock('비타500', 10)
vendingMachine.addDrinkStock('토레타', 10)

vendingMachine.printDrinks()

vendingMachine.sellDrink('콜라')
vendingMachine.sellDrink('토레타')
vendingMachine.sellDrink('토레타')
vendingMachine.sellDrink('토레타')
vendingMachine.printTotalMoney()
vendingMachine.printSalesRanking()

vendingMachine.changeDrinkName('비타500', '비타700')
vendingMachine.changeDrinkPrice('비타700', 1500)
vendingMachine.printDrinks()

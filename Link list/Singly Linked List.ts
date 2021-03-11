class node {
  val: number | null;
  next: node | null;

  constructor(val: number | null) {
    this.val = val;
    this.next = null;
  }
}

let one: node | null;
let end: node;

class List {
  add(value: number) {
    if (one === null) {
      one = new node(value);
      end = one;
      return one;
    } else {
      let temp = new node(value);

      end.next = temp;
      end = temp;

      return one;
    }
  }

  show(): void {
    if (one == null) console.log(`there is no item `);
    else {
      let temp: node;
      temp = one;

      while (temp.next != null) {
        console.log(temp.val);
        temp = temp.next;
      }
      console.log(temp.val);
    }
  }

  append_first(x: number) {
    let temp = new node(x);
    temp.next = one;
    one = temp;
    return one;
  }

  append_last(x: number) {
    let temp = new node(x);
    end.next = temp;
    end = temp;

    return end;
  }
}

const main = () => {
  one = null;
  let list = new List();

  list.add(2);
  list.add(4);
  console.log(list.append_last(6));
  list.show();
};

main();

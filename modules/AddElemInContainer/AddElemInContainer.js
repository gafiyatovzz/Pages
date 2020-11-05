/* ==============================================================================================

  Класс осуществялет поиск контейнера в который вставляет необходимый элемент в начало контейнера
  copy() -- копирует элемент при этом определяя ,если это массив то использует метод,
  который копирует массив иначе копирует как обыный элемент

  delete() удаляет элемент который был скопирован
  findElements() -- осуществялет поиск эоемента в доме и отрпавлет его в метод  copy()
  render() отрисовывает элементы на странице

================================================================================================= */

class AddElemInContainer {
  constructor(d, addElem, container) {
    this.container = container;
    this.addElem = addElem;
    this.d = d;
    [this.el, this.cont] = this.findElements();
    console.log('constructor => ', this.findElements())
  }

  copyArr(arr) {
    console.log('copyArr =>', arr);
    return Array.from(arr);
  }

  copyEl(el) {
    console.log('copyEl => ', el);
    return el.cloneNode(true);
  }

  delete(item) {
    if (item.lenth) item.forEach((e) => e.remove());
    item.remove();
  }

  copyType(data) {
    console.log('copyType =>', this.copyEl(data));
    if (data.length) this.copyArr(data);
    return this.copyEl(data);
  }

  findElements() {
    console.log('findElements => ', this.addElem)
    const elem = this.copyType(this.addElem);
    const cont = this.container;
    console.log('findElements => elem ', [elem, cont]);
    //this.delete(this.addElem);
    return [elem, cont];
  }

  render() {
    console.log('this.cont: ', this.cont);
    console.log('render this.elem', this.el.outterHTML);
    //this.cont.forEach((elem, idx) => {
      //console.log('elem', elem);
      //console.log('idx', idx);

      this.cont.insertAdjacentElement('afterbegin', this.el);
    //});
  }
}
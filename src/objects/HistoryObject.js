export default class HistoryObject {
  constructor(i=0, p=null, b=[]) {
    this.index = i;
    this.player = p;
    this.boardState = b;
  }
}
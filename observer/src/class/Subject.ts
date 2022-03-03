import IObserver from "../interfaces/IObserver.ts";
import ISubject from "../interfaces/ISubject.ts";

export default class Subject implements ISubject {

  private observers: IObserver[] = [];

  subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }
  unsubscribe(observer: IObserver): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  unsubscribeAll(): void {
    this.observers = [];
  }
  notify(observer: IObserver): void {
    observer.update();
  }
  notifyAll(): void {
    this.observers.forEach(obs => this.notify(obs));
  }

}
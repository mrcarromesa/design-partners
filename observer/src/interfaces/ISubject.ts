import IObserver from "./IObserver.ts";

export default interface ISubject {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  unsubscribeAll(): void;
  notify(observer: IObserver): void;
  notifyAll(): void;
}
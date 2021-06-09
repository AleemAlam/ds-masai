const queue = [];

let front = 0;
let rear = 0;

const enqueue = (val) => {
  if (rear == 100) {
    return "overflow";
  }
  queue[rear] = val;
  rear++;
};

const dequeue = () => {
  if (front == rear) {
    return "underflow";
  }
  queue[front] = 0;
  front++;
};
enqueue(22);
enqueue(22);
enqueue(22);
enqueue(22);
dequeue();
console.log(queue);

const circularQueue = new Array(5).fill(0);
front = 0;
rear = 0;
let size = 5;
const circularEnqueue = (val) => {
  if (front == rear && circularQueue[rear] != 0) {
    return "overflow";
  }
  circularQueue[rear] = val;
  rear = (rear + 1) % size;
};

const circularDequeue = (val) => {
  if (front == rear && circularQueue[front] == 0) {
    return "underFlow";
  }
  circularQueue[front] = 0;
  front = (front + 1) % size;
};

circularEnqueue(10);
circularEnqueue(10);
circularEnqueue(10);
circularEnqueue(10);
circularEnqueue(10);
circularEnqueue(10);

circularDequeue();
circularDequeue();
console.log(circularQueue);

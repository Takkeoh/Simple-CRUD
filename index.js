import create from "./src/create.js";
import readFromDb from "./src/read.js";
import updateDb from "./src/update.js";
import deleteFromDb from "./src/delete.js";

const reqBody = {
    title: 'foo',
    body: 'bar',
    userId: 42,
}

console.log("Create");
await create('http://jsonplaceholder.typicode.com/posts/', reqBody);
console.log("--------------------");
console.log("Read");
await readFromDb('http://jsonplaceholder.typicode.com/posts/1');
console.log("--------------------");
console.log("Update");
await updateDb('http://jsonplaceholder.typicode.com/posts/1', reqBody);
console.log("--------------------");
console.log("Delete");
await deleteFromDb('http://jsonplaceholder.typicode.com/posts/1');
console.log("--------------------");



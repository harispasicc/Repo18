// Only change code below this line
let arena = new Map();

arena.set("author", "Gigi");
arena.set("publisher", "Mistral");
arena.set("numberOfPages", 28);
arena.set("year", 21);
// Only change code above this line
for (let value of arena.values()) {
    console.log(value);
}
module.exports = arena;
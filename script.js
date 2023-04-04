/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const organizerBox = {
    name: "Box 1",
    color: "clear",
    handle: true,
    handleLength: {
        whole: 5,
    },
    lidClosed: true,
    toggleLid: function (lidStatus) {
        this.lidClosed = lidStatus;
    },
    paint: {
        color: "red",
        size: 20,
    }
};

console.log(organizerBox);
console.log("This is the object", (organizerBox));
console.log("This is the paint", (organizerBox.paint))
console.log("This is the paint size", (organizerBox.paint.size))
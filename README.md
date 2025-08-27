## WELCOME TO EMERGENCY SERVICE

### Here are some answers to the question that will help you understand the properties and their functionalities for this project.

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- ## Answer

<table border="1" cellpadding="8" cellspacing="4" width="100%" align="center">
  <tr>
      <th>Property Name</th>
      <th>Structure</th>
      <th>Functionality</th>
    </tr>
    <tr>
      <td>getElementById</td>
      <td>document.getElementById("id")</td>
      <td>This property finds a specific element against a given id. It can return null if id not found. It is assumed to be the fastest method for getting an element as ids' are unique.</td>
    </tr>
    <tr>
      <td>getElementsByClassName</td>
      <td>document.getElementsByClassName("class")</td>
      <td>This property finds all the group of elements against the given class name. Returns the elements as a collection of HTML. Looping is a must to use or access the elements.</td>
    </tr>
    <tr>
      <td>querySelector</td>
      <td>document.querySelector("selector")</td>
      <td>This property uses CSS selector to find the first element that match against the given selector. It can return null if the element is not found. This is a more flexible method to get one element by using varity of selectors.</td>
    </tr>
    <tr>
      <td>querySelectorAll</td>
      <td>document.querySelectorAll("selector")</td>
      <td>This property also uses CSS selector but finds all the elements that match against the given selector. It returns a static NodeList (a collection of nodes (objects representing elements, text, comments, etc.) that are returned by certain DOM (Document Object Model) methods in JavaScript.). Can be looped through for accessing elements.</td>
    </tr>
</table>

---

### 2. How do you create and insert a new element into the DOM?

- ## Answer
- ## Step 1: Create a new element
- **let newDiv = document.createElement("div");** (this will create a new div)

- ## Step 2: Add content or attributes
- **newDiv.textContent = "Emergency Contacts for different agencies.";** (this will add content inside of new div)
- **newDiv.className = "project-title";** (this will add class name for the new div)

- ## Step 3: Insert into DOM
- **document.body.appendChild(newDiv);** (adds the new div at end of body of HTML)

### This is how you can create and insert a new element into the DOM.

---

### 3. What is Event Bubbling and how does it work?

## Answer

## Event bubbling in JavaScript is a mechanism where an event, triggered on an element within the Document Object Model (DOM), propagates upwards through its ancestor elements to the root of the document. This means that when an event occurs on a specific element, the event does not solely affect that element. Instead, the event "bubbles up" through its parent elements, then their parents, and so on, until it reaches the document object.

## It is a powerful technique where you attach a single event listener to a parent element instead of individual listeners to many child elements. This allows the parent to handle events that originate from its descendants, improving performance and simplifying code, especially in dynamic UIs where elements are added or removed frequently.

## Working Process

- **Event Triggered:**
- Firstly, an event occurs on a specific HTML element which is called as the target element (Example: click)
- **Propagation Upwards:**
- Secondly, the event then travels up the DOM tree, from the target element to its immediate parent, then to that parent's parent, and so forth.
- **Event Listeners:**
- Lastly, if any of the ancestor elements in the bubbling path have an event listener attached for that specific type of event, the corresponding event handler function will be executed.
- **Default Behavior:**
- Event bubbling is the default behavior for most events in JavaScript.

## An example can clear the concept of Event Bubbling -

### Here, we have a button with idName 'child' inside a div with idName 'parent' and we have created functions on the based of 'click' event.

<div id="parent">
  <button id="child">Click me</button>
</div>
  document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});
  document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked!");
});

### When you click on parent, it will trigger the event created for 'parent' element and console log the output. Same goes for the 'child' element.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer

### Event Delegation in JavaScript a technique where you add one event listener on a parent element instead of many on child elements. Uses event bubbling which means the event travels up, and you identify which child triggered the event. Example:

document.getElementById("parent").addEventListener("click", (e) => {
if (e.target.tagName === "BUTTON") {
console.log("Button clicked:", e.target.textContent);
}
});

### Reason for usefulness

- #### It is an efficient method as fewer event listeners required in memory. - #### Relief from hassle of re-attaching events as it works perfectly for dynamically added elements.

---

## 5. Difference between preventDefault() and stopPropagation()

### Answer

### preventDefault() and stopPropagation() are two important properties of event.

- ### structure for preventDefault()
- #### event.preventDefault()
- this property is used to prevent default action of an element.
  Example: prevent a link from navigating or a form from submitting

- ### structure for stopPropagation()
- #### event.stopPropagation()
- this property is used to prevent an event bubbling up to parent elements.
  No targeted element can't triggered by any event when this property is active.

# Thank you for your time reading this.

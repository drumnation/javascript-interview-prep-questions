# My solutions to questions from the blog post:
## "The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)"  [Here's the blog post witih all the original questions](https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-%28written-by-a-Frontend-Engineer%29)

### What is Big O notation, and why is it useful?

Big O notation is used to describe the performance or complexity of an algorhithm.

It specifically describes the worst case scenario and is useful for describing the execution time required or the space used by the algorhithm.

The best case scenario is Big 0(1)

### What is the DOM?

THe DOM defines a standard for accessing documents. It's a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.

### What is the event loop?

The Event Loop is a single threaded, queue of callback functions. When an async function executes, the callback function is pushed into the queue. The Javascript engine doesn't start processing the event loop until the code after the async function has executed.

### What is a closure?

An inner function that has access to the outer (enclosing function's variables--scopec chain. The closure has three scope chains: it has access to its own scope (variables define between its curly braces), it has access to the outer function's variables, and it has access to global variables.

### How does prototypal inheritance work, and how is it different from classical inheritance? (this is not a useful question IMO, but a lot of people like to ask it)
### How does this work?
Prototypical inheritance is prefered by many programmers over Classical inheritance. With Classical inheritance classes inherit properties from their parent class in order to reduce duplicated code.  It is often hard to plan ahead and as a result creates a tight coupling porblem as well as an inflexible heirachy problem.  Though Classical inheritance was designed to prevent code duplication, you'll have to if you need to give very specific properties to a class.

- Class inheritance creates parent/child object taxonimies as a side effect.
- The gorilla banana problem (wanted banana, got entire jungle)

Prototypical inheritance provides an alternative to classical inheritance where a prototype is a working object instance.  Objects inherit directly from other objects. Programmers favor object composition over class inheritance.

### What is event bubbling and how does it work? (this is also a bad question IMO, but a lot of people like to ask it too)

Event bubbling directs an event to its intended target, it works like this: A button is clicked and the event is directed to the button. If an event handler is set for that object, the event is triggered. If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent.

### Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.)

- Internet protocol

- TCP: A set of rules that governs the delivery of data over the internet or other network that uses the Internet Protocol, and sets up a connection between the sending and receiving computers.

- HTTP: Defines how messages are formatted and transmitted and what actions web servers and browsers should take in response to various commands

- HTTPS: The secure version of HTTP. All communications between the site and your computer are encrypted.

- HTTP2: A major revision of HTTP

- UDP: Alternative protocol to TCP used primarily for establishing low-latency and loss tolerating connections between applications on the internet.

- DNS: Domain name server. Translate list of names into ip addresses. Makes addresses easy to remember.

### What is REST, and why do people use it?

Representational State Transfer or ReST

An architectural style that advocates that applications should use HTTP as it was originally envisioned. Lookups should use GET requests. PUT, POST, and DELETE requests should be used for creation, mutation, and deletion.  A route should look like what it is.

This is RESTful

    http://myserver.com/catalog/item/1729

This is not
    
    http://myserver.com/getAllCars (don't use verbs)
    http://myserver.com/user (use plural nouns)

### My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?

1. Minimize HTTP Requests
2. Reduce server response time
3. Enable compression
4. Enable browser caching
5. Minify resources
6. Optimize images
7. Optimize CSS delivery
8. Prioritize above the fold content
9. Use a content delivery network

### What frameworks have you used? What are the pros and cons of each?

React tries to lessen the burden of making HTTP requests, using Apis in projects is easier, whilst maintaining a cross browser compatibility, something that jQuery was hailed for 10 year ago. React also makes it possible for its components to be reused across an app, thus reducing the typing efforts of the developer. 

Say you are paid to paint a fence every day. Each day, there is a minor change to the pattern. Maybe today the change is a square that takes up a small part of one panel. But you have no process to paint anything but the whole fence. So every day, you paint that whole fence and make the small minor change when you get to that spot.

With React.js, you would have a way to paint just that square instead of the whole fence. React.js acknowledges that painting is time consuming and figures out how to determine what changed between the existing fence paint job and the new paint job. Then it just does the minimal amount of work to get the new pattern in place.

In the React.js world, the fence is of course the Document Object Model (DOM) of the page. React.js can calculate how the DOM needs to change to get from the old to the new. So you can do the least amount of DOM changes to get the desired DOM (which might be no change at all -- and this is the biggest win because the naive approach would rerender what is already present).



#### Why do people use frameworks?  What kinds of problems do frameworks solve?

Frameworks give us structure. Structure is essential for building large and scalable applications. We need structure to manage code, create flexible architecture, reuse functional components and enforce separation of concerns. JS Frameworks are, partly, a result of a long stagnation in JS as a language and as an ecosystem.

Frameworks provide standardized and tested ways of doing things. The more users there are of a given framework, the more edge cases that have been encountered and coded for. Your own code may, or may not, be battle hardened in the same way.

Others can be recruited onto a project with a standard framework and have access to the documentation, examples and experience with that framework.
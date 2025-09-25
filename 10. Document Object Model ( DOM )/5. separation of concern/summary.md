SEPARATION OF CONCERNS: STRUCTURE VS STYLE VS BEHAVIOR

What is Separation of Concerns?
- HTML = Content only
- CSS = Styling only  
- JavaScript = Behavior only


1. Show classList
2. How we can add and removeClasses

document.querySelector("button").classList.add("ClassName")
3. demonstrate it on the button by changing the visiblity
4. give an excercise where change the font-size of the heading with js

Why This Matters:
- Keeps code tidy and easy to debug
- Each language has a specific purpose
- Avoids mixing responsibilities

The Problem with Direct Style Changes:
- Using JavaScript like: document.querySelector().style.color = "red"
- This mixes styling into JavaScript code
- Makes debugging harder
- Violates separation of concerns

The Better Solution: classList Property
- Available on every DOM object
- Returns list of classes attached to element
- Example: button with class "btn"

classList Methods:
1. .add() - Adds new classes
   Example: button.classList.add("invisible")
   Result: class="btn invisible"

2. .remove() - Removes classes
   Example: button.classList.remove("invisible")
   Result: class="btn"

3. .toggle() - Adds if absent, removes if present
   Example: button.classList.toggle("invisible")
   Result: Alternates between visible/invisible

How It Works:
1. Define styles in CSS:
   .invisible { visibility: hidden; }
   .huge { 
     font-size: 10rem;
     color: red;
     font-weight: bold;
   }

2. Apply classes via JavaScript:
   h1.classList.add("huge")

Benefits:
- All styles stay in CSS
- JavaScript only handles behavior
- Easier debugging
- Clean code structure

Debugging Approach:
- Style issues? Check CSS
- Behavior issues? Check JavaScript
- Clear separation makes problems easier to find

Key Takeaway:
Instead of: element.style.color = "red"
Use: element.classList.add("red-class")

This keeps concerns properly separated and
maintains clean, maintainable code.

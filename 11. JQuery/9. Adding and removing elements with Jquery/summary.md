Adding and Removing Elements with jQuery

jQuery allows you to dynamically add and remove HTML elements 
from your webpage without modifying the original HTML code.

ADDING ELEMENTS - Four Main Methods:

1. before() - Adds element BEFORE the selected element
   Example: $("h1").before("<button>New</button>")
   Result: Button appears before the h1 tag

2. after() - Adds element AFTER the selected element  
   Example: $("h1").after("<button>New</button>")
   Result: Button appears after the h1 tag

3. prepend() - Adds element INSIDE the selected element, 
   at the beginning
   Example: $("h1").prepend("<button>New</button>")
   Result: Button appears inside h1, before "Hello"

4. append() - Adds element INSIDE the selected element, 
   at the end
   Example: $("h1").append("<button>New</button>")
   Result: Button appears inside h1, after "Hello"

Key Differences:
- before()/after(): Add elements OUTSIDE the selected element
- prepend()/append(): Add elements INSIDE the selected element

REMOVING ELEMENTS:

Use the remove() method on selected elements:
Example: $("button").remove()
Result: All button elements are deleted from the page

Practical Use:
- Create interactive elements on user actions
- Build dynamic content without page refresh
- Clean up elements when no longer needed
- Modify page structure in real-time

These methods give you complete control over 
where new HTML elements are placed and how 
existing elements are removed from your webpage.

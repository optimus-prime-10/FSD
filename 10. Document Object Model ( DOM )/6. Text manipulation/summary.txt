TEXT MANIPULATION AND THE TEXT CONTENT PROPERTY

Two main properties to change text in HTML elements:
1. innerHTML - includes HTML tags
2. textContent - only text content

INNERHTML PROPERTY:
- Gets/sets HTML content between element tags
- Includes any nested HTML tags
- Example: <h1>Hello</h1> → innerHTML returns "Hello"
- Example: <h1><strong>Hello</strong></h1> → innerHTML returns "<strong>Hello</strong>"

TEXTCONTENT PROPERTY:
- Gets/sets only the text content
- Ignores HTML tags completely
- Example: <h1><strong>Hello</strong></h1> → textContent returns "Hello"

PRACTICAL DIFFERENCE:
innerHTML allows dynamic HTML addition:
- Can add <em>, <strong>, <span> tags via JavaScript
- Example: element.innerHTML = "<em>Good Bye</em>"
- This creates italicized "Good Bye" text

IMPORTANT RULES:
- Always use quotation marks for string values
- Example: element.innerHTML = "<strong>Text</strong>"
- Without quotes, JavaScript treats it as code (error)

EXPERIMENTATION:
Try both properties to see the difference:
- Use innerHTML to add formatting
- Use textContent for plain text only
- Compare outputs in browser console

KEY TAKEAWAYS:
1. innerHTML = HTML content + tags
2. textContent = plain text only
3. innerHTML enables dynamic HTML creation
4. Always use quotes for string values
5. Choose based on your needs (formatting vs plain text)

NEXT: We'll learn about manipulating element attributes.

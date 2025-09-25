1. how things are working without hr and br tags
2. how to add
3. what is the impact of these


## Interview Questions
1. What is a self-closing (void) tag in HTML?
   - A tag that does not require a closing tag and cannot have content (e.g., <br />, <hr />).
2. Give two examples of self-closing tags.
   - <br />, <hr />, <img />, <input />
3. Can you add attributes to self-closing tags?
   - Yes, you can add attributes like src, alt, class, etc.
4. Is the slash (/) required in self-closing tags in HTML5?
   - No, but it is recommended for clarity and compatibility.
5. What happens if you try to put content inside a self-closing tag?
   - The content will be ignored or may cause unexpected rendering issues. 


# TEACHING ROADMAP
1. Show students examples of <br> and <hr> in index.html without explanation.
2. Ask what happens if you try to add content inside these tags.
3. Explain the concept of self-closing (void) tags in HTML.
4. Demonstrate the correct syntax for self-closing tags (<br />, <hr />).
5. Discuss why some elements do not need closing tags (no content inside).
6. Highlight accessibility and semantic reasons for using the correct tags.
7. Guide students to update code to use self-closing tags properly (hands-on).
8. Review key points and quiz with common interview questions.
9. Offer an extra challenge: find and fix improper self-closing tag usage in a sample file.

# Self Closing Tags - Summary

## Overview
Void elements don't contain any content.
They don't need closing tags.
Examples: <hr /> and <br />.

## Syntax
Use <tagname /> format.
Forward slash before closing angle bracket.
Example: <hr /> and <br />.

## Important Note
Forward slash is different from closing tag.
It appears just before closing angle bracket.
Not like </p> which is a closing tag.

## Horizontal Rule (<hr />)
Creates a horizontal line on the page.
Visually separates sections of content.
Place between paragraphs or sections.

## Break Element (<br />)
Inserts a line break within paragraph.
Useful for addresses or poems.
Preserves formatting and meaning.

## Important Rules
Don't use <br /> for new paragraphs.
Use <p> tags for paragraphs instead.
This ensures accessibility and semantic correctness.

## HTML5 Compatibility
Can write as <hr> or <br>.
But including slash (/) is recommended.
Makes code clearer and more readable.

## Benefits
Improves structure and accessibility.
Especially helpful for screen readers.
Makes your HTML more professional.

## Best Practices
Use <br /> for line breaks in paragraphs.
Use <hr /> to separate sections.
Compare code with solutions using diffchecker.com. 
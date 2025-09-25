# TEACHING ROADMAP
1. Show students a web page with plain text and no links in index.html.
2. Ask how users would navigate to other websites from this page.
3. Introduce the <a> (anchor) element and its purpose for creating hyperlinks.
4. Demonstrate adding a basic anchor tag and discuss the href attribute.
5. Show how to link to external sites and open links in a new tab (target="_blank").
6. Guide students to add their own favorite website links (hands-on exercise).
7. Discuss the importance of descriptive link text and accessibility.
8. Review common mistakes (missing href, incomplete URLs, poor link text).
9. Quiz with common interview questions about anchor elements.
10. Offer an extra challenge: link to a specific section on the same page using id and href="#id".

# ANCHOR ELEMENTS - COMPLETE SUMMARY

## Introduction to Anchor Elements
Anchor elements (<a></a>) create hyperlinks in HTML.
Basic structure: <a>link text</a>.
Without attributes, they display text but aren't functional.

## HTML Attributes
Attributes provide extra information about HTML elements.
Placed inside opening tag after element name.
Structure: element_name attribute_name="value".
Multiple attributes separated by spaces.

## The HREF Attribute
href = "Hypertext Reference".
Specifies URL that hyperlink points to.
Required to make anchor elements functional.
Syntax: <a href="https://example.com">Link Text</a>.

## Global Attributes
Can be applied to any HTML element.
Example: draggable attribute.
draggable="true" - allows element to be dragged.
draggable="false" - prevents dragging (default).

## Practical Exercise: Favorite Websites List
Create ordered list (<ol>) with 5 favorite websites.
Each list item (<li>) contains anchor tag.
Structure:
<ol>
  <li><a href="URL">Website Name</a></li>
  <li><a href="URL">Website Name</a></li>
</ol>

## Ordered List Attributes
start attribute: specifies starting number.
Syntax: <ol start="5"> (starts from 5).
Useful for customizing list numbering.

## Key Syntax Rules
Always use quotation marks around attribute values.
URLs in href must be complete (include https://).
Anchor text should be descriptive.
Proper nesting: <ol><li><a></a></li></ol>.

## Common Mistakes to Avoid
Forgetting the href attribute.
Missing quotation marks around URLs.
Incorrect nesting of elements.
Using incomplete URLs.

## Best Practices
Use descriptive link text.
Ensure all links are functional.
Test links after creation.
Use proper HTML structure and indentation.

## Next Steps
This lesson builds foundation for complex HTML elements.
Understanding attributes is crucial for HTML development.
Practice creating various types of links.
Explore additional anchor element attributes.

## Key Takeaways
Anchor elements create hyperlinks with <a> tag.
href attribute is essential for functional links.
Attributes provide additional functionality to HTML elements.
Global attributes work on any element.
Proper HTML structure is crucial for functional websites.

## Interview Questions

1. What is the purpose of the <a> tag?
   - It creates hyperlinks to other pages, files, or locations.
2. What attribute is required for a functional anchor tag?
   - The href attribute.
3. How do you open a link in a new tab?
   - Add target="_blank" to the <a> tag.
4. Why is descriptive link text important?
   - It improves accessibility and SEO by making links meaningful.
5. Can you link to a specific part of a page?
   - Yes, use an anchor with href="#section-id" and a matching id attribute.

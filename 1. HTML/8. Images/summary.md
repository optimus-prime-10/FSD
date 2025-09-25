# TEACHING ROADMAP
1. Show students a web page with and without images in index.html.
2. Ask how images are added to web pages and why they matter.
3. Introduce the <img> tag and its key attributes (src, alt).
4. Demonstrate adding an image and discuss the importance of alt text for accessibility.
5. Guide students to add images to a sample page (hands-on).
6. Discuss different image formats and when to use each.
7. Review best practices and quiz with common interview questions.
8. Offer an extra challenge: add decorative and informative images, and style them with CSS.

# Image Elements Summary

## Overview
<img> adds images to websites.
Structure: <img src="url" />

## Key Components
- src: image source/location
- Self-closing tag (void element)
- alt: alternative text for accessibility

## Important Features
Self-closing tag, no closing tag needed.
src is required, contains image URL.
alt is highly recommended for accessibility.

## Accessibility
Screen readers use alt text for images.
Alt text helps visually impaired users.
Essential for accessible websites.

## Image Types
JPEG, PNG, GIF all work the same.
GIFs animate automatically when used.
Any image format works if URL is correct.

## Example Usage
<img src="https://picsum.photos/200/200" alt="Random placeholder image" />

## Best Practices
Always include alt text when possible.
Use descriptive alt text for images.
For decorative images, use alt="".
Alt text should be meaningful and contextual.

## Lesson Example
Create webpage with h1 and image.
Show cat or dog person with proper image and alt.

## Interview Questions

1. What is the purpose of the alt attribute in <img>?
   - It provides alternative text for screen readers and displays if the image fails to load.
2. Can you use images from external URLs?
   - Yes, as long as the URL is correct and accessible.
3. What happens if you omit the alt attribute?
   - The image is less accessible, and screen readers may not describe it.
4. How do you control the size of an image in HTML?
   - Use width and height attributes or CSS.
5. Can you use SVG images in <img> tags?
   - Yes, SVGs are supported as image sources.

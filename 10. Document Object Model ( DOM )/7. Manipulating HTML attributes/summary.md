# Manipulating HTML Element Attributes

## What are HTML Attributes?
Attributes are properties inside HTML tags that 
provide additional information. They appear in 
orange color in code editors.

Examples:
- class attribute
- href attribute (for links)
- src attribute (for images)

## How to Access Attributes

### 1. Get All Attributes
```javascript
document.querySelector("a").attributes
```
This returns a list of all attributes 
attached to the selected element.

### 2. Get Specific Attribute Value
```javascript
document.querySelector("a").getAttribute("href")
```
Returns the current value of the specified 
attribute (e.g., "google.com").

## How to Change Attributes

### Set/Update Attribute Value
```javascript
document.querySelector("a").setAttribute("href", "bing.com")
```
This method takes two parameters:
1. Attribute name to change
2. New value to set

## Practical Example

**Before:**
```html
<a href="google.com">Google</a>
```

**After JavaScript:**
```javascript
document.querySelector("a").setAttribute("href", "bing.com")
```

**Result:**
- Link text still shows "Google"
- But clicking takes you to Bing instead

## Key Methods Summary

| Method | Purpose | Parameters |
|--------|---------|------------|
| `.attributes` | Get all attributes | None |
| `.getAttribute(name)` | Get specific attribute value | Attribute name |
| `.setAttribute(name, value)` | Change attribute value | Name + new value |

## Key Takeaways

1. **Attributes** are properties inside HTML tags 
   (class, href, src, etc.)

2. **`.attributes`** shows all attributes of an element

3. **`.getAttribute()`** retrieves value of specific 
   attribute

4. **`.setAttribute()`** updates attribute value with 
   two parameters: name and new value

5. **Easy manipulation** - change any element's 
   attributes dynamically with JavaScript

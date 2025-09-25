# Manipulating Styles with jQuery

## The .css() Method
jQuery's .css() method can both get and set CSS properties.

### Setting CSS Properties
```javascript
$("h1").css("color", "green");
```
- First argument: CSS property name
- Second argument: property value

### Getting CSS Properties
```javascript
$("h1").css("color");  // Returns RGB value
$("h1").css("font-size");  // Returns "32px"
```

## Better Approach: Using Classes
Instead of inline styles, use CSS classes for better separation of concerns.

### Adding Classes
```javascript
$("h1").addClass("big-title");
```
CSS class example:
```css
.big-title {
    font-size: 10rem;
    color: yellow;
    font-family: cursive;
}
```

### Removing Classes
```javascript
$("h1").removeClass("big-title");
```

### Multiple Classes
```javascript
$("h1").addClass("big-title margin-50");
```
- Separate class names with spaces
- Both classes get applied simultaneously

### Checking for Classes
```javascript
$("h1").hasClass("margin-50");  // Returns true/false
```

## Key Benefits
1. **Separation of Concerns**: Keep JavaScript for behavior, CSS for styling
2. **Maintainability**: Easier to manage styles in CSS files
3. **Reusability**: CSS classes can be reused across elements
4. **Performance**: Better than inline style manipulation

## Method Summary
- `.css(property, value)` - Set CSS property
- `.css(property)` - Get CSS property value
- `.addClass(className)` - Add CSS class(es)
- `.removeClass(className)` - Remove CSS class(es)
- `.hasClass(className)` - Check if class exists (returns boolean)

## Best Practices
- Use CSS classes instead of inline styles
- Keep styling logic in CSS files
- Use JavaScript only for dynamic behavior
- Multiple classes: separate with spaces in single string

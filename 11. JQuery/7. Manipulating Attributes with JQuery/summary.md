# Manipulating Attributes with jQuery

## What are Attributes?
Attributes are properties of HTML elements like:
- src attribute of images
- href attribute of anchor tags
- class attribute of any element

## The .attr() Method
jQuery provides a simple method called .attr() to:
- Get attribute values
- Set attribute values dynamically

## Getting Attribute Values
Use .attr() with one argument (attribute name):

```javascript
console.log($('img').attr('src'));
```

This prints the src value (e.g., "drum.png") to console.

## Setting Attribute Values
Use .attr() with two arguments:
- Attribute name
- New value

```javascript
$('a').attr('href', 'https://www.yahoo.com');
```

This changes all anchor tags' href to Yahoo.

## Combining with Text Changes
You can also update the link text:

```javascript
$('a').text('Search');
```

Now clicking the link goes to Yahoo instead of Google.

## Working with Classes
Classes are also attributes that can be accessed:

```javascript
console.log($('h1').attr('class'));
```

This prints all classes (e.g., "big-title margin-50").

## Key Points
- .attr() works for getting and setting attributes
- One argument = get value
- Two arguments = set value
- Useful for dynamic content changes
- Classes are attributes too
- Perfect for interactive web pages

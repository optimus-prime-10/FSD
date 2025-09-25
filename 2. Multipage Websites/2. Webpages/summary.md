# Multi-Page Websites

## Structure
```
Project/
├── index.html (home page)
├── assets/images/ (images)
└── public/ (other pages)
```

## File Paths
- `./` = current directory
- `<a href="./public/about.html">` = link to page
- `<img src="./assets/cat.png">` = display image

## Navigation Bar
```html
<nav>
  <ul>
    <li><a href="./index.html">Home</a></li>
    <li><a href="./public/about.html">About</a></li>
    <li><a href="./public/contact.html">Contact</a></li>
  </ul>
</nav>
```

## Clickable Image Link
```html
<a href="./public/about.html">
    <img src="./assets/images/cat.png" alt="cat" />
</a>
```

## Key Points
- Use relative paths for linking
- Consistent navigation on all pages
- Organize files in folders
- `<a>` uses `href`, `<img>` uses `src`

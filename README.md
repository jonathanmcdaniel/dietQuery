# dietQuery
dietQuery is a tool for basic DOM manipulation without the bloat of other tools

## Selectors
Locate DOM elements through the normal selectors. The `dq()` function takes in a selector as a string and returns a list of elements that match the selector.

```javascript
var divsInDocument = dq('div');
```
## Functions
### Attributes
Add attributes to the selected elements.
```javascript
dq('#myImg').attr('src', '[url or image information]');
```

### Style
Add a new style to the selected elements.
```javascript
dq('#mDiv').style('color', '#333');
```

### Modify HTML
Change the inner HTML of the selected elements
```javascript
dq('#newContent').html('<strong>This will be placed inside of the element with an ID of "newContent".</strong>');
```

### Event Listeners
Add event listeners to the selected elements
```javascript
dq('#myButton').on('click', function(){
  console.log("#myButton was clicked");
});
```

### Load Remoate Content
Load asychronous information from a remote location into the selected elements
```javascript
dq('#myButton').load('https://www.example.com/example.txt');
```

## Chainable
Functions in dietQuery are chainable so that you can accomplish all of your tasks at once.
```javascript
dq('.myDiv').load('https://www.example.com/example.txt').style('color', 'red').on('mouseover', function () {
  console.log('The one element with a class of "myDiv" experienced the "mouseover" event');
});
```

# Circular Progress

A JavaScript circular progress widget, dependency-free and configurable.

<img src="http://f.cl.ly/items/2l072A342Z2T3P3X2r2d/Screen%20Shot%202013-04-29%20at%206.50.21%20PM.png" width="278" alt="Example">

## Example

```javascript
var progress = new CircularProgress({
  radius: 70,
  strokeStyle: 'black',
  lineCap: 'round',
  lineWidth: 4
});

document.body.appendChild(progress.el);

progress.update(40);
```

## Usage

### new CircularProgress( options )

Other attributes are attached to the canvas 2D context.

Options :

* all 2D context properties.
* `text` : Scopped to text, accept `value` and all 2D context properties.
* `initial` : Scopped to initial circle, accept all 2D context properties.

Example :

```javascript
progress = new CircularProgress({
  lineWidth: 2,
  initial: {
    strokeStyle: 'gray',
    lineWidth: 4
  }
});

// update options
progress.options.text = {
  font: '14px'
};
```

### update( value )

Update percent and draw the canvas, `value` must be a float between 0 and 100.

## License

MIT

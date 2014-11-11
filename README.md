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

### shadowBlur

If you would like to add a drop shadow to the progress bar to create a "glow" effect you can.  This will expand the size of the canvas from the diameter of the progress par to include the size of the drop shadow.  In the below example, the canvas ends up 96px wide and tall.

![circleprogress_with_shadow](https://cloud.githubusercontent.com/assets/895892/4994836/d4cfc4dc-6979-11e4-9ecc-d9cdd01e8526.png)

```
var progress = new CircularProgress({
      radius: 42,
      strokeStyle: '#FFFFFF',
      shadowColor: '#00d1ff',
      shadowBlur: 12,
      lineCap: 'round',
      lineWidth: 4
    });
```

## License

MIT

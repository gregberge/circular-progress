# Circular progress

A JavaScript circular progress bar widget, dependency-free and configurable.

## Example

```javascript
var progressBar = new CircularProgress({
  width: 200,
  height: 200,
  radius: 70,
  strokeStyle: '#000',
  lineCap: 'round',
  lineWidth: '4.0'
});

document.body.appendChild(progressBar.canvas);

progressBar.progress(0.4);
```

## Usage

### new CircularProgress( options )

Options must contains :

* `width`
* `height`
* `radius`

Other attributes are attached to the canvas 2D context.

### progress( value )

Notify the progress, and draw the canvas, `value` is a float between 0 and 1.
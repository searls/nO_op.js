# What?

A Node.js port of [@ymendel](https://github.com/ymendel)'s seminal Ruby gem, [nO_op](https://github.com/ymendel/nO_op).

This library offers a lightweight to render judgment upon other people's code
without resorting to actually doing the work to improve things or communicate
productively with other humans.

Examples:

``` javascript
add = function(a, b) { return a + b }

add([], [])
O_o
```

You can also use:

* `o_O`
* `o.O`
* `O.o`


As a bonus, this library also implements the function `o_` on `Object`'s
prototype, so that it can be invoked as a sort of judgmental tap:

```
[1,2,3].o_().indexOf(2)
```

# Licensing

This project is distributed under the GPL, but commercial licensing is also
available. Please contact [@searls](http://twitter.com/searls) for details.


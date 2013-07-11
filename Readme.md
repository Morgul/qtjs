# Qtjs

This is an implementation of some of Qt's core types, ontop of Javascript's core types. This project modifies the
prototypes of Array, String, and Object to adhere closer to QList, QString, and QMap. This makes Javascript much easier
to work with from inside QML.

## But, isn't modifying prototypes bad?

Generally, yes. Modifying the prototypes of the core types is like changing the language's API. Anything you code against
it will only work with your changes, and things coded against the default api might break. In practice, I've found that
modifying the prototype is acceptible when you're adding a small number of functions you need globally. Still, in general,
I don't recommend it.

So why do it? Simple. This is targeted at a _bare-bones QML Environment_. When writing QML, I don't want to have to fight
with Javascript, or change mental gears and use something like [lodash](http://lodash.com/). I'd rather use Qt's types,
or at the very least, Qt's API.

That's what this is for.

## Why not make QList, QString and QMap work-alikes?

Great question. Mostly, because I'm a bit lazy, it's slightly more work, and you'll be wrapping values returned from Qt
in these custom types constantly.

I have considered having a version of this library that does exactly that. So the developer can choose which method he'd
prefer. That's not what it does currently, but I'm open to it.

## Unit tests

First, install node.js. Then, simply:

```bash
$ npm install
```

Once that completes, you can run the unit tests with:

```bash
$ npm test
```

This will run Karma, and try to launch Google Chrome. You can change what browser it launched in the config. Also, I
have it set to continuous integration mode, since that's the easiest for me while developing.

## License

Licensed under the MIT license. See LICENSE for details.

## Inclusion in Qt

One of the goals for this project is to get this code included in Qt, as a nice extra. We'll see how that goes.
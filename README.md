# be-headed

## Syntax

```html
    <template  be-headed=fonts.gooleapis.com-css-family-indie-flower>
        <style>
            @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
        </style>
        <template id=fonts.gooleapis.com-css-family-indie-flower></template>
    </template>
```

... places:

```html
<style>
    @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
</style>
```

inside document.head.


The purpose of the inner template:

If the template appears multiple times on the page with the same attribute value (fonts.gooleapis.com-css-family-indie-flower), only one instance will get added to document.head.
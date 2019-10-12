---
layout: docs
title: Offcanvas
description: Toggle the visibility sidebars across your project with a few classes and our JavaScript plugin.
group: components
toc: true
---

## How it works

The offcanvas JavaScript plugin is used to show and hide a sidebar (or bottom-bar). Buttons or anchors are used as triggers, to specific elements you toggle. 

Given how CSS handles animations, you cannot use `margin` & `translate` on a `.offcanvas` element. Use the class on an independent wrapping element.

## Example

Click the buttons below to show and hide another element via class changes:

- `.offcanvas` hides content
- `.offcanvas.show` shows content

You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="offcanvas"` is required.

{{< example >}}
<p>
  <a class="btn btn-primary" data-toggle="offcanvas" href="#offcanvasExample" role="button" aria-expanded="false" aria-controls="offcanvasExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvasExample" aria-expanded="false" aria-controls="offcanvasExample">
    Button with data-target
  </button>
</p>
<div class="offcanvas offanvas-push-body bg-dark text-white" tabindex="-1" id="offcanvasExample">
  <div class="offcanvas-header">
    <div class="h4 col text-center">Offcanvas</div>
    <button type="button" class="close text-reset" data-dismiss="offcanvas" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="card card-body text-dark ">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>

  <div class="dropdown mt-3">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{{< /example >}}

## Position Modifiers

- `.offcanvas-right` modifier, places offcanvas on the right side
- `.offcanvas-bottom` modifier, places offcanvas on the bottom of the screen

{{< example >}}
<p>
  <button class="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvasExample2" aria-expanded="false" aria-controls="offcanvasExample2">Toggle Right offcanvas</button>
  <button class="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvasExample3" aria-expanded="false" aria-controls="offcanvasExample3">Toggle Bottom offcanvas</button>
</p>
<div class="offcanvas bg-dark  text-white offcanvas-right" tabindex="-1" id="offcanvasExample2">
  <div class="offcanvas-header">
    <div class="h4 col text-center">Offcanvas Right Side</div>
    <button type="button" class="close text-reset" data-dismiss="offcanvas" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
<div class="offcanvas bg-info text-white  offcanvas-bottom" tabindex="-1" id="offcanvasExample3">
  <div class="offcanvas-header">
    <div class="h4 col text-center">Offcanvas Bottom</div>
    <button type="button" class="close text-reset" data-dismiss="offcanvas" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
{{< /example >}}

## Color schemes

Theming the offcanvas has never been easier thanks to the combination of theming classes and background-color utilities. You can achieve any customization   with `.bg-{color}` & `.text-{color}` utilities.

## Body Options

By default, when an offcanvas is visible, body cannot be scrolled. You can use the following data-options:

- `data-body="scroll"` enables scrollBar on body when offcanvas is open
- `data-body="blur"` hides scrollBar and blur body, when offcanvas is open

{{< example >}}
<p>
  <button class="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvasExample4" aria-expanded="false" aria-controls="offcanvasExample4">Enable body scrolling </button>
  <button class="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvasExample5" aria-expanded="false" aria-controls="offcanvasExample5">Body blurring</button>
</p>
<div class="offcanvas bg-success text-white" data-body="scroll" tabindex="-1" id="offcanvasExample4">
  <div class="offcanvas-header">
    <div class="h4 col text-center">Body Cannot Scroll</div>
  </div>
</div>
<div class="offcanvas bg-primary text-white" data-body="blur" tabindex="-1" id="offcanvasExample5">
  <div class="offcanvas-header">
    <div class="h4 col text-center">Body is Blurred</div>
  </div>
</div>
{{< /example >}}

## Accessibility

Make sure to add `aria-expanded` to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you've set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

## Usage

The offcanvas plugin utilizes a few classes to handle the heavy lifting:

- `.offcanvas` hides the content
- `.offcanvas.show` shows the content
- `.offcanvas-right` hides the offcanvas on the right
- `.offcanvas-bottom` hides the offcanvas on the bottom
- `data-body="scroll"` enables body scrollbar when offcanvas is open
- `data-body="blur"` hides scrollBar and blur body, when offcanvas is open
- Add a dismiss button with the `data-dismiss="offcanvas"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.

### Via data attributes

Just add `data-toggle="offcanvas"` and a `data-target` or `href` to the element to automatically assign control of one offcanvas element. The `data-target` attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the class `offcanvas` to the offcanvas element. If you'd like it to default open, add the additional class `show`.

### Via JavaScript

Enable manually with:

{{< highlight js >}}
var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
{{< /highlight >}}

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Activates your content as a collapsible element. Accepts an optional options `object`.

You can create a offcanvas instance with the constructor, for example:

{{< highlight js >}}
var myOffcanvas = document.getElementById('myOffcanvas')
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
{{< /highlight >}}

| Method | Description |
| --- | --- |
| `toggle` | Toggles a offcanvas element to shown or hidden. **Returns to the caller before the collapsible element has actually been shown or hidden** (i.e. before the `shown.bs.offcanvas` or `hidden.bs.offcanvas` event occurs). |
| `show` | Shows a offcanvas element. **Returns to the caller before the collapsible element has actually been shown** (i.e. before the `shown.bs.offcanvas` event occurs).|
| `hide` | Hides a offcanvas element. **Returns to the caller before the collapsible element has actually been hidden** (i.e. before the `hidden.bs.offcanvas` event occurs).|
| `_getInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element |

### Events

Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.offcanvas</td>
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bs.offcanvas</td>
      <td>This event is fired when a offcanvas element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
      <td>hide.bs.offcanvas</td>
      <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bs.offcanvas</td>
      <td>This event is fired when a offcanvas element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
  </tbody>
</table>

{{< highlight js >}}
var myOffcanvas = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.offcanvas', function () {
  // do something...
})
{{< /highlight >}}

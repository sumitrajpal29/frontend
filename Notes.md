# How to avoid some style in mobile screen?

### 🔹 Do all CSS properties have defaults?

Yes, **every CSS property has an initial (default) value**, defined by the CSS spec. But the **default is not always `none` or `0`** — it depends on the property.

---

### 🔸 If you "don't want to apply something" at 600px...

You can **override** the property inside the media query by setting:

* `initial` → resets to the default value (as per CSS spec)
* `unset` → removes the style, behaves like `inherit` for inherited properties, or `initial` for others
* `inherit` → takes value from parent

---

### ✅ Examples

#### 1. **Don't apply color at 600px:**

```css
@media (max-width: 600px) {
  .xyz {
    color: initial;
  }
}
```

#### 2. **Don't apply padding:**

```css
@media (max-width: 600px) {
  .xyz {
    padding: 0; /* Or initial/unset */
  }
}
```

#### 3. **Remove background:**

```css
@media (max-width: 600px) {
  .xyz {
    background: none;
  }
}
```

---

### 🔹 Best Practice

Instead of thinking "don’t apply," think in terms of **overriding** or **resetting** using:

* `initial`
* `unset`
* `inherit`
* Or the exact opposite value (like `display: none`, `padding: 0`, etc.)

---
# How to avoid all style properties in mobile screen?
You **don’t need to write `unset` or `initial` for each property manually** (though you could). Instead, here's how to **effectively remove the entire effect at `max-width: 600px`**.

---

### ✅ Option 1: Use `all: unset` (resets almost everything)

```css
@media (max-width: 600px) {
  .profile-img-animated-border::before {
    all: unset;
  }
}
```

* This **resets all inherited and non-inherited properties** (except `unicode-bidi` and `direction`) to their default values.
* It removes `content`, `position`, `background`, `animation`, etc., all at once.
* Useful and clean.

---

### ✅ Option 2: Use `display: none` (if you want to hide the pseudo-element completely)

```css
@media (max-width: 600px) {
  .profile-img-animated-border::before {
    content: none;
    display: none;
  }
}
```

* Use this if you simply want to **disable or hide** the pseudo-element visually.

---

### 🔎 When to use which?

| Goal                          | Use                             |
| ----------------------------- | ------------------------------- |
| Reset all styles to defaults  | `all: unset`                    |
| Completely hide the pseudo    | `content: none; display: none;` |
| Selectively reset a few props | `unset` or `initial` per prop   |

---

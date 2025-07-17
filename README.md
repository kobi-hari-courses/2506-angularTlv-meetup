# How to make an Angular Application **"Themable"**

# For details - See my course
![Theming Angular and Material](./presentation/Logo%20-%20Small.png)

[Theming Angular & Material - the mising guide](https://www.udemy.com/course/theming-angular-and-material-md3-the-missing-guide/?referralCode=6B898509A43E53B24985)


# Step 1 - Add Design Tokens
```css
:root, .theme {
  --n-00: #ffffff;
  --n-01: #e6e6e6;
  --n-02: #cccccc;
  --n-03: #b3b3b3;
  --n-04: #999999;
  --n-05: #808080;
  --n-06: #666666;
  --n-07: #4d4d4d;
  --n-08: #333333;
  --n-09: #1a1a1a;
  --n-10: #000000;

  --p-00: #eaf4fd;  
  --p-01: #badcff;  
  --p-02: #8ac4fc;  
  --p-03: #5aabf8;  
  --p-04: #2a92f4;  
  --p-05: #2196f3;  
  --p-06: #1a7ace;  
  --p-07: #135eaa;  
  --p-08: #0d4285;  
  --p-09: #062561;  
  --p-10: #000000;  

  --a-00: #fdf3ea;  
  --a-01: #f8d9bb;  
  --a-02: #f3be8c;  
  --a-03: #eea35d;  
  --a-04: #e9882e;  
  --a-05: #f37421;  
  --a-06: #c45f1a;  
  --a-07: #954913;  
  --a-08: #66340d;  
  --a-09: #381e06;  
  --a-10: #000000;  
}
```

# Step 2 - Apply on all CSS Color usages
```css
  border: 1px solid var(--n-04);
    grid-area: toolbar;
    background: linear-gradient(
      90deg,
      var(--p-07) 60%,
      var(--p-08) 80%,
      var(--p-09) 100%
    );
    color: var(--n-00);
```

# Step 3 - Create base tokens
>These are selectable by the user
```css
  --background: white;
  --foreground: black;
  --primary: #2196f3;
```

We can see them in the "playground" page

# Step 4 - Apply "selected color" on Primary
>app.ts
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterModule, FormsModule],
  standalone: true,
  host: {
    '[style.--primary]': 'selectedColor()',
  }
})

```

# Step 5 - Accent is **Relative** to primary
>in `styles.scss` use relative color syntax to create accent (and other scemantic palettes)
```css
:root, .theme {
  --accent: hsl(from var(--primary) calc(h + 180) s l); 
}
```

# Step 6 - Palette Entries using `color-mix`
>in `styles.scss` use color mixing to create various blends between the base colors and the background and foreground
```css
  --n-00: color-mix(in srgb, var(--background), var(--foreground) 0%);
  --n-01: color-mix(in srgb, var(--background), var(--foreground) 10%);
  --n-02: color-mix(in srgb, var(--background), var(--foreground) 20%);
  --n-03: color-mix(in srgb, var(--background), var(--foreground) 30%);
  --n-04: color-mix(in srgb, var(--background), var(--foreground) 40%);
  --n-05: color-mix(in srgb, var(--background), var(--foreground) 50%);
  --n-06: color-mix(in srgb, var(--background), var(--foreground) 60%);
  --n-07: color-mix(in srgb, var(--background), var(--foreground) 70%);
  --n-08: color-mix(in srgb, var(--background), var(--foreground) 80%);
  --n-09: color-mix(in srgb, var(--background), var(--foreground) 90%);
  --n-10: color-mix(in srgb, var(--background), var(--foreground) 100%);

  --p-00: color-mix(in srgb, var(--primary), var(--background) 100%);
  --p-01: color-mix(in srgb, var(--primary), var(--background) 80%);
  --p-02: color-mix(in srgb, var(--primary), var(--background) 60%);
  --p-03: color-mix(in srgb, var(--primary), var(--background) 40%);
  --p-04: color-mix(in srgb, var(--primary), var(--background) 20%);
  --p-05: var(--primary);
  --p-06: color-mix(in srgb, var(--primary), var(--foreground) 20%);
  --p-07: color-mix(in srgb, var(--primary), var(--foreground) 40%);
  --p-08: color-mix(in srgb, var(--primary), var(--foreground) 60%);
  --p-09: color-mix(in srgb, var(--primary), var(--foreground) 80%);
  --p-10: color-mix(in srgb, var(--primary), var(--foreground) 100%);

  --a-00: color-mix(in srgb, var(--accent), var(--background) 100%);
  --a-01: color-mix(in srgb, var(--accent), var(--background) 80%);
  --a-02: color-mix(in srgb, var(--accent), var(--background) 60%);
  --a-03: color-mix(in srgb, var(--accent), var(--background) 40%);
  --a-04: color-mix(in srgb, var(--accent), var(--background) 20%);
  --a-05: var(--accent);
  --a-06: color-mix(in srgb, var(--accent), var(--foreground) 20%);
  --a-07: color-mix(in srgb, var(--accent), var(--foreground) 40%);
  --a-08: color-mix(in srgb, var(--accent), var(--foreground) 60%);
  --a-09: color-mix(in srgb, var(--accent), var(--foreground) 80%);
  --a-10: color-mix(in srgb, var(--accent), var(--foreground) 100%);
```

# Step 7 - Use `color-scheme` to set light or dark mode
>styles.scss
```css
:root {
  color-scheme: light dark; // system value
}
```

# Step 8 - Use `light-dark` to set background and forground
>styles.scss
```css
  --background: light-dark(white, black);
  --foreground: light-dark(black, white);
```

# Step 9 - Constraint the primary color
You can use relative color syntax to limit the saturation and lightness of the primary color

>app.scss
```css
--primary: oklch(from var(--selected-color) 0.6 max(c, 0.06) h);
```
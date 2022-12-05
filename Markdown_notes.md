<!--* Comments in Markdown (Same as HTML) -->

<!-- Markdown is a lightweight MARKUP language that you can use to add formatting elements to plaintext text documents. 
Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages. -->

# Heading

<!-- ## Total 6 types of headings .. For every size add 6 times #
### After completion of every heading leave one line -->
<!-- <h1> Heading written in HTML tags </h1> -->

<!--* Paragraphs in Markdown -->
## Paragraphs

This is line one  
Add two spaces (at the end of every line) to write in next line.

Leaving one line above.
<!-- <p> Paragraphs written in HTML tags </p> -->
`<p> Written under backticks will display the text same </p>`

<!-- Or else add <br> tag for line break -->
</br>

## Lists

### Unordered Lists
<!-- Even (*, +) works as unordered lists  -->
- List 1
- List 2
- List 3

### Ordered Lists

1. Item 1
2. Item 2
3. Item 3

</br>

## Nested Lists

### UL: Nested Lists
<!-- For Unordered Lists ==> 2 Space Indentation -->
- List 1
  - Nested list 1
  - Nested list 2
- List 2
  1. Nested ol 1
  2. Nested ol 2
- List 3

</br>

### OL: Nested Lists
<!-- For Ordered Lists ==> 3 Space Indentation -->
1. Item 1
   - List 1
   - List 2
2. Item 2
   1. OL 1
   2. OL 2
3. Item 3

</br>

# Links

[click here](https://bhanu1776.github.io/Ecommerce.github.io/ "This is the way to add ToolTip text")  

</br>

# Images

![Bunny Image(Alternate Text!)](https://bhanu1776.github.io/Ecommerce.github.io/Img/Logo.png "Title of the Image(On hover)")

</br>

# Link Image
<!-- First image syntax in [] then link syntax -->
[![Bunny Ecom](https://bhanu1776.github.io/Ecommerce.github.io/Img/k20p.png "Click on the Image!")](https://bhanu1776.github.io/Ecommerce.github.io/)

</br>

# BlockQuotes

> This is blockquote
>
> 1. Item 1
> 2. Item 2
>
>> This is nested BlockQuote
>>
>> - List 1
>> - List 2  
>>
> Ending BlockQuotes

</br>

# Tables
<!-- Simplest way to generate tables in md ==> https://tableconvert.com/markdown-generator-->

| First Name | Last Name |
| :--------- | :-------: |
| Bhanu      |   Sunka   |
| Bunny      |  Tricky   |

</br>

# Escape Sequences

\# Heading not appearing right  
\- List not appearing right

</br>

# Code Blocks
<!-- Language name for syntax highlighting -->

```javascript
    var b = "hello"
    console.log(b);
```

</br>

# Horizontal Line

Add three hyphen(-) to create horizontal line

---

</br>

# Steps to convert Markdown file into html file

1. Install node first in your system
2. Then install markdown-it from your terminal.

   ```javascript
    npm install -g markdown-it
   ```

3. Now, convert markdown file into html

   ```javascript
    markdown-it Filename.md -o NewFileName.html
   ```

</br>

---

[**Markdown Cheatsheet**](https://overapi.com/static/cs/Markdown.pdf "Click to download CheatSheet")

## That's it! kthnxbye 🚀

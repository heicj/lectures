## **Week 1: Basic HTML, CSS, MONKEYS**
# Class 4: HTML Links, MONKEYS Functions, and Intro to CSS Layout

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

### Schedule

- Announcements
- Code Review
- MONKEYS functions
- CSS rules and positioning
- HTML links
- GitHub fork and PR
- Lab Prep: Pair Programming!!
- Go to HAPPY HOUR!

### Announcements
- Thoughts on lab time:
	- Y'all are working so hard! Things I'm noticing: checking your console for errors! walking me through what you've tried so far! taking breaks!
- Quiz 2 is due at 11:59p tonight (Thursday).
	- Keep in mind that the quizzes are open-internet, so do use the resources you choose to figure out the answers: books, internetz, MONKEYS console in your browser, whatever. And remember that the quizzes are preparing you for the 301 entrance exam, which you will take on the last weekend of this class (right before Project Week).

### Learning Objectives
- Declare and invoke functions in JavaScript.
- Understand the component pieces of a function including parameters, arguments, and returns.
- Understand CSS layout principles including block, inline, normal, relative, absolute, float, and fixed.
- Be able to successfully pair program with a fellow student and manage the collaborative and version control aspects of working with Git (from the command line) and GitHub (in the browser).
- Understand the flow of forking and creating a pull request on GitHub.

### Notes
- Code Review
	- Fork and PR process
		1. Fork a GH repo
		2. Clone it
		3. Work on it
		4. A-C-P (add, commit, push)
		5. Make a PR to the original repo
			- The owner of the original repo can then *merge* the PR
			- They would then `git pull` to their local machine 

- JavaScript functions
	- parts of a function
	- declaration v. expression
	- parameter and variable scope
	- "It's hypothetical until it's parenthetical!!!"

- HTML
	- links (aka anchor tags)

- CSS
	- Cascading rules
		- When do conflicting rules apply?
		- Specificity
			- id > class > element
			- https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
		- Source order
			- user agent style sheet (Chrome's default css)
			- user style sheet (if a user has a custom plugin installed, like a scrollbar)
			- author style sheet (the CSS you as a developer write)
			- important rules in author style sheet
			- important rules in user style sheet
	- Positioning
		- document flow
		- position
			- static (default)
			- relative
			- absolute
			- fixed
			- sticky (new/experimental)
		- display
			- block
			- inline
			- flex
				- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- GitHub Fork and Pull Request

- Lab Prep: Pair programming!
	- Here's the basics of what you need to know about *pair programming*. This is a methodology for work in software development that is increasingly more popular and widespread (not only in development work, but also in interview processes), and we place a high value on training our students to pair program effectively. There's more details in the lab assignment.
	- In pair programming there are two developers working on a single body of code on a single computer.
	- One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop.
	- The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
	- The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas.
	- Again, **the Navigator does not touch the keyboard**, nor does the Navigator work on code on their laptop "on the side"... at most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
	- Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.

---

### Readings - optional

- HTML Chapter 4: "Links"
- CSS Chapter 15: "Layout"
- MONKEYS Chapter 3: "Functions, Objects, and Methods" pp.85-99

**HTML Chapter 13: "Boxes" (CSS)**

- p.303: Box width, height, overflow
- p.307: Border, margin, & padding
- p.308: Border width, style, & color
- p.315: Centering content
- p.317: Changing inline/block
- p.318: Visibility
- p.321: Additional border topics (border images, box shadow, border radius)

**HTML Chapter 15: "Layout"**

- p.361: Key concepts in positioning (block/inline)
- p.363-76: Controlling the position of elements (normal, relative, absolute, fixed, floating)
- pp.377-8: Screen sizes and resolutions
- p.379: Page sizes
- p.381-6: Fixed & liquid layouts
- p.387: Layout grids
- p.391: CSS frameworks

##### [learnlayout.com](http://learnlayout.com) - another layout resource

**MONKEYS Chapter 3: "Functions, Objects, and Methods" (pp.85-99)**

- p.88: What is a function?
- p.90: Declaring a function
- p.91: Calling a function
- p.92: Declaring functions that need information (parameters)
- p.93: Calling functions that need information (arguments)
- p.94: Getting a single value out of a function
- p.95: Getting multiple values out of a function
- p.96: Anonymous functions & function expressions
- p.97: IIFEs
- p.98: Variable scope
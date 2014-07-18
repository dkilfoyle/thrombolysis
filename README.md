# Stroke Thrombolysis Training

* Thanks to jekyllrb for the website template.
* Add an issue if you want me to change something.

## Add a case

You can either email the text and images or fork your own repository:

1. Sign up for a github account (free) at github.com
2. Go to github.com/dkilfoyle/thrombolysis and click the "Fork" button (top right)
3. You will now have your own copy of the thrombolysis repository
4. Add files in markdown format in the docs directory - see c1-presentation.md for an example
  * You will need to edit the YAML header (between the '---') to suit your file
5. Use the commit changes button at the bottom to save your file
6. Add the filename of your new file to cases.yml in the _data directory
7. You should now have a customized website at http://yourusername.github.io/thrombolysis

## MCQs

To add a MCQ to markdown source:

```
### Ask the question here
{: .MCQ}

* Option 1
* Answer 1
* Option 2
* Answer 2
* Option ...
* Answer ...
```

Note the '{: .MCQ}'. This adds a class="MCQ" to the h3.
This is picked up by the javascript MCQ builder which will convert the ul into an MCQ.

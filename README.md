# Split-CamelCase-To-Words [![Build Status](https://travis-ci.org/NandishSolanki/ToWords.svg?branch=master)](https://travis-ci.org/NandishSolanki/ToWords)
Convert camelcase string to words

## Install
``` npm install --save split-camelcase-to-words```

## Import
``` var toWords = require('split-camelcase-to-words'); ``` 
<br/> or <br/>
``` import toWords from 'split-camelcase-to-words'; ```

## Use

``` toWords('HelloWorld  HowAreYou') ``` => Hello World How Are You
<br/>
``` toWords('helloWorld  howAreYou') ``` => Hello World How Are You
<br/>
``` toWords('helloWorld') ``` => Hello World

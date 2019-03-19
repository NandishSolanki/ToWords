# To-Words [![Build Status](https://travis-ci.org/NandishSolanki/ToWords.svg?branch=master)](https://travis-ci.org/NandishSolanki/ToWords)
Convert camelcase string to words

## Install
``` npm install --save to-words```

## Import
``` var nr = require('to-words'); ``` 
<br/> or <br/>
``` import toWords from 'to-words'; ```

## Use

``` toWords('HelloWorld  HowAreYou') ``` => Hello World How Are You
<br/>
``` toWords('helloWorld  howAreYou') ``` => Hello World How Are You
<br/>
``` toWords('helloWorld') ``` => Hello World

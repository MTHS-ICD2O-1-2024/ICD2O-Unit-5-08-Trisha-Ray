// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'

// This function keep subtracting until the number you are left with is smaller that the number you are dividing by
function calculate() {

  // input
  let firstNumber = parseFloat(document.getElementById("dividend").value)
  const secondNumber = parseFloat(document.getElementById("divisor").value)
  let number = 0
  const answer = firstNumber

  // process
  while (true) {
    number = number + 1
    firstNumber = firstNumber - secondNumber
    if (firstNumber < secondNumber){
      break
    }
  }
  // output
  document.getElementById("results").innerHTML =
    + answer + ' / ' + secondNumber + ' = ' + number + ' R ' + firstNumber
}
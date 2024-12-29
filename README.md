# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect null handling in a simple addition function. The function `foo` is intended to add two numbers, but it incorrectly returns `null` if either input is `null`.

## Bug Description

The `foo` function should ideally handle `null` values more gracefully.  For instance, it could return 0 when a null value is encountered or it could throw an error indicating that the input was invalid.  Currently, it always return `null` if either or both arguments are `null`.

## Solution

The `bugSolution.js` file provides a corrected version of the function that handles `null` values appropriately by returning 0 if either input is null.
# JavaScript Bug: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: a TypeError thrown when attempting to access the 'length' property of an undefined value.  The bug arises from insufficient null and undefined checks.

## Bug Description:
The provided function `foo` intends to return the length of an array or string. However, it fails to handle the case where the input parameter `a` is undefined.  Attempting to access `a.length` when `a` is undefined results in the error `TypeError: Cannot read properties of undefined (reading 'length')`.

## Solution:
The solution involves explicitly checking for `undefined` (and optionally `null`) before accessing the 'length' property.

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js` in your terminal.  You should see the error message.

## How to fix the bug:
1. Review the corrected code in `bugSolution.js`.
2. Run `node bugSolution.js`. The code should now run without error, returning 0 for undefined inputs.
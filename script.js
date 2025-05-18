document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
           {
  "question": "Reverse an array.",
  "description": "Given an array, reverse the order of its elements in-place.",
  "hint": "Use two pointers, one starting at the beginning and one at the end of the array, and swap the elements they point to, moving inwards until the pointers meet.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Initialize a <code>left</code> pointer to the beginning of the array (index 0) and a <code>right</code> pointer to the end of the array (index <code>array.length - 1</code>).</li>
          <li>While the <code>left</code> pointer is less than the <code>right</code> pointer:
            <ul>
              <li>Swap the elements at the <code>left</code> and <code>right</code> indices.</li>
              <li>Increment the <code>left</code> pointer.</li>
              <li>Decrement the <code>right</code> pointer.</li>
            </ul>
          </li>
          <li>The array is now reversed in-place. You can return the modified array.</li>
        </ol>

        <pre><code class="language-javascript">function reverseArrayInPlace(arr) {
          let left = 0;
          let right = arr.length - 1;
          while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
          }
          return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of elements in the array (we iterate through roughly half of the array).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Check if a string is a palindrome.",
  "description": "Given a string, determine if it reads the same forwards and backward, ignoring case.",
  "hint": "Convert the string to a consistent case (lowercase or uppercase) and then compare it with its reversed version.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Convert the input string to lowercase (or uppercase).</li>
          <li>Create a reversed version of the lowercase string. This can be done by splitting the string into an array of characters, reversing the array, and then joining the characters back into a string.</li>
          <li>Compare the original lowercase string with the reversed lowercase string. If they are identical, the input string is a palindrome.</li>
        </ol>

        <pre><code class="language-javascript">function isPalindrome(str) {
          const lowerCaseStr = str.toLowerCase();
          const reversedStr = lowerCaseStr.split('').reverse().join('');
          return lowerCaseStr === reversedStr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (due to string manipulation operations).</p>
        <p><strong>Space Complexity:</strong> O(n) - in some implementations, creating a reversed string might require extra space proportional to the length of the string.</p>
      `
},
{
  "question": "Count the number of occurrences of each character in a string.",
  "description": "Given a string, count how many times each character appears in it.",
  "hint": "Use a hash map (or an object in JavaScript) to store the frequency of each character as you iterate through the string.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Create an empty hash map (or object) to store character counts.</li>
          <li>Iterate through each character of the input string.</li>
          <li>For each character:
            <ul>
              <li>If the character is already a key in the hash map, increment its corresponding value (count).</li>
              <li>If the character is not yet in the hash map, add it as a new key with a value of 1.</li>
            </ul>
          </li>
          <li>After iterating through the entire string, the hash map will contain each unique character as a key and its frequency as the value. You can then return this map.</li>
        </ol>

        <pre><code class="language-javascript">function countCharacterOccurrences(str) {
          const charCounts = {};
          for (let char of str) {
            charCounts[char] = (charCounts[char] || 0) + 1;
          }
          return charCounts;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (we iterate through it once).</p>
        <p><strong>Space Complexity:</strong> O(k) - where k is the number of unique characters in the string (to store the character counts in the hash map).</p>
      `
},
{
  "question": "Find the factorial of a number.",
  "description": "Given a non-negative integer, calculate its factorial.",
  "hint": "The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of 0 is 1.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Handle the base case: if the input number <code>n</code> is 0, return 1.</li>
          <li>Initialize a variable, say <code>result</code>, to 1.</li>
          <li>Iterate from 1 up to <code>n</code> (inclusive).</li>
          <li>In each iteration, multiply <code>result</code> by the current iteration number.</li>
          <li>After the loop finishes, return the final value of <code>result</code>.</li>
        </ol>

        <pre><code class="language-javascript">function factorial(n) {
          if (n === 0) {
            return 1;
          }
          let result = 1;
          for (let i = 1; i <= n; i++) {
            result *= i;
          }
          return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - the loop runs n times.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Implement Linear Search.",
  "description": "Given an array and a target value, implement the linear search algorithm to find the index of the first occurrence of the target value in the array. If the target is not found, return -1.",
  "hint": "Iterate through each element of the array sequentially and compare it with the target value. If a match is found, return the current index immediately.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Iterate through the input array starting from the first element (index 0).</li>
          <li>In each iteration, compare the current element with the <code>target</code> value.</li>
          <li>If the current element is equal to the <code>target</code>, return the current index.</li>
          <li>If the loop completes without finding the <code>target</code>, it means the target is not present in the array, so return -1.</li>
        </ol>

        <pre><code class="language-javascript">function linearSearch(arr, target) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
              return i;
            }
          }
          return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - in the worst case, we might need to iterate through the entire array.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Generate the Fibonacci sequence up to a given number of terms.",
  "description": "Given a positive integer 'n', generate the first 'n' numbers of the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.",
  "hint": "Maintain an array to store the Fibonacci numbers as you generate them iteratively.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Handle the base cases:
            <ul>
              <li>If <code>n</code> is 0, return an empty array.</li>
              <li>If <code>n</code> is 1, return an array containing only 0.</li>
              <li>If <code>n</code> is 2, return an array containing 0 and 1.</li>
            </ul>
          </li>
          <li>Initialize an array, say <code>fibSequence</code>, with the first two Fibonacci numbers: <code>[0, 1]</code>.</li>
          <li>Iterate from <code>i = 2</code> up to <code>n - 1</code>. In each iteration:
            <ul>
              <li>Calculate the next Fibonacci number by adding the last two elements of the <code>fibSequence</code> array.</li>
              <li>Push this new number into the <code>fibSequence</code> array.</li>
            </ul>
          </li>
          <li>Return the <code>fibSequence</code> array.</li>
        </ol>

        <pre><code class="language-javascript">function fibonacciSequence(n) {
          if (n === 0) return [];
          if (n === 1) return [0];
          const fibSequence = [0, 1];
          for (let i = 2; i < n; i++) {
            const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
          }
          return fibSequence;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - the loop runs n-2 times.</p>
        <p><strong>Space Complexity:</strong> O(n) - to store the Fibonacci sequence in the array.</p>
      `
},
{
  "question": "Remove duplicate elements from a sorted array.",
  "description": "Given a sorted array of integers, remove the duplicate elements in-place such that each unique element appears only once. The relative order of elements should be kept the same.",
  "hint": "Use two pointers, one to track the index of the next unique element and another to iterate through the array.",
  "answer": `
        <p><strong>Sample Solution Approach (Two Pointers):</strong></p>
        <ol>
          <li>If the array is empty, return 0 (the new length).</li>
          <li>Initialize a pointer, say <code>uniqueIndex</code>, to 0. This pointer will track the index of the next unique element.</li>
          <li>Iterate through the array with another pointer, say <code>currentIndex</code>, starting from index 1.</li>
          <li>For each element at <code>currentIndex</code>, compare it with the element at <code>uniqueIndex</code>.</li>
          <li>If the element at <code>currentIndex</code> is different from the element at <code>uniqueIndex</code>, it's a new unique element. In this case:
            <ul>
              <li>Increment <code>uniqueIndex</code>.</li>
              <li>Copy the element at <code>currentIndex</code> to the position <code>uniqueIndex</code>.</li>
            </ul>
          </li>
          <li>After the loop finishes, the elements from index 0 to <code>uniqueIndex</code> will contain the unique elements in their original order. The new length of the array (containing unique elements) is <code>uniqueIndex + 1</code>. You can return this new length (or modify the array in-place up to this index).</li>
        </ol>

        <pre><code class="language-javascript">function removeDuplicatesSortedArray(nums) {
          if (nums.length === 0) {
            return 0;
          }
          let uniqueIndex = 0;
          for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
            if (nums[currentIndex] !== nums[uniqueIndex]) {
              uniqueIndex++;
              nums[uniqueIndex] = nums[currentIndex];
            }
          }
          return uniqueIndex + 1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the array (we iterate through the array once).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used (we are modifying the array in-place).</p>
      `
},
{
  "question": "Implement Bubble Sort.",
  "description": "Implement the Bubble Sort algorithm to sort an array of numbers in ascending order.",
  "hint": "Repeatedly iterate through the array, compare adjacent elements, and swap them if they are in the wrong order. Larger elements 'bubble' to the end of the array with each pass.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Iterate through the array <code>n-1</code> times, where <code>n</code> is the length of the array.</li>
          <li>In each pass (from the beginning up to the unsorted part of the array), compare adjacent elements.</li>
          <li>If two adjacent elements are in the wrong order (the left element is greater than the right element for ascending order), swap them.</li>
          <li>After each pass, the largest unsorted element is in its correct sorted position at the end of the unsorted part.</li>
          <li>Continue until the entire array is sorted (no more swaps are needed in a pass).</li>
        </ol>

        <pre><code class="language-javascript">function bubbleSort(arr) {
          const n = arr.length;
          for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              }
            }
          }
          return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2) - in the worst and average case.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for swapping.</p>
      `
},
{
  "question": "Reverse a string.",
  "description": "Given a string, return a new string with the characters in reverse order.",
  "hint": "Consider iterating through the string from the end to the beginning and building the reversed string, or using built-in string manipulation methods.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize an empty string, say <code>reversedStr</code>.</li>
          <li>Iterate through the input string from the last character to the first character (using a loop with an index starting at <code>str.length - 1</code> and decrementing to 0).</li>
          <li>In each iteration, append the current character to the <code>reversedStr</code>.</li>
          <li>After the loop finishes, return the <code>reversedStr</code>.</li>
        </ol>

        <pre><code class="language-javascript">function reverseString(str) {
          let reversedStr = "";
          for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
          }
          return reversedStr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (we iterate through it once).</p>
        <p><strong>Space Complexity:</strong> O(n) - to store the reversed string.</p>
      `
},
{
  "question": "Check if two strings are anagrams.",
  "description": "Given two strings, determine if they are anagrams of each other. Anagrams are strings that contain the same characters with the same frequencies, but in a different order. Case sensitivity should be ignored.",
  "hint": "One common approach is to count the frequency of each character in both strings after converting them to the same case. If the frequency counts for all characters are identical, they are anagrams.",
  "answer": `
        <p><strong>Sample Solution Approach (Character Counting):</strong></p>
        <ol>
          <li>Convert both input strings to lowercase (or uppercase).</li>
          <li>If the lengths of the two strings are different, they cannot be anagrams, so return <code>false</code>.</li>
          <li>Create a frequency map (e.g., an object or a Map) to store the count of each character in the first string.</li>
          <li>Iterate through the first string, and for each character, increment its count in the frequency map.</li>
          <li>Iterate through the second string. For each character:
            <ul>
              <li>If the character is not found in the frequency map or its count is zero, the strings are not anagrams, so return <code>false</code>.</li>
              <li>Otherwise, decrement the count of the character in the frequency map.</li>
            </ul>
          </li>
          <li>After iterating through the second string, if all character counts in the frequency map are zero, the strings are anagrams, so return <code>true</code>.</li>
        </ol>

        <pre><code class="language-javascript">function areAnagrams(str1, str2) {
          const s1 = str1.toLowerCase();
          const s2 = str2.toLowerCase();

          if (s1.length !== s2.length) {
            return false;
          }

          const charCounts = {};
          for (let char of s1) {
            charCounts[char] = (charCounts[char] || 0) + 1;
          }

          for (let char of s2) {
            if (!charCounts[char]) {
              return false;
            }
            charCounts[char]--;
          }

          for (let char in charCounts) {
            if (charCounts[char] !== 0) {
              return false;
            }
          }

          return true;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the strings (assuming a constant alphabet size).</p>
        <p><strong>Space Complexity:</strong> O(k) - where k is the number of unique characters in the strings (for the frequency map).</p>
      `
},
{
  "question": "Implement Binary Search.",
  "description": "Given a sorted array and a target value, implement the binary search algorithm to find the index of the target value in the array. If the target is not found, return -1.",
  "hint": "Binary search works on sorted arrays. It repeatedly divides the search interval in half. If the middle element is the target, return its index. If the target is less than the middle element, search the left half; otherwise, search the right half.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize two pointers, <code>left</code> to 0 and <code>right</code> to the last index of the array.</li>
          <li>While <code>left</code> is less than or equal to <code>right</code>:
            <ul>
              <li>Calculate the middle index: <code>mid = Math.floor((left + right) / 2)</code>.</li>
              <li>If the element at <code>mid</code> is equal to the <code>target</code>, return <code>mid</code>.</li>
              <li>If the element at <code>mid</code> is less than the <code>target</code>, update <code>left = mid + 1</code>.</li>
              <li>If the element at <code>mid</code> is greater than the <code>target</code>, update <code>right = mid - 1</code>.</li>
            </ul>
          </li>
          <li>If the loop finishes without finding the target, return -1.</li>
        </ol>

        <pre><code class="language-javascript">function binarySearch(arr, target) {
          let left = 0;
          let right = arr.length - 1;
          while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
              return mid;
            } else if (arr[mid] < target) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
          return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - the search interval is halved in each step.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Find the Greatest Common Divisor (GCD) of two numbers.",
  "description": "Given two integers, find their Greatest Common Divisor (GCD). The GCD is the largest positive integer that divides each of the integers without leaving a remainder.",
  "hint": "The Euclidean algorithm is an efficient method for computing the GCD. It involves repeatedly applying the modulo operation.",
  "answer": `
        <p><strong>Sample Solution Approach (Euclidean Algorithm):</strong></p>
        <ol>
          <li>If the second number (<code>b</code>) is 0, the GCD is the first number (<code>a</code>).</li>
          <li>Otherwise, the GCD of <code>a</code> and <code>b</code> is the same as the GCD of <code>b</code> and the remainder of <code>a</code> divided by <code>b</code> (<code>a % b</code>).</li>
          <li>Recursively (or iteratively) apply this process until the second number becomes 0. The last non-zero remainder (which will be the value of <code>a</code> at that point) is the GCD.</li>
        </ol>

        <pre><code class="language-javascript">function findGCD(a, b) {
          while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
          }
          return a;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log(min(a, b))) - based on the number of steps in the Euclidean algorithm.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Implement a Stack using an array.",
  "description": "Implement the basic operations of a Stack data structure (push, pop, peek, isEmpty) using an array as the underlying storage. A stack follows the Last-In, First-Out (LIFO) principle.",
  "hint": "Utilize the properties of an array to efficiently add and remove elements from one end, which will represent the top of the stack.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Initialize an empty array to represent the stack.</li>
          <li><strong>push(element):</strong> Add the given <code>element</code> to the end of the array.</li>
          <li><strong>pop():</strong> Remove and return the last element of the array. If the stack is empty, return an appropriate value (e.g., <code>undefined</code>).</li>
          <li><strong>peek():</strong> Return the last element of the array without removing it. If the stack is empty, return an appropriate value (e.g., <code>undefined</code>).</li>
          <li><strong>isEmpty():</strong> Return <code>true</code> if the array is empty, and <code>false</code> otherwise.</li>
        </ol>

        <pre><code class="language-javascript">class Stack {
          constructor() {
            this.items = [];
          }

          push(element) {
            this.items.push(element);
          }

          pop() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items.pop();
          }

          peek() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items[this.items.length - 1];
          }

          isEmpty() {
            return this.items.length === 0;
          }
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) for all operations (push, pop, peek, isEmpty) on average, as array operations at the end are typically constant time.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements in the stack.</p>
      `
},
{
  "question": "Implement a Queue using an array.",
  "description": "Implement the basic operations of a Queue data structure (enqueue, dequeue, peek, isEmpty) using an array as the underlying storage. A queue follows the First-In, First-Out (FIFO) principle.",
  "hint": "Consider how to efficiently manage the front and rear of the queue using an array. You might need to handle the shifting of elements or use pointers to keep track of the front and rear.",
  "answer": `
        <p><strong>Sample Solution Approach (Using Array with Pointers):</strong></p>
        <ol>
          <li>Initialize an array to store the queue elements, and two pointers: <code>front</code> (initially 0) and <code>rear</code> (initially -1).</li>
          <li><strong>enqueue(element):</strong> Increment the <code>rear</code> pointer and add the <code>element</code> at the <code>rear</code> index.</li>
          <li><strong>dequeue():</strong> If the queue is not empty (<code>front <= rear</code>), return the element at the <code>front</code> index and increment the <code>front</code> pointer.</li>
          <li><strong>peek():</strong> If the queue is not empty, return the element at the <code>front</code> index without removing it.</li>
          <li><strong>isEmpty():</strong> Return <code>true</code> if <code>front</code> is greater than <code>rear</code>, and <code>false</code> otherwise.</li>
        </ol>

        <pre><code class="language-javascript">class Queue {
          constructor() {
            this.items = [];
            this.front = 0;
            this.rear = -1;
          }

          enqueue(element) {
            this.rear++;
            this.items[this.rear] = element;
          }

          dequeue() {
            if (this.isEmpty()) {
              return undefined;
            }
            const item = this.items[this.front];
            this.front++;
            return item;
          }

          peek() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items[this.front];
          }

          isEmpty() {
            return this.front > this.rear;
          }
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) for all operations (enqueue, dequeue, peek, isEmpty) on average.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements in the queue.</p>
      `
},
{
  "question": "Reverse a linked list.",
  "description": "Given the head of a singly linked list, reverse the order of all the nodes in the list.",
  "hint": "Iterate through the linked list, changing the direction of the 'next' pointers of each node so that they point to the previous node.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize three pointers: <code>prev</code> (initially <code>null</code>), <code>current</code> (initially <code>head</code>), and <code>next</code> (initially <code>null</code>).</li>
          <li>While <code>current</code> is not <code>null</code>:
            <ul>
              <li>Store the next node of the <code>current</code> node in the <code>next</code> pointer: <code>next = current.next</code>.</li>
              <li>Reverse the <code>next</code> pointer of the <code>current</code> node to point to the <code>prev</code> node: <code>current.next = prev</code>.</li>
              <li>Move the <code>prev</code> pointer to the <code>current</code> node: <code>prev = current</code>.</li>
              <li>Move the <code>current</code> pointer to the <code>next</code> node we stored earlier: <code>current = next</code>.</li>
            </ul>
          </li>
          <li>After the loop finishes, the <code>prev</code> pointer will be pointing to the new head of the reversed linked list. Return <code>prev</code>.</li>
        </ol>

        <pre><code class="language-javascript">function reverseLinkedList(head) {
          let prev = null;
          let current = head;
          let next = null;
          while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
          }
          return prev;
        }

        // Definition of a ListNode (assuming it's available)
        // function ListNode(val) {
        //     this.val = val;
        //     this.next = null;
        // }
        </code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the linked list (we traverse it once).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Find the middle element of a linked list.",
  "description": "Given the head of a singly linked list, find and return the middle node. If the list has an even number of nodes, returning either of the two middle nodes is acceptable (though often the second one is preferred).",
  "hint": "Use the 'fast and slow pointer' approach. One pointer moves one step at a time, while the other moves two steps at a time. When the fast pointer reaches the end, the slow pointer will be at the middle.",
  "answer": `
        <p><strong>Sample Solution Approach (Fast and Slow Pointers):</strong></p>
        <ol>
          <li>Initialize two pointers, <code>slow</code> and <code>fast</code>, both starting at the <code>head</code> of the linked list.</li>
          <li>While the <code>fast</code> pointer is not <code>null</code> and <code>fast.next</code> is not <code>null</code>:
            <ul>
              <li>Move the <code>slow</code> pointer one step forward: <code>slow = slow.next</code>.</li>
              <li>Move the <code>fast</code> pointer two steps forward: <code>fast = fast.next.next</code>.</li>
            </ul>
          </li>
          <li>When the loop terminates, the <code>slow</code> pointer will be pointing to the middle node (or the second middle node in case of an even length list). Return <code>slow</code>.</li>
        </ol>

        <pre><code class="language-javascript">function findMiddleLinkedList(head) {
          let slow = head;
          let fast = head;
          while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
          }
          return slow;
        }

        // Definition of a ListNode (assuming it's available)
        // function ListNode(val) {
        //     this.val = val;
        //     this.next = null;
        // }
        </code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the linked list (the slow pointer traverses at most half the list).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Tell me about yourself.",
  "description": "This is a common opening question where the interviewer wants to understand your background, relevant experiences, and what makes you a suitable candidate.",
  "hint": "Focus on your academic background, any relevant projects or internships, key skills that align with the job description, and your career aspirations (briefly). Keep it concise and engaging.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Brief Background:</strong> Start with a concise overview of your academic qualifications and any relevant certifications.</li>
          <li><strong>Relevant Experience:</strong> Highlight any projects, internships, or previous roles that are directly related to the position you're applying for. Briefly mention your key responsibilities and achievements. Use the STAR method (Situation, Task, Action, Result) concisely if possible.</li>
          <li><strong>Key Skills:</strong> Emphasize 2-3 key skills that are most relevant to the job description and provide brief examples of how you've demonstrated these skills.</li>
          <li><strong>Career Goals (Briefly):</strong> Briefly mention your interest in this specific role and your general career aspirations, showing alignment with the company and the opportunity.</li>
          <li><strong>Enthusiasm:</strong> End with a statement expressing your enthusiasm for the opportunity and your eagerness to learn and contribute.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Relevance to the role, Key skills, Achievements, Career aspirations, Enthusiasm.</p>
      `
},
{
  "question": "Why are you interested in working for our company?",
  "description": "This question assesses your knowledge about the company and your genuine interest in the organization and its mission.",
  "hint": "Research the company thoroughly beforehand. Mention specific aspects that attract you, such as their work culture, values, recent projects, industry reputation, or opportunities for growth that align with your career goals.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Specific Aspects of the Company:</strong> Mention 2-3 specific reasons why this company stands out to you. This could include:
            <ul>
              <li>Their reputation and standing in the industry.</li>
              <li>Specific projects or technologies they are involved in.</li>
              <li>Their company culture and values (if known).</li>
              <li>Opportunities for innovation and learning.</li>
              <li>Their commitment to employee growth and development.</li>
            </ul>
          </li>
          <li><strong>Alignment with Your Values and Goals:</strong> Explain how the company's mission, values, or work aligns with your own professional values and career aspirations.</li>
          <li><strong>Enthusiasm to Contribute:</strong> Express your eagerness to contribute your skills and learn from the experienced professionals within the company.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Research about the company, Genuine interest, Alignment of values, Specific reasons for choosing the company, Enthusiasm to contribute.</p>
      `
},
{
  "question": "What are your strengths?",
  "description": "This question allows you to showcase the positive qualities and skills that you bring to the table and that make you a strong candidate.",
  "hint": "Choose 2-3 strengths that are most relevant to the job description and provide specific examples from your past experiences to illustrate each strength.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Relevance and Examples):</strong></p>
        <ol>
          <li><strong>Identify Key Strengths:</strong> Select 2-3 strengths that directly relate to the requirements of the role. Examples include:
            <ul>
              <li>Strong problem-solving skills (with an example).</li>
              <li>Excellent communication and interpersonal skills (with an example).</li>
              <li>Ability to work effectively in a team (with an example).</li>
              <li>Adaptability and willingness to learn (with an example).</li>
              <li>Strong work ethic and dedication (with an example).</li>
            </ul>
          </li>
          <li><strong>Provide Specific Examples:</strong> For each strength you mention, briefly describe a situation where you demonstrated that strength and the positive outcome. Use the STAR method concisely.</li>
          <li><strong>Relevance to the Role:</strong> Briefly explain how these strengths would be beneficial in the context of the specific role you are applying for.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Relevance to the job, Concrete examples, Positive framing, Self-awareness of your capabilities.</p>
      `
},
{
  "question": "Why should we hire you?",
  "description": "This is your opportunity to make a compelling case for why you are the best candidate for the role. Summarize your key qualifications and how they align with the company's needs.",
  "hint": "Focus on the match between your skills, experience, and the requirements of the job description. Highlight your unique selling points and your enthusiasm for the opportunity.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Alignment and Value Proposition):</strong></p>
        <ol>
          <li><strong>Summary of Key Skills and Experience:</strong> Briefly reiterate 2-3 of your most relevant skills and experiences that directly match the job requirements. Provide concise examples if possible.</li>
          <li><strong>Alignment with Company Needs:</strong> Explicitly state how your skills and experience can help the company achieve its goals or address the challenges outlined in the job description.</li>
          <li><strong>Unique Selling Points:</strong> Highlight what makes you stand out from other candidates. This could be a specific accomplishment, a unique skill set, or a particular approach to work.</li>
          <li><strong>Enthusiasm and Fit:</strong> Reiterate your genuine interest in the role and the company, and briefly mention how your work style and values align with the company culture (if known).</li>
          <li><strong>Commitment to Contribution:</strong> Express your eagerness to learn, contribute meaningfully, and become a valuable asset to the team.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Direct match with job requirements, Unique qualifications, Value proposition for the company, Enthusiasm and cultural fit, Commitment to contributing.</p>
      `
},
{
  "question": "Do you have any questions for us?",
  "description": "This is your chance to show your engagement and genuine interest in the company and the role. Always have a few thoughtful questions prepared.",
  "hint": "Prepare 2-3 questions that demonstrate your interest in the team, the role itself, the company culture, opportunities for growth, or the next steps in the hiring process. Avoid asking about salary or benefits at this stage.",
  "answer": `
        <p><strong>Sample Questions to Ask (Show Interest and Engagement):</strong></p>
        <ul>
          <li><strong>About the Role:</strong>
            <ul>
              <li>Could you describe a typical day or week in this role?</li>
              <li>What are the biggest challenges someone in this role might face?</li>
              <li>What are the key performance indicators (KPIs) for this role?</li>
              <li>Are there opportunities to work with different teams or technologies?</li>
            </ul>
          </li>
          <li><strong>About the Team and Culture:</strong>
            <ul>
              <li>Could you tell me more about the team I would be working with?</li>
              <li>What do you enjoy most about working here?</li>
              <li>How would you describe the work culture?</li>
              <li>Are there opportunities for mentorship or team-building activities?</li>
            </ul>
          </li>
          <li><strong>About Growth and Development:</strong>
            <ul>
              <li>What are the opportunities for professional development and training within the company?</li>
              <li>What are some potential career paths for someone in this role?</li>
            </ul>
          </li>
          <li><strong>About the Next Steps:</strong>
            <ul>
              <li>What are the next steps in the interview process?</li>
              <li>What is the expected timeline for a decision?</li>
            </ul>
          </li>
        </ul>

        <p><strong>Key Aspects to Highlight:</strong> Genuine interest, Thoughtful questions, Preparedness, Professionalism, Engagement.</p>
      `
}

    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});
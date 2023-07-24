export function taskFirst() {
	  const task = 'I prefer const when I can.'; // Using 'const' to declare the variable
	  return task;
}

export function getLast() {
	  return ' is okay';
}

export function taskNext() {
	  let combination = 'But sometimes let'; // Using 'let' to declare the variable
	  combination += getLast();
	  return combination;
}


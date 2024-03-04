export const getUniqueChars = (word: string) => {
    console.log(word);
    
	// remove whitespace
	const trimmed = word.toLowerCase().replace(" ", "");
	
	// split into arr
	const split = trimmed.split('');
	
	// create a set
	const newSet = new Set(split)
	
	// retur arr
	const arr = Array.from(newSet.values())

	return arr
}
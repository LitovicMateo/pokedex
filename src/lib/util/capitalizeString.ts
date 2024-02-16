export const capitalizeString = (s: string) => {
    const firstLetter = s.charAt(0).toUpperCase()
    const leftover = s.slice(1)
    return firstLetter + leftover   
}
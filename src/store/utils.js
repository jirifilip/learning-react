export default function makeDate(year, month, day) {
    return new Date(year, month - 1, day)
}

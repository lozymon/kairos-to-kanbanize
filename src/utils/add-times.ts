/** Add array of time strings in H:mm format
 * @param {Array<string>} timeArray - Array of H:mm
 * @returns {string} - sum of times in H:mm format
 **/
export function addTimes(timeArray: string[][]): string {
    const mins = timeArray.reduce((acc, time) => {
        const [h, m] = time;
        acc += parseInt(h) * 60 + parseInt(m) * 1;
        return acc;
    }, 0);

    return ((mins / 60) | 0) + ':' + ('0' + (mins % 60)).slice(-2);
}

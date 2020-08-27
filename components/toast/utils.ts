let seed = 0;
const now = Date.now();
export function getUuid() {
    const id = seed;
    seed += 1;
    return `toast_${now}_${id}`;
}

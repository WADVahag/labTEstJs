// Сериализация массива чисел
function serializeArray(arr) {
    arr = Array.from(new Set(arr)); // Убираем дубликаты
    arr.sort((a, b) => a - b);      // Сортируем массив
    let result = [];
    let start = arr[0], end = arr[0];
    
    for (let i = 1; i <= arr.length; i++) {
        if (i < arr.length && arr[i] === end + 1) {
            end = arr[i]; // Расширяем диапазон
        } else {
            // Сохраняем диапазон
            result.push(start === end ? `${start}` : `${start}-${end}`);
            if (i < arr.length) start = end = arr[i];
        }
    }
    return result.join(",");
}

// Десериализация строки в массив
function deserializeString(str) {
    let result = [];
    let parts = str.split(",");
    
    for (let part of parts) {
        if (part.includes("-")) {
            let [start, end] = part.split("-").map(Number);
            for (let i = start; i <= end; i++) result.push(i);
        } else {
            result.push(Number(part));
        }
    }
    return result;
}

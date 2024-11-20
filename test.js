function testSerialization() {
    const tests = [
        { input: [1, 2, 3, 5, 6, 7, 10], description: "Short array with ranges" },
        { input: Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1), description: "Random array of 50 numbers" },
        { input: Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1), description: "Random array of 100 numbers" },
        { input: Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1), description: "Random array of 500 numbers" },
        { input: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1), description: "Random array of 1000 numbers" },
        { input: [1, 2, 3, 10, 11, 12], description: "Two ranges" },
        { input: [1, 10, 20, 300], description: "No ranges" },
        { input: Array.from({ length: 300 }, (_, i) => i + 1), description: "Full range 1-300" },
        { input: Array(300).fill(1), description: "All numbers are 1" },
        { input: Array(900).fill().map((_, i) => (i % 3) + 1), description: "Repeated pattern of 1-3" }
    ];

    tests.forEach(({ input, description }) => {
        const serialized = serializeArray(input);
        const deserialized = deserializeString(serialized);
        const compressionRate = (1 - serialized.length / (input.join(",").length)) * 100;
        
        console.log(`Test: ${description}`);
        console.log(`Input: ${input.join(",")}`);
        console.log(`Serialized: ${serialized}`);
        console.log(`Deserialized matches input: ${JSON.stringify(input.sort((a, b) => a - b)) === JSON.stringify(deserialized.sort((a, b) => a - b))}`);
        console.log(`Compression rate: ${compressionRate.toFixed(2)}%\n`);
    });
}

// Запуск тестов
testSerialization();

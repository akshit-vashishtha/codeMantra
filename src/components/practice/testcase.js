const TEST_CASES = [
    {
      n: 4,
      vector: [2, 7, 11, 15],
      target: 9,
      solution: [[0, 1]], // 2 + 7 = 9
    },
    {
      n: 4,
      vector: [1, 2, 3, 4],
      target: 5,
      solution: [
        [0, 3], // 1 + 4 = 5
        [1, 2], // 2 + 3 = 5
      ],
    },
    {
      n: 5,
      vector: [3, 2, 4, 7, 1],
      target: 6,
      solution: [[1, 2]], // 2 + 4 = 6
    },
    {
      n: 5,
      vector: [5, 12, 10, 9, 1],
      target: 13,
      solution: [[1, 4]], // 12 + 1 = 13
    },
    {
      n: 3,
      vector: [10, 20, 30],
      target: 40,
      solution: [[0, 2]], // 20 + 30 = 40
    },
  ];
  export default TEST_CASES;
type Operation = 'reverse' | 'capitalize' | 'repeat' | 'countVowels';

const reverseWord = (word: string): string => word.split('').reverse().join('');

const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord = (word: string, times: number): string => word.repeat(times);

const countVowels = (word: string): number =>
  (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord = (operation: Operation, word: string, param?: number): string | number => {
  switch (operation) {
    case 'reverse':
      return reverseWord(word);
    case 'capitalize':
      return capitalizeWord(word);
    case 'repeat':
      if (param !== undefined && param > 0) {
        return repeatWord(word, param);
      }
      throw new Error("Invalid parameter for 'repeat' operation");
    case 'countVowels':
      return countVowels(word);
    default:
      throw new Error('Invalid operation');
  }
};

const runTransformation = (): void => {
  const wordInput = document.getElementById('word') as HTMLInputElement;
  const operationInput = document.getElementById('operation') as HTMLSelectElement;
  const paramInput = document.getElementById('param') as HTMLInputElement;
  const resultContainer = document.getElementById('result') as HTMLDivElement;

  const word = wordInput.value;
  const operation = operationInput.value as Operation;
  const param = operation === 'repeat' ? parseInt(paramInput.value, 10) : undefined;

  try {
    const result = transformWord(operation, word, param);
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.add('active');
  } catch (error) {
    resultContainer.textContent = `Error: ${(error as Error).message}`;
    resultContainer.classList.add('active');
  }
};

// Show/hide param input based on selected operation
document.getElementById('operation')?.addEventListener('change', function () {
  const paramContainer = document.getElementById('paramContainer') as HTMLDivElement;
  paramContainer.classList.toggle('active', (this as HTMLSelectElement).value === 'repeat');
});

// Event listener for transform button
document.getElementById('transformButton')?.addEventListener('click', runTransformation);


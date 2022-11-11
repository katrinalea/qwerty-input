import { hasAVowel } from "../utils/hasAVowel";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const hasSpecialCharacter = wordToDescribe.match(/['*', '$', '!']/g);
  const strong =
    wordToDescribe.length > 7 &&
    wordToDescribe.match(/['*', '$', '!']/g) &&
    wordToDescribe.match(/[QWERTYUIOP]/g) &&
    wordToDescribe.match(/[k]/g);

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialCharacter && <li>Contains special characters !, * or $</li>}
      {strong && <li>Impressively strong input</li>}
    </ul>
  );
}

export default WordDescription;

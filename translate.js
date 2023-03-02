// Import the Translator class from googletrans package
const { Translator } = require('google-translat-async');

// Create an instance of the Translator class
const translator = new Translator();

// Define a sentence to be translated
const sentenceToTranslate = "Hello, how are you?";

// Call the translate() method of the Translator class to translate the sentence to Arabic
translator.translate(sentenceToTranslate, { to: 'ar' }).then((translated) => {
  console.log(`Translated sentence: ${translated.text}`);
}).catch((error) => {
  console.error(error);
});

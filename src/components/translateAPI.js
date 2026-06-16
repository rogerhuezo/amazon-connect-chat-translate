import { Predictions } from '@aws-amplify/predictions';

async function ProcessChatTextAPI(content, sourceLang, targetLang) {
    console.log("ProcessChatTextAPI (Predictions): ", content, sourceLang, targetLang);
    try {
        const result = await Predictions.convert({
            translateText: {
                source: {
                    text: content,
                    language: sourceLang,
                },
                targetLanguage: targetLang
            }
        });
        console.log("Translated Message: ", result);
        return { TranslatedText: result.text };
    } catch (error) {
        console.error("ProcessChatTextAPI error: ", error);
        return { TranslatedText: content };
    }
}

export default ProcessChatTextAPI;

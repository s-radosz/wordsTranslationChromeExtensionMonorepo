type Translation = {
    title: string;
    translation: string;
}

const useReturnTranslation = (translations: Translation[], title: string) => {
    const translation = translations?.length && translations.find(translation => translation.title === title);

    if (!translation) {
        return title;
    }
    return translation?.translation
}

export default useReturnTranslation;
export function HighlightText(text: string, searchLine: string) {
    const words = text.split(new RegExp(`(${searchLine})`, 'gi'));
    return (
        <span>
            {words.map((word, i) => (
                <span key={i} style={word.toLowerCase() === searchLine.toLowerCase() ? { fontWeight: 'bold', color: 'black' } : {}}>
                    {word}
                </span>
            ))}
        </span>
    );
}
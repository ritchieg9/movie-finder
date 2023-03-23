import { HighlightText } from "./HighlightText";

export interface ResultsListProps<T = {
    imdbID: string;
    id: string;
    Title: string;
    Poster: string;
}> {
    results: T[];
    searchLine: string
};

export function ResultsList({ results, searchLine }: ResultsListProps) {
    return (
        <> {results?.map((result) => (
            <div
                key={result.id}
                className={"results"}
            >
                {HighlightText(result.Title, searchLine)}
                <img
                    alt={`${result.imdbID}`}
                    src={`${result.Poster}`}
                    style={{ width: "100%" }}
                />
            </div>
        ))}</>
    )
}
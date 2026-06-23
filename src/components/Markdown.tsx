import ReactMarkdown from 'react-markdown';

export type Props = {
    content: string;
};

export default function Markdown({ content }: Props) {
    return (
        <ReactMarkdown
            components={{
                p: ({ children }) => <>{children}</>,
                a: ({ href, children }) => (
                    <a href={href} className="underline" target="_blank" rel="noreferrer">
                        {children}
                    </a>
                )
            }}
        >
            {content}
        </ReactMarkdown>
    );
}

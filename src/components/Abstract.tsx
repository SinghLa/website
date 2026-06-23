import { useState } from 'react';
import Markdown from "react-markdown"

export type Props = {
    abstract: string;
};

export default function Abstract({ abstract }: Props) {
    const [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <>
                <div className="mt-2 text-sm leading-normal text-justify line-clamp-3 prose prose-dante max-w-none">
                  <Markdown>{abstract}</Markdown>
                </div>
                <button className="underline text-sm leading-normal mt-4 italic" onClick={() => setExpanded(true)}>
                    Expand
                </button>
            </>
        );
    }

    return (
        <>
            <div className="mt-2 text-sm leading-normal text-justify prose prose-dante max-w-none">
              <Markdown>{abstract}</Markdown>
            </div>
            <button className="underline text-sm leading-normal mt-4 italic" onClick={() => setExpanded(false)}>
                Collapse
            </button>
        </>
    );
}

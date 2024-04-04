import { useState } from 'react';

export type Props = {
    abstract: string;
};

export default function Abstract({ abstract }: Props) {
    const [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <>
                <div className="mt-2 text-sm leading-normal text-justify line-clamp-3">
                    <p>{abstract}</p>
                </div>
                <button className="underline text-sm leading-normal" onClick={() => setExpanded(true)}>
                    Expand
                </button>
            </>
        );
    }

    return (
        <>
            <div className="mt-2 text-sm leading-normal text-justify">
                <p>{abstract}</p>
            </div>
            <button className="underline text-sm leading-normal" onClick={() => setExpanded(false)}>
                Collapse
            </button>
        </>
    );
}

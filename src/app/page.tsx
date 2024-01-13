'use client';

import Button from '@/components/ui/Button';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    const value = count;

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        }
    }, [count]);

    return (
        <main className="mt-6 flex h-screen flex-col items-center gap-[20px]">
            <h1 className="text-3xl">Home</h1>
            <Button
                className={clsx({
                    'bg-emerald-700 hover:bg-emerald-800': value >= 25,
                    'bg-red-700 hover:bg-red-800': value < 10,
                    'bg-yellow-600 hover:bg-yellow-700': value >= 10 && value < 25
                })}
                type="button"
            >
                Sémaforo
            </Button>

            <div className="flex flex-row gap-3">
                <Button className="rounded-lg bg-slate-400 px-4 py-2" onClick={() => setCount(count + 1)}>
                    +
                </Button>
                <Button className="rounded-lg bg-slate-400 px-4 py-2" onClick={() => setCount(count - 1)}>
                    -
                </Button>
            </div>
            <p>La cuenta es: {count}</p>
        </main>
    );
}

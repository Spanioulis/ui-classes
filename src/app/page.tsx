'use client';

import Button from '@/components/ui/Button';
import clsx from 'clsx';

export default function Home() {
    const value = 48;
    const click = () => {
        alert('Hola');
    };

    return (
        <main className="h-screen flex mt-6 items-center flex-col gap-[20px]">
            <h1 className="text-3xl">Home</h1>

            <Button
                className={clsx({
                    'bg-emerald-700 hover:bg-emerald-800': value > 100,
                    'bg-red-700 hover:bg-red-800': value < 50,
                    'bg-yellow-600 hover:bg-yellow-700': value >= 50 && value < 100
                })}
                onClick={click}
                type="button"
            >
                Click me
            </Button>
        </main>
    );
}

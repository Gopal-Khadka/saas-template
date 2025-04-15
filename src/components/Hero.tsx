import Image from 'next/image'
import { AiFillOpenAI } from "react-icons/ai";

import { FaXTwitter } from "react-icons/fa6";
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FaGoogle, FaFacebook, FaFigma, FaStripe, FaPlay } from 'react-icons/fa';


const companies = [
    [
        { name: 'Open AI', logo: AiFillOpenAI  },
        { name: 'Google', logo: FaGoogle  },
        { name: 'Meta', logo: FaFacebook  },
    ],
    [
        { name: 'Figma', logo: FaFigma },
        { name: 'Twitter', logo: FaXTwitter },
        { name: 'Stripe', logo: FaStripe },
    ],
]


export function Hero() {
    return (
        <Container className="pt-20 pb-16 text-center lg:pt-32">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Research{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                    <span className="relative">made simple</span>
                </span>{' '}
                for all businesses.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Most research software is accurate, but hard to use. We make the
                opposite trade-off, and hope you don’t get audited.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
                <Button href="/register">Get 6 months free</Button>
                <Button
                    href="#"
                    variant="outline"
                >
                   <FaPlay className='h-3 w-3 flex-none fill-blue-600 group-active:fill-current'/>
                    <span className="ml-3">Watch video</span>
                </Button>
            </div>
            <div className="mt-12">
                <p className="font-display text-base text-slate-900">
                    Trusted by these {companies.flat().length} companies so far
                </p>
                <ul
                    role="list"
                    className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
                >
                    {companies.map((group, groupIndex) => (
                        <li key={groupIndex}>
                            <ul
                                role="list"
                                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                            >
                                {group.map((company) => (
                                    <li key={company.name} className="flex">
                                        <company.logo className='h-10 w-10' />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

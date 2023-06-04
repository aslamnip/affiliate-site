/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { fetchUrl } from '../config';
import Styles from './OurWork.module.css'
import Image from 'next/image';
import Link from 'next/link';


async function OurWorks() {
    const res = await fetch(`${fetchUrl}api/blog/get/`, { cache: 'no-store' })
    const data = await res.json()
    return data
}

export default async function Page() {
    const OurWorksData = await OurWorks()

    return (
        <div>
            <div>
                <div className={Styles.Main}>

                    <h1>Welcome to new experience.</h1>
                    <div>
                        <h2>Hope you will get some better solution here.</h2>
                    </div>
                    <div>
                        <div className={Styles.seceondMain}>
                            {OurWorksData.map(data => <div key={data.id}>
                                <div className={Styles.image} >
                                    {/* <MyImage /> */}
                                    <img
                                        src={data.tumb_image}
                                        alt="Picture of the author"
                                        width={300}
                                        height={500}
                                    />
                                    <div className={Styles.layer} />
                                    <div className={Styles.text}>
                                        <h4>{data.title}</h4>
                                    </div>
                                </div>

                                <p><Link href={`/blog/${data.id.toString()}`}>{data.title.slice(0, 40)} {data.title.length > 39 ? '...' : null}</Link> </p>
                            </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


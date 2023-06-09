import React, { use } from 'react';
import { fetchUrl } from '@/app/config';
import Form from '@/app/api/apis/Form/Form';


async function SIngleWorks(id) {
    // const res = await fetch(`${fetchUrl}api/blog/get/${id}`, { caches: 'no-store' })
    const res = await fetch(`${fetchUrl}api/blog/get/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}
export default async function Page({ params }) {
    const { id } = params
    const singleContennt = await SIngleWorks(id)


    return (
        <div>
            <div className='contentDetails'>
                <h1 className='TitleText'> {singleContennt.title}</h1>
                <div className='bodyText' dangerouslySetInnerHTML={{ __html: singleContennt.body }} />
                <div> { singleContennt.video ?
                    <div className="video-container">
                    <iframe src={`https://www.youtube.com/embed/${singleContennt.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div> : null }
                </div>
                <Form singleContennt={singleContennt} />
            </div>

        </div>
    );
};


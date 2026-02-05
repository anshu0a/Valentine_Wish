import { useEffect, useState } from 'react'
import '../../CssFile/Home-css/List.css'

import Pannel from './Pannel'

export default function List({setProfiles, profiles, msg, setMsg }) {
    const [alldata, setAllData] = useState({ view: [], my: [], all: [] })
    const [page, setPage] = useState({ no: 1 })

    useEffect(() => {
        if (!profiles || profiles.length === 0) return;

        let arr0 = profiles.map(p => p._id);
        let arr1 = JSON.parse(localStorage.getItem("MyLink")) || [];
        let arr2 = JSON.parse(localStorage.getItem("ViewLink")) || [];

        arr1 = arr1.filter(id => arr0.includes(id));
        arr2 = arr2.filter(id => arr0.includes(id));
        localStorage.setItem("MyLink", JSON.stringify(arr1));
        localStorage.setItem("ViewLink", JSON.stringify(arr2));
       
        setAllData((pre) => ({
            ...pre,
            view: profiles.filter(ele => arr2.includes(ele._id)),
            my: profiles.filter(ele => arr1.includes(ele._id)),
            all: profiles.filter(p => !arr1.includes(p._id) && !arr2.includes(p._id))
        }));


    }, [profiles]);

    return (
        <>
            <div className='mainlistop isFlex'>
                <div className={`${page.no == 1 ? "curr" : ""} isFlow div`}
                    onClick={() => setPage((pre) => ({ ...pre, no: 1 }))}
                >Explore</div>
                <div className={`${page.no == 2 ? "curr" : ""} isFlow div`}
                    onClick={() => setPage((pre) => ({ ...pre, no: 2 }))}
                >My Space</div>
                <div className={`${page.no == 3 ? "curr" : ""} isFlow div`}
                    onClick={() => setPage((pre) => ({ ...pre, no: 3 }))}
                >Watched</div>
            </div>

            <div className="databox isFlex">
                {
                    page.no == 1 ?
                        <Pannel alldata={alldata.all} />
                        : page.no == 2 ?
                            <Pannel setProfiles={setProfiles}  msg={msg} setMsg={setMsg} my={true} alldata={alldata.my} />
                            :
                            <Pannel alldata={alldata.view} />
                }
            </div>
        </>
    );
}


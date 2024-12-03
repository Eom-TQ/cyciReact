import { useEffect, useState } from "react";

export default function OutStudy() {

    const [메세지, 변경메세지] = useState('');

    function start() {
        const data = localStorage.getItem('study');
        if (data !== '' && data !== 'null') {
            변경메세지(data);
        }

    }

    useEffect(() => {
        start();
    })
    return (
        <div>
            <h1>Out Study</h1>
            {메세지}
        </div>
    )
}
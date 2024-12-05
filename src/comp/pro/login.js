import { useEffect, useRef, useState } from 'react';
import { areaList, memberLogin } from '../api/member';
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();

    const idRef = useRef('');
    const pwRef = useRef('');

    useEffect(() => {
        localStorage.removeItem('userId');
    }, []);


    const loginAction = () => {
        const idValue = idRef.current.value;
        const pwValue = pwRef.current.value;

        let obj = Object();
        obj.userId = idValue;
        obj.userPw = pwValue;
        memberLogin(obj).then(res => {
            const data = res.data;


            if (data.code === '200' && data.data === 'Y') {
                console.log('성공');
                alert('로그인 되었습니다.');
                localStorage.setItem('userId', idValue);
                localStorage.setItem('auto', 'random UUID JWT');
                navigate('/itemList');
            } else {
                idRef.current.value = '';
                pwRef.current.value = '';
                idRef.current.focus();
                alert('아이디와 비밀번호를 확인해주세요');
            }

        }).catch(err => {
            alert('err');
        })

    }

    return (
        <div className='App'>
            <input type='text' placeholder='아이디 입력' ref={idRef} />
            <input type='text' placeholder='비밀번호 입력' ref={pwRef} />
            <input type='button' value='로그인' onClick={
                () => {
                    loginAction();
                }
            } />

        </div>
    );
}

export default Login;
import { useEffect, useRef, useState } from 'react';
import { areaList, memberIdCheck, memberRegist } from '../api/member';
function Study() {

    const [아이디, 변경아이디] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('M');
    const [birth, setBirth] = useState('');
    const [area, setArea] = useState('');

    const [areas, setAreas] = useState([]);

    const [idChk, setIdChk] = useState('');

    const idRef = useRef();

    useEffect(() => {
        startList();
    }, []);

    // useMemo(startList(), [startList]);

    function startList() {
        console.log('----시작');
        areaList().then(res => {
            setAreas(res.data.data);
            setArea(res.data.data[0].idx);

        })
    }

    function joinAction() {

        if (아이디.trim.length == 0 || 아이디 !== idChk) {
            alert('아이디 중복 체크부터 해주세요');
        }

        const obj = {
            'userId': 아이디,
            'userPw': password,
            'userName': name,
            'email': email,
            'birth': birth,
            'gender': gender,
            'areaIdx': area
        }

        console.log(obj)
        memberRegist(obj).then(res => {
            console.log(res);
        }).catch(err => {
            console.log('err: ', err);
            console.log(`err: ${err}`);
        })
    }


    return (
        <div className='App'>
            <input type='text' placeholder='아이디 입력' ref={idRef} value={아이디} onChange={e => {
                변경아이디(e.target.value);
            }} />
            <input type='button' value='중복 체크' onClick={
                () => {
                    let obj = new Object();
                    obj.id = 아이디;

                    const check = memberIdCheck(obj);

                    check.then(res => {
                        console.log('==== 성공 !!');
                        console.log(res);
                        setIdChk(아이디);
                        idRef.current.disabled = true;
                    })

                    check.catch(err => {

                        console.log(err);
                    })


                }
            } /><br />

            <input type='password' placeholder='비밀번호 입력' value={password} onChange={
                (e) => {
                    setPassword(e.target.value);
                }
            }></input> <br />
            <input type='text' placeholder='이름 입력' value={name} onChange={
                (e) => {
                    setName(e.target.value);
                }
            }></input> <br />
            <input type="email" placeholder='이메일 입력' value={email} onChange={
                (e) => {
                    setEmail(e.target.value);
                }
            }></input> <br />

            <input type='radio' name='gender' value='M' checked onChange={
                (e) => {
                    setGender(e.target.value);
                }
            }></input>남자
            <input type='radio' name='gender' value='F' onChange={
                (e) => {
                    setGender(e.target.value);
                }
            }></input>여자
            <br />
            생년월일 : <input type='date' value={birth} onChange={
                (e) => {
                    setBirth(e.target.value);
                }}></input>

            <br />지역 : &nbsp;
            <select onChange={(e => { setArea(e.target.value) })}>
                {areas.map((item, index) => (
                    <option key={index} value={index} >
                        {item.areaName}
                    </option>
                ))}

            </select>

            <input type='button' value='회원가입' onClick={joinAction}></input>
        </div >
    );
}

export default Study;
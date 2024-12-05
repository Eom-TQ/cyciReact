import { useEffect, useState } from 'react';
import { areaList, memberLogin } from '../api/member';
import { useNavigate } from 'react-router-dom';
function Login() {

    const [아이디, 변경아이디] = useState('');
    const [비밀번호, 변경비밀번호] = useState('');
    const [areas, setAreas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        startList();
    }, []);

    // useMemo(startList(), [startList]);

    function startList() {
        console.log('----시작');
        areaList().then(res => {
            setAreas(res.data.data);
            console.log(areas);
        })
    }


    return (
        <div className='App'>
            <input type='text' placeholder='아이디 입력' value={아이디} onChange={e => {
                변경아이디(e.target.value);
            }} />
            <input type='text' placeholder='비밀번호 입력' value={비밀번호} onChange={e => {
                변경비밀번호(e.target.value);
            }} />
            <input type='button' value='중복 체크' onClick={
                () => {
                    let obj = new Object();
                    obj.userId = 아이디;
                    obj.userPw = 비밀번호;

                    const check = memberLogin(obj);
                    console.log(obj);
                    check.then(res => {
                        console.log(res.data.data);
                        if (res.data.data === "Y") {
                            alert('로그인 성공');
                            navigate('/mypage');
                        } else {
                            alert('로그인 실패');
                            navigate('/login')
                        }
                    })

                    check.catch(err => {

                        console.log(err);
                    })


                }
            } />

        </div>
    );
}

export default Login;
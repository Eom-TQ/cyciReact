import api from '../ax/axiosSetting'

export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
        , {
            heders: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export const memberLogin = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)
        , {
            heders: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export const areaList = () => {
    return api.get('/area/list');
}
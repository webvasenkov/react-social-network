import axios from 'axios'

const baseAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a408275d-5a41-436f-871e-389175d1d72a'
    }
})

export const API = {
    security: null,
    auth: {
        async getAuthMe() {
            const {data} = await baseAPI.get('auth/me')
            return data
        },
        async postAuthLogin(payload) {
            const {data} = await baseAPI.post('auth/login', {...payload})
            return data
        },
        async deleteAuthLogin() {
            const {data} = await baseAPI.delete('auth/login')
            return data
        }
    },
    users: {
        async getUsers(currentPage, numberUsersOnePage) {
            const {data} = await baseAPI.get(`users?page=${currentPage}&count=${numberUsersOnePage}`)
            return data
        }
    },
    profile: {
        async getProfile(userId) {
            const {data} = await baseAPI.get(`profile/${userId}`)
            return data
        },
        async getProfileStatus(userId) {
            const {data} = await baseAPI.get(`profile/status/${userId}`)
            return data
        },
        async putProfileStatus(status) {
            const {data} = await baseAPI.put('profile/status',{status})
            return data
        },
        async putProfile(profile) {
            const {data} = await baseAPI.put('profile', profile)
            return data
        }
    },
    follow: {
        async postFollow(userId) {
            const {data} = await baseAPI.post(`follow/${userId}`, null, {withCredentials: true})
            return data
        },
        async deleteFollow(userId) {
            const {data} = await baseAPI.delete(`follow/${userId}`)
            return data
        }
    }
}
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function signOut() {
    history.push('/');
}

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
        history.push('/');
    } catch (err) {
        toast.error('Falha na autenticação, verifique os seus dados', {
            position: 'top-center',
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
        yield put(signFailure());
    }
}

// a função abaixo set o token para toda aplicação depois do primeiro acesso
export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}
export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);

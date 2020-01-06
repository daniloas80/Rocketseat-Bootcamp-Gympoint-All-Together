/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// mport AuthActions from '~/store/modules/auth/actions';

import { signInRequest } from '~/store/modules/auth/actions';
// import Button from '~/styles/components/Button';
// import { Container, Form } from './styles';

import logo from '~/assets/images/logo-signin.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} width={108} alt="Gympoint" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <label>SEU E-MAIL</label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="digite o seu e-mail"
                />

                <label>SUA SENHA</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="digite o sua senha"
                />

                <button type="submit">
                    {loading ? 'Carregando...' : 'Entrar no sistema'}
                </button>
            </Form>
        </>
    );
    //   }
}

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(AuthActions, dispatch);

// export default connect(null, mapDispatchToProps)(SignIn);

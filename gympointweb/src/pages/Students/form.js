/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import {
    updateStudent,
    studentRequest,
} from '~/store/modules/students/actions';

// import api from '~/services/api';
import history from '~/services/history';

import { FormDefault } from '~/pages/_layouts/default/formStyle';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    age: Yup.number()
        .typeError('Somente números são permitidos')
        .positive('Digite um número positivo')
        .required('A idade é obrigatório'),
    weight: Yup.number()
        .typeError('Somente números são permitidos')
        .required('O peso é obrigatório')
        .positive('Digite um número positivo'),
    height: Yup.number()
        .typeError('Somente números são permitidos')
        .required()
        .positive('Digite um número positivo'),
});

export default function StudentsForm() {
    const loading = useSelector(state => state.student.loading);
    const studentUpdate = useSelector(state => state.student.student);

    const dispatch = useDispatch();
    //   const [student, setStudent] = useState([]);
    //   const { name, email, age, weight, height } = studentUpdate;

    const params = new URL(document.location).searchParams;
    const studentId = params.get('id') ? params.get('id') : '';

    // function handleInputChange(event) {
    //     const { target } = event;
    //     const value =
    //         target.type === 'checkbox' ? target.checked : target.value;
    //     const namex = target.name;

    //     // setStudent({
    //     //     [namex]: value,
    //     // });
    //     setStudent(prevState => {
    //         return { ...prevState, [namex]: value };
    //     });
    //     // onChange={e => {
    //     //     const val = e.target.value;
    //     //     setMessage(prevState => {
    //     //       return { ...prevState, message: val }
    //     //     });
    //     //   }}
    // }
    //  const studentX = { name, email, age, weight, height, ...student };
    function goTo() {
        history.push('/students');
    }

    function handleSubmit(data) {
        if (studentId !== '') {
            dispatch(updateStudent(data, studentId));
        } else {
            dispatch(studentRequest(data));
        }
    }
    return (
        <FormDefault>
            <div>
                <Form
                    initialData={studentUpdate}
                    schema={schema}
                    onSubmit={handleSubmit}
                >
                    <header>
                        <h1>Cadastro de aluno</h1>
                        <aside>
                            <button
                                type="button"
                                className="greyButton"
                                onClick={() => goTo()}
                            >
                                <MdArrowBack size={16} color="#fff" /> VOLTAR
                            </button>
                            <button type="submit" onClick={() => handleSubmit}>
                                <MdCheck size={16} color="#fff" />{' '}
                                {loading ? 'Carregando...' : 'SALVAR'}
                            </button>
                        </aside>
                    </header>
                    <div>
                        <label>
                            NOME COMPLETO
                            <Input type="text" name="name" id="name" />
                        </label>
                        <label>
                            E-MAIL
                            <Input type="email" name="email" id="email" />
                        </label>
                        <div>
                            <div>
                                <label>
                                    IDADE
                                    <Input type="number" name="age" id="age" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    PESO (Kg)
                                    <Input
                                        type="text"
                                        name="weight"
                                        id="weght"
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    ALTURA (m)
                                    <Input
                                        type="text"
                                        name="height"
                                        id="height"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </FormDefault>
    );
}

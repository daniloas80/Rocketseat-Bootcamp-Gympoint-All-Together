/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { updatePlan, planRequest } from '~/store/modules/plans/actions';
import { formatPrice } from '~/util/format';

// import api from '~/services/api';
import history from '~/services/history';

import { FormDefault } from '~/pages/_layouts/default/formStyle';

const schema = Yup.object().shape({
    title: Yup.string().required('O título do plano é obrigatório'),
    duration: Yup.number()
        .typeError('Somente números são permitidos')
        .positive('Digite um número positivo')
        .required('A duração do plano é obrigatório'),
    price: Yup.number()
        .typeError('Somente números são permitidos')
        .required('O preço é obrigatório')
        .positive('Digite um número positivo'),
    totalPrice: Yup.number()
        .truncate()
        .round(),
});

export default function PlansForm() {
    const loading = useSelector(state => state.plan.loading);
    const planUpdate = useSelector(state => state.plan.plan);

    const { duration, price } = planUpdate;

    const dispatch = useDispatch();

    const params = new URL(document.location).searchParams;
    const planId = params.get('id') ? params.get('id') : '';

    const totalPrice = !duration || !price ? 0 : formatPrice(duration * price);

    function goTo() {
        history.push('/plans');
    }

    function handleSubmit(data) {
        if (planId !== '') {
            dispatch(updatePlan(data, planId));
        } else {
            dispatch(planRequest(data));
        }
    }

    // abaixo irei tentar exibir o valor total assim que o usário digita a duração e o preço
    // function handleInputChange(event) {
    //     const { target } = event;
    //     const { value } = target;
    //     const { name } = target;

    //     switch (name) {
    //         case duration: {
    //             totalPrice.value = value * price;
    //             break;
    //         }
    //         case price: {
    //             totalPrice.value = duration * value;
    //             break;
    //         }
    //         default:
    //     }
    // }

    return (
        <FormDefault>
            <div>
                <Form
                    initialData={planUpdate}
                    schema={schema}
                    onSubmit={handleSubmit}
                >
                    <header>
                        <h1>Cadastro de plano</h1>
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
                            TÍTULO DO PLANO
                            <Input type="text" name="title" id="title" />
                        </label>
                        <div>
                            <div>
                                <label>
                                    DURAÇÃO EM MESES
                                    <Input
                                        type="number"
                                        name="duration"
                                        id="duration"
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    PREÇO MENSAL
                                    <Input
                                        type="text"
                                        name="price"
                                        id="price"
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    PREÇO TOTAL
                                    <Input
                                        type="text"
                                        name="totalPrice"
                                        id="totalPrice"
                                        value={totalPrice}
                                        disabled
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

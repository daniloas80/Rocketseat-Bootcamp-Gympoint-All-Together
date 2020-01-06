import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import swal from '@sweetalert/with-react';
import { formatPrice } from '~/util/format';
import { updatePlanRequest } from '~/store/modules/plans/actions';

import api from '~/services/api';
import history from '~/services/history';

export default function Plans() {
    const dispatch = useDispatch();
    const [plans, setPlans] = useState([]);

    // async function loadPlans(title) {
    async function loadPlans() {
        // Se houver a necessidade de criar um filtro para planos basca implemntar na forma abaixo e
        // fazer uma pequena modificação na API Gympoint no PlansController
        //  const queryParamsName = title !== undefined ? `?title=${title}` : '';
        //  const response = await api.get(`plans${queryParamsName}`);
        const response = await api.get(`plans`);

        const data = response.data.map(plan => ({
            ...plan,
            priceFormatted: formatPrice(plan.price),
        }));

        setPlans(data);
    }

    const callback = () => loadPlans();

    useEffect(() => {
        loadPlans();
    }, []);

    async function goTo(page, id) {
        const response = await api.get(`plans/${id}/show-plan`);
        dispatch(updatePlanRequest(response.data));
        history.push(`plans/${page}`);
    }

    async function willDeleteRecord(planId) {
        // const response = await api.delete(`students/${studentId}`);
        // Tentei usar o redux para a função de deletar. Está funcionando bem,
        // porém não consigo utilizar o método callback() abaixo.
        // Precisa fazer uma melhoria jogando este método para dentro de um if que deverá
        // vir logo abaixo da chama willDeleteR(studentId); onde preciso validar se o delete
        // foi bem sucedido ou não.
        // dispatch(studentDeleteRequest(studentId));
        // console.tron.log(response.status);

        await api.delete(`plans/${planId}`);
        callback();
    }

    function deleteItem(planId) {
        swal({
            title: 'Você deseja realmenete apagar o registro?',
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                willDeleteRecord(planId);

                swal('Registro apagado com sucesso.', {
                    icon: 'success',
                });
            }
        });
    }

    return (
        <>
            <header>
                <h1>Gerenciando planos</h1>
                <aside>
                    <button type="button" onClick={() => goTo('plansform')}>
                        <MdAdd size={16} color="#fff" /> CADASTRAR
                    </button>
                    {/* <input
                        type="text"
                        onChange={event => loadStudents(event.target.value)}
                        placeholder="Procurar aluno"
                        name="procurar"
                        id="procurar"
                    /> */}
                </aside>
            </header>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left' }}>TÍTULO</th>
                            <th>DURAÇÃO</th>
                            <th>VALOR P/ MÊS</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map(plan => (
                            <tr key={plan.id}>
                                <td>{plan.title}</td>
                                <td>{plan.duration}</td>
                                <td>{plan.priceFormatted}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="blueMinimalButton"
                                        onClick={() =>
                                            goTo(
                                                `plansform?id=${plan.id}`,
                                                plan.id
                                            )
                                        }
                                    >
                                        editar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => deleteItem(`${plan.id}`)}
                                        className="redMinimalButton"
                                    >
                                        apagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

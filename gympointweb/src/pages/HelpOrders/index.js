import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Textarea } from '@rocketseat/unform';
import api from '~/services/api';
import { AnswearModal } from '~/pages/_layouts/default/styles';
import { answerHelpOrders } from '~/store/modules/helporders/actions';

export default function HelpOrders() {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const [helporders, setHelpOrders] = useState([]);
    const [helpOrdersId, setHelpOrdersId] = useState([]);
    const [studentName, setStudentName] = useState([]);
    const [studentId, setStudentId] = useState([]);
    const [studentQuestion, setStudentQuestion] = useState([]);

    async function loadHelpOrders() {
        const response = await api.get(`help-orders`);
        setHelpOrders(response.data);
    }

    const callback = () => loadHelpOrders();

    useEffect(() => {
        loadHelpOrders();
    }, []);

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
        callback();
    }

    async function handleAnswear(student_id, id) {
        const response = await api.get(
            `/students/${student_id}/help-orders/${id}`
        );

        const { name } = response.data.students;
        const { question } = response.data;
        setStudentName(name);
        setStudentQuestion(question);
        setHelpOrdersId(id);
        setStudentId(student_id);

        openModal();
    }

    async function handleSubmit(data) {
        await dispatch(answerHelpOrders(data, helpOrdersId, studentId));

        const response = await api.get(`help-orders`);
        setHelpOrders(response.data);
        console.tron.log(response.data);
        closeModal();
    }

    return (
        <>
            <AnswearModal
                isOpen={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <span>
                    <strong>ALUNO</strong>
                </span>
                <strong>
                    <span style={{ color: '#ee4d64' }}>{studentName}</span>
                </strong>
                <span style={{ marginTop: 5 }}>
                    <strong>PERGUNTA DO ALUNO</strong>
                </span>
                <span>{studentQuestion}</span>
                <span>
                    <strong>SUA RESPOSTA</strong>
                </span>
                <Form
                    // schema={schema}
                    onSubmit={handleSubmit}
                >
                    <Textarea
                        name="answer"
                        type="text"
                        placeholder="Sua resposta aqui..."
                    />
                    <button type="submit">Responder aluno</button>
                </Form>
            </AnswearModal>
            <header>
                <h1>Pedidos de auxílio</h1>
            </header>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left' }}>ALUNOS</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {helporders.map(help => (
                            <tr key={help.id}>
                                <td>{help.students.name}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="blueMinimalButton"
                                        onClick={() =>
                                            handleAnswear(
                                                `${help.students.id}`,
                                                `${help.id}`
                                            )
                                        }
                                    >
                                        responder
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

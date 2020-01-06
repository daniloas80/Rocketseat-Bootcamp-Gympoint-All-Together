import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';

// import swal from 'react-bootstrap-sweetalert';
import swal from '@sweetalert/with-react';
import { updateStudentRequest } from '~/store/modules/students/actions';

import api from '~/services/api';
import history from '~/services/history';

export default function Students() {
    const dispatch = useDispatch();
    const [students, setStudents] = useState([]);

    async function loadStudents(name) {
        const queryParamsName = name !== undefined ? `?name=${name}` : '';
        const response = await api.get(`students${queryParamsName}`);

        setStudents(response.data);
    }

    const callback = () => loadStudents();

    useEffect(() => {
        loadStudents();
    }, []);

    async function goTo(page, studentId) {
        const response = await api.get(`students/${studentId}/show-student`);
        dispatch(updateStudentRequest(response.data));
        history.push(`students/${page}`);
    }
    // async function willDelete(studentId) {
    //     // await api.delete(`students/${studentId}`);
    //     swal('Registro apagado com sucesso!', {
    //         icon: 'success',
    //     });
    //     return true;
    // }

    async function willDeleteRecord(studentId) {
        // const response = await api.delete(`students/${studentId}`);
        // Tentei usar o redux para a função de deletar. Está funcionando bem,
        // porém não consigo utilizar o método callback() abaixo.
        // Precisa fazer uma melhoria jogando este método para dentro de um if que deverá
        // vir logo abaixo da chama willDeleteR(studentId); onde preciso validar se o delete
        // foi bem sucedido ou não.
        // dispatch(studentDeleteRequest(studentId));
        // console.tron.log(response.status);

        await api.delete(`students/${studentId}`);
        callback();
    }

    function deleteItem(studentId) {
        swal({
            title: 'Você deseja realmenete apagar o registro?',
            // text:
            //     'Once deleted, you will not be able to recover this imaginary file!',
            //  icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                willDeleteRecord(studentId);

                swal('Registro apagado com sucesso.', {
                    icon: 'success',
                });
            }
        });
    }

    return (
        <>
            <header>
                <h1>Gerenciando alunos</h1>
                <aside>
                    <button type="button" onClick={() => goTo('studentsform')}>
                        <MdAdd size={16} color="#fff" /> CADASTRAR
                    </button>
                    <input
                        type="text"
                        onChange={event => loadStudents(event.target.value)}
                        placeholder="Procurar aluno"
                        name="procurar"
                        id="procurar"
                    />
                </aside>
            </header>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left' }}>NOME</th>
                            <th style={{ textAlign: 'left' }}>EMAIL</th>
                            <th>IDADE</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td style={{ textAlign: 'left' }}>
                                    {student.email}
                                </td>
                                <td>{student.age}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="blueMinimalButton"
                                        onClick={() =>
                                            goTo(
                                                `studentsform?id=${student.id}`,
                                                student.id
                                            )
                                        }
                                    >
                                        editar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            deleteItem(`${student.id}`)
                                        }
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

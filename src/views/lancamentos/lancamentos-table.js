import React from 'react'
import currencyFormatter from 'currency-formatter'

export default function LancamentosTable(props) {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, { locale: 'pt-BR' })}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button title="Efetivar"
                        className="btn btn-success"
                        onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}
                        disabled={ lancamento.status !== 'PENDENTE'}
                        type="button">
                        <i className="pi pi-check p-mr-2"></i>
                    </button>
                    <button title="Cancelar"
                        type="button"
                        className="btn btn-warning"
                        disabled={ lancamento.status !== 'PENDENTE'}
                        onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}>
                        <i className="pi pi-times p-mr-2"></i>
                    </button>
                    <button title="Editar"
                        type="button"
                        className="btn btn-primary"
                        onClick={e => props.editar(lancamento.id)}>
                        <i className="pi pi-pencil p-mr-2"></i>
                    </button>
                    <button title="Deletar"
                        type="button"
                        className="btn btn-danger"
                        onClick={e => props.deletar(lancamento)}>
                        <i className="pi pi-trash p-mr-2"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
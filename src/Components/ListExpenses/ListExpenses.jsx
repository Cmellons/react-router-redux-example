import React from 'react'

function ListExpenses(props) {
    console.log(props);
    console.log(props.match.params.id);
    const expenseType = props.match.params.id
  return (
    <div>
      List Expenses
    </div>
  )
}

export default ListExpenses

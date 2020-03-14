import React from 'react';
export class Content extends React.Component {
    dataText = "context"
    state = {
        empData: []
    }

    async remove(empId) {
        await fetch("http://localhost:8074/api/employee/" + empId, {
            method: 'DELETE',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployees = [...this.state.empData].filter(i => i.eId !== empId);
            this.setState({ empData: updatedEmployees });
        });

    }
    componentDidMount() {
        fetch('http://localhost:8074/api/employee/all')
            .then(response => response.json())
            .then(data => this.setState({ empData: data }));
        console.log("emp.data:" + this.state.empData);
    }
    render() {
        const empList = this.state.empData.map((emp, i) => {
            return <tr>
                <td>{emp.eId}</td>
                <td>{emp.eName}</td>
                <td>{emp.eSalary}</td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.remove(emp.eId)}>Delete
                      </button>
                </td>
            </tr>
        });
        return (
            <div>
                <p>Content part! {this.dataText}</p>
                <table>
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Name</td>
                            <td> Salary</td>
                        </tr>
                    </thead>
                    <tbody>

                        {empList}
                    </tbody>
                </table>
            </div>
        );
    }
}
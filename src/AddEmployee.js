import React from 'react';
export class AddEmployee extends React.Component {
    emptyEmp = {
        eId: '',
        eName: '',
        eSalary: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            empData: this.emptyEmp
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let emp = { ...this.state.empData };
        emp[name] = value;
        this.setState({ empData: emp });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const emp = this.state.empData;
        console.log("emp:" + JSON.stringify(emp));
        await fetch('http://localhost:8074/api/employee', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emp),
        });
        this.props.history.push('/list-emp');
    }
    render() {
        return (<div className="container pt-5 ">
            <div className="col-sm-6">
                <div className="card  bg-transparent">
                    <div className="card-header text-center text-white bg-info"><b>AddEmployee</b>
                    </div>
                    <div className="card-body ">
                        <form onSubmit={this.handleSubmit}>
                            <div className="Form-group mx-2 my-3 text-black">
                                <div className="row mx-2 my-3">
                                    <label >Employee Name</label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        id="name"
                                        name="eName"
                                        placeholder="name" />
                                </div>
                                <div className="Form-group mx-2 my-3 text-black">
                                    <label >Employee Salary</label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="eSalary"
                                        id="sal"
                                        placeholder="salary" />
                                </div>
                                <button type="submit" class="btn btn-info float-right">save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        );
    }
}


export const Employee = 
    {
        empId:'',
        firstName:'',
        lastName:'',
        mobile:'',
        emailId:'',
        designation:'',
        reportee:''
    }



export const Headers = {
    'Content-Type': 'application/json',
    'Accept' : 'application/json'
  }

export const ColumnHeader=[
    {
        headerName: 'Id',
        field: 'id',
        width: 90,
        editable: false,

    },
    {
        headerName: 'Emp Id',
        field: 'empId',
        width: 130,
        editable: false,

    },
    {
        headerName: 'First Name',
        field: 'firstName',
        width: 150,
        editable: false,
    },
    {
        headerName: 'Last Name',
        field: 'lastName',
        width: 150,
        editable: false,
    },
    {
        Header: 'Mobile',
        field: 'mobile',
        width: 150,
        editable: false,
    },
    {
        headerName: 'Email Id',
        field: 'emailId',
        width: 150,
        editable: false,
    },
    {
        headerName: 'Designation',
        field: 'designation',
        width: 150,
        editable: false,
    },
    {
        headerName: 'Repotee Emp Id',
        field: 'reportee',
        width: 150,
        editable: false,
    }
]
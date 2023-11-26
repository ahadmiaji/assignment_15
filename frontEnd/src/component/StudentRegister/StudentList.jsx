import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
  DeleteStudentRequest,
  ReadStudentsRequest,
} from '../../ApiRequest/ApiRequest';

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let res = await ReadStudentsRequest();
      setStudentList(res['data']);
      setIsLoading(false);
    })();
  }, [isDeleted]);

  const deleteStudent = async (id) => {
    let res = await DeleteStudentRequest(id);
    if (res) {
      toast.success(`Data deleted successfully`);
      setIsDeleted(!isDeleted);
    } else {
      toast.error(`Anything wrong .`);
    }
  };

  // decide what to render
  let content = '';
  if (isLoading)
    content = (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  else if (!isLoading && studentList && studentList.length === 0)
    content = <div>Not found any data</div>;
  else if (!isLoading && studentList && studentList.length > 0)
    content = (
      <>
        <div className="student-list overflow-x-auto my-10 px-28 ">
          <table className="table ">
            <thead>
              <tr>
                <th>First name</th>
                <th>lastName</th>
                <th>gender</th>
                <th>dateOfBirth</th>
                <th>nationality</th>
                <th>address</th>
                <th>email</th>
                <th>phone</th>
                <th>admissionDate</th>
                <th>courses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentList?.map((student, i) => {
                const {
                  _id,
                  firstName,
                  lastName,
                  gender,
                  dateOfBirth,
                  nationality,
                  address,
                  email,
                  phone,
                  admissionDate,
                  courses,
                } = student;
                return (
                  <tr key={i}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{gender}</td>
                    <td>{dateOfBirth}</td>
                    <td>{nationality}</td>
                    <td>{address}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{admissionDate}</td>
                    <td>{courses}</td>
                    <td className="flex gap-0 bg-slate-100">
                      <button
                        onClick={() => deleteStudent(_id)}
                        className="btn  btn-link">
                        delete
                      </button>
                      <Link
                        className="btn btn-active btn-link"
                        to={'/save-student?id=' + _id}>
                        edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </>
    );

  return <>{content}</>;
}

export default StudentList;

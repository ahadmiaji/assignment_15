import axios from 'axios';

export async function CreateStudentRequest(postBody) {
  try {
    let res = await axios.post(
      `http://localhost:5444/api/v1/CreateStudent`,
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

///////
export async function ReadStudentsRequest() {
  try {
    return await axios
      .get(`http://localhost:5444/api/v1/ReadStudents`)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else {
          return false;
        }
      });
  } catch (e) {
    return false;
  }
}

/////////
export async function ReadStudentByIDRequest(id) {
  try {
    return await axios
      .get(`http://localhost:5444/api/v1/ReadStudentByID/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else {
          return false;
        }
      });
  } catch (e) {
    return false;
  }
}

//////////
export async function DeleteStudentRequest(id) {
  try {
    let URL = `http://localhost:5444/api/v1/DeleteStudent/${id}`;

    return axios.get(URL).then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });
  } catch (e) {
    return false;
  }
}

////////////
export async function UpdateStudentRequest(postBody, id) {
  try {
    return await axios
      .post(`http://localhost:5444/api/v1/UpdateStudent/${id}`, postBody)
      .then((res) => {
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      });
  } catch (e) {
    return false;
  }
}

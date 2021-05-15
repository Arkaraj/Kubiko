// eslint-disable-next-line import/no-anonymous-default-export
export default {
  joinRoom: async (code) => {
    const res = await fetch("/students/join", {
      method: "POST",
      body: JSON.stringify(code),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  submitQuiz: async (option, _quizId) => {
    const res = await fetch(`/students/quiz/${_quizId}`, {
      method: "POST",
      body: JSON.stringify(option),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data);
    // We get the user data
    else return {};
  },
  getAllRooms: async () => {
    const res = await fetch("/students/course");
    const data = await res.json();
    return data;
  },
  overallMarks: async (_courseId) => {
    const res = await fetch(`/students/class/overall/${_courseId}`);
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
  postQuiz: async (quizMarks, _quizId, _courseId) => {
    const res = await fetch(`/students/marks/${_quizId}/${_courseId}`, {
      method: "POST",
      body: JSON.stringify(quizMarks),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
  deleteRoom: async (_courseId) => {
    const res = await fetch(`/students/course/${_courseId}`, {
      method: "DELETE",
    });
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
};

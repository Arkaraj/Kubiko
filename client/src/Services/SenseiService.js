// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createRoom: async (room) => {
    const res = await fetch("/teachers/course", {
      method: "POST",
      body: JSON.stringify(room),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  createQuestion: async (question) => {
    const res = await fetch("/teachers/question", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data);
    // We get the user data
    else return {};
  },
  getAllCreatedCourse: async () => {
    const res = await fetch("/teachers/course");
    const data = await res.json();
    return data;
  },
  GetStudents: async (_id) => {
    const res = await fetch(`/teachers/students/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  // Sync backend and front end
  overallMarks: async (_userId, _courseId) => {
    const res = await fetch(
      `/teachers/student/overall/${_userId}/${_courseId}`
    );
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
  createQuiz: async (quiz, _courseId) => {
    const res = await fetch(`/teachers/createQuiz/${_courseId}`, {
      method: "POST",
      body: JSON.stringify(quiz),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
  deleteRoom: async (_courseId) => {
    const res = await fetch(`/teachers/${_courseId}`, {
      method: "DELETE",
    });
    if (res.status !== 401) return res.json().then((data) => data);
    else return {};
  },
};

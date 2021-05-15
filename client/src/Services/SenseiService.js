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
  createQuestion: async (question, quizId) => {
    const res = await fetch(`/teachers/question/${quizId}`, {
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
  createOption: async (option, pollId) => {
    const res = await fetch(`/teachers/option/${pollId}`, {
      method: "POST",
      body: JSON.stringify(option),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data.poll);
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
  GetQuiz: async (_id) => {
    const res = await fetch(`/teachers/quiz/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  GetPoll: async (_id) => {
    const res = await fetch(`/teachers/poll/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  updateQuiz: async (_id) => {
    const res = await fetch(`/teachers/quiz/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  updatePoll: async (_id) => {
    const res = await fetch(`/teachers/poll/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
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
  createPoll: async (poll, _courseId) => {
    const res = await fetch(`/teachers/poll/${_courseId}`, {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data.poll);
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

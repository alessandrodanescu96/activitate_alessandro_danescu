console.log("opened");
const changeHistory = () => {
  const state = { page_id: 1, user_ID: 5 };
  const url = "replaced-state.html";
  // window.history.back();

  history.replaceState(state, "", url);
};

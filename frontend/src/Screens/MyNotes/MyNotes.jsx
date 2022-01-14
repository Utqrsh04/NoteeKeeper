import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";
import { marked } from "marked";

const MyNotes = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;
  console.log(loading, notes, error);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const deleteHandler = () => {
    if (window.confirm("Are you Sure...?"));
  };

  useEffect(() => {
    dispatch(listNotes());

    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successCreate]);

  return (
    <div>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl ">
        <span className="block xl:inline">Welcome back</span>{" "}
        <span className="block text-indigo-600 xl:inline">{userInfo.name}</span>
      </h1>

      {/* Create NewNote Button */}
      <Link to="/createnote" className="inline-block">
        <button className="flex items-center px-1 py-2 mt-4 font-medium  text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoklEQVRIie2VXQrDIBCEv8acqzfokQq5VV5DjxUU+2CEZWH9SWghJANiVndmGEEDV8UKxG2sPcQJ8IKsR4a17oF3yaAkHgs8aezlwqga3Da/GsQsOFlog1boNA+rUW/UjiH3WwZR1QwVwcOwjsiM3IufJ7gNzmswi++lh9j65mRhLV7l9xg08f9+kwPpNTySIsjCqc0IPNmfLJB+Wp+d/CviCxenMK+etFDPAAAAAElFTkSuQmCC"
            alt="createIcon"
          />
          <span className="mx-1">Create New Note</span>
        </button>
      </Link>

      {/* Card Container */}
      <div className="mx-auto container py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {error && <Error message={error} />}
          {loading && <Loading />}
          {/* Mapping Cards */}
          {notes.reverse().map((note) => (
            <div
              key={note._id}
              className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
            >
              <h1 className="text-gray-100 font-bold -mb-7 leading-7 ">
                {note.title}
              </h1>
              <div>
                <h3
                  className="text-gray-800 dark:text-gray-100 leading-7 w-11/12"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(note.content),
                  }}
                ></h3>
              </div>
              <div>
                <div className="mb-3 flex items-center">
                  <div className="border bg-green-600 border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-white text-xs flex items-center">
                    <p className="text-white font-semibold">{note.category}</p>
                  </div>
                  {/* <div className="p-1 bg-gray-800 dark:bg-gray-100 rounded-full ml-2 text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-star"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                    </svg>
                  </div> */}
                </div>
                <div className="flex items-center justify-between text-gray-800">
                  <p className="dark:text-gray-100 text-sm">
                    {note.createdAt.split("T")[0] +
                      " " +
                      note.createdAt.substring(11, 19)}
                  </p>

                  <div className="flex space-x-2">
                    {/* Edit Button */}
                    <Link
                      to={`/note/${note._id}`}
                      className="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                      </svg>
                    </Link>

                    {/* Delete Button */}
                    <button
                      className="w-8 h-8 rounded-full dark:bg-red-400 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center"
                      onClick={() => deleteHandler(note._id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyNotes;

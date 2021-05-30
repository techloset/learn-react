import { db } from "../../config/firebase";
import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  FETCH_STUDENTS,
} from "../types/types";

// network requests can only be made in actions ( api , firebase )

// fetch students from firebase action
export const fetchStudents = (setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    let snapshot = await db.collection("students").get();
    let students = [];
    snapshot.forEach((doc) => {
      students.push({
        docID: doc.id,
        ...doc.data(),
      });
    });

    console.log("data from firebase into action", students);
    dispatch({
      type: FETCH_STUDENTS,
      payload: students,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
};

// add student in firebase action
export const addStudent =
  (data, setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db.collection("students").add(data);
      console.log("data added into firebase in action",);
      dispatch({
        type: ADD_STUDENT,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };


  // delete student in firebase action
export const deleteStudent =
(docID, setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    await db.collection("students").doc(docID).delete();
    console.log("data delete into firebase in action",);
    dispatch({
      type: DELETE_STUDENT,
      payload: docID,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
};


// update student in firebase action
export const updateStudent =
  (docID,data, setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db.collection("students").doc(docID).update(data);
      console.log("data added into firebase in action",);
      dispatch({
        type: UPDATE_STUDENT,
        payload: {docID,data},
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

import axios from "axios";
import { baseURL } from "../Component/Helper";

export const Init = () => {
  return async dispatch => {
    const token = localStorage.getItem("access");
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}

export const BookCar = (data,setLoading) => {
  setLoading(true)
  return async dispatch => {
    axios.post(baseURL + '/addshipments', data).then((resp) => {
      if (resp.status === 201) {
        setLoading(false)
        alert("vehicle booked successfully our team will contact you soon")
      }
    }
    ).catch((err) => {
      console.log(err)
      alert("Something went wrong please try again later")
      setLoading(false)
    })
  }
}
export const BookTour = (data,setLoading,setShow) => {
  setLoading(true)
  return async dispatch => {
    axios.post(baseURL + '/AddTour', data).then((resp) => {
      if (resp.status === 201) {
        alert("Vehicle booked successfully our team will contact you soon")
        setLoading(false)
        setShow(false)
      }
    }
    ).catch((err) => {
      console.log(err)
      setLoading(false)
      alert("Something went wrong please try again later")

    })
  }
}


